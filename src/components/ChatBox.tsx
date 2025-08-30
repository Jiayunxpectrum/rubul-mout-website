import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react";

interface ChatBoxProps {
  isVisible: boolean;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatBox = ({ isVisible }: ChatBoxProps) => {
  // Don't render if not visible
  if (!isVisible) {
    return null;
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Dr. Rubul Mout's AI assistant. I can help you with questions about Dr. Mout, or I can automatically send him an email on your behalf. Would you like to send him an email?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState("");
  const [userId] = useState("user-" + Math.random().toString(36).substr(2, 9));
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (inputValue.trim() && !isLoading) {
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        isUser: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue("");
      setIsLoading(true);

      try {
        // Call Dify API
        const response = await fetch('https://d22yt2oewbcglh.cloudfront.net/v1/chat-messages', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer app-MoVC9rjr4qy50DRzItlomvVd',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: {},
            query: inputValue,
            response_mode: "streaming",
            conversation_id: conversationId,
            user: userId,
            files: []
          })
        });

                 if (response.ok) {
           const reader = response.body?.getReader();
           if (!reader) {
             throw new Error('No response body reader available');
           }

                       let fullResponse = '';
            const decoder = new TextDecoder();
            let hasStartedResponse = false;

            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                console.log('Raw chunk:', chunk);
                const lines = chunk.split('\n');

                for (const line of lines) {
                  if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]') break;
                    
                                         try {
                       const parsed = JSON.parse(data);
                       console.log('Parsed streaming data:', parsed);
                       
                       // Store conversation ID if we receive it
                       if (parsed.conversation_id && !conversationId) {
                         setConversationId(parsed.conversation_id);
                         console.log('New conversation ID:', parsed.conversation_id);
                       }
                       
                       // Handle different event types
                       console.log('Event type:', parsed.event, 'Answer:', parsed.answer);
                       
                       if (parsed.event === 'agent_message' && parsed.answer) {
                        console.log('Creating/updating message with answer:', parsed.answer);
                        if (!hasStartedResponse) {
                          // Create the AI message when we first get content
                          const aiMessage = {
                            id: messages.length + 2,
                            text: parsed.answer,
                            isUser: false,
                            timestamp: new Date(),
                          };
                          console.log('Creating new AI message:', aiMessage);
                          setMessages(prev => [...prev, aiMessage]);
                          hasStartedResponse = true;
                          fullResponse = parsed.answer; // Initialize fullResponse
                        } else {
                          // Append to existing message
                          fullResponse += parsed.answer;
                          console.log('Appending to existing message, full response now:', fullResponse);
                          setMessages(prev => {
                            const newMessages = [...prev];
                            const lastMessage = newMessages[newMessages.length - 1];
                            if (lastMessage && !lastMessage.isUser) {
                              lastMessage.text = fullResponse;
                            }
                            return [...newMessages];
                          });
                        }
                      } else if (parsed.event === 'agent_message' && parsed.answer === '') {
                        // Handle empty answer (might be end of stream)
                        console.log('Empty answer received');
                      } else if (parsed.event === 'message_end') {
                        console.log('Message stream ended');
                      } else {
                        console.log('Unhandled event type or missing answer:', parsed);
                      }
                    } catch (e) {
                      console.log('Parsing chunk:', data);
                    }
                  }
                }
              }
            } finally {
              reader.releaseLock();
            }

            console.log('Dify API streaming response completed:', fullResponse);
            
            // If no response was received, add an error message
            if (!hasStartedResponse) {
              const errorResponse = {
                id: messages.length + 2,
                text: "I'm sorry, I didn't receive a response. Please try again.",
                isUser: false,
                timestamp: new Date(),
              };
              setMessages(prev => [...prev, errorResponse]);
            }
        } else {
          const errorText = await response.text();
          console.error('Dify API error response:', response.status, errorText);
          throw new Error(`API request failed: ${response.status} - ${errorText}`);
        }
      } catch (error) {
        console.error('Error calling Dify API:', error);
        
        // More detailed error logging
        let errorMessage = "I'm sorry, I'm experiencing technical difficulties. Please try again later.";
        
        if (error instanceof Error) {
          console.error('Error details:', error.message);
          if (error.message.includes('CORS')) {
            errorMessage = "CORS error: API doesn't allow requests from this domain.";
          } else if (error.message.includes('fetch')) {
            errorMessage = "Network error: Unable to reach the AI service.";
          }
        }
        
        const errorResponse = {
          id: messages.length + 2,
          text: errorMessage,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

    if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[10001]">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 px-6 rounded-full bg-[#A51C30] hover:bg-[#A51C30]/90 shadow-lg"
          data-testid="ask-ai-button"
        >
          Ask AI
        </Button>
      </div>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-[10001]">
        <Card className="w-80 shadow-lg bg-white border border-gray-300 overflow-hidden">
          <CardHeader className="pb-2 text-white bg-[#A51C30]">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Chat Assistant</CardTitle>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(false)}
                  className="h-6 w-6 p-0"
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[10001]">
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] bg-white rounded-t-2xl shadow-2xl border border-gray-200 z-[10001] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-primary text-white rounded-t-2xl">
            <h3 className="font-semibold text-sm sm:text-base">AI Assistant</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={messagesContainerRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                    <span>AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 text-sm sm:text-base"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="sm"
                className="px-3 sm:px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
