# Dr. Rubul Mout Website - Knowledge Base

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Components](#core-components)
5. [Navigation System](#navigation-system)
6. [Content Sections](#content-sections)
7. [Chatbot Integration](#chatbot-integration)
8. [Styling & Design](#styling--design)
9. [Configuration Files](#configuration-files)
10. [Development & Deployment](#development--deployment)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Website**: Dr. Rubul Mout's Academic Portfolio  
**Purpose**: Professional academic website showcasing research, publications, teaching, and contact information  
**Target Audience**: Academic community, students, researchers, and professional contacts  
**Domain**: Harvard Medical School affiliated academic site

### Key Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Navigation**: Sticky/fixed navigation with lock functionality
- **AI Chatbot**: Dify-powered chatbot for visitor inquiries
- **Multi-section Content**: Research, publications, teaching, biography, and contact sections
- **Modern UI**: Clean, professional design with Harvard Medical School branding

---

## Technology Stack

### Frontend Framework
- **React 18+** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components

### Key Dependencies
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "typescript": "^5.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "@radix-ui/react-*": "UI component primitives",
  "lucide-react": "Icons",
  "class-variance-authority": "Component variants",
  "clsx": "Conditional classes"
}
```

### Development Tools
- **ESLint** for code linting
- **PostCSS** for CSS processing
- **TypeScript** for type safety

---

## Project Structure

```
kevin-rubul-modern-lab/
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Shadcn/ui components
│   │   ├── Navigation.tsx   # Main navigation
│   │   ├── ChatBox.tsx      # AI chatbot
│   │   ├── HeroSection.tsx  # Landing section
│   │   └── [Tab]Tab.tsx     # Content tab components
│   ├── assets/              # Images and static files
│   ├── lib/                 # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   └── main.tsx            # App entry point
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## Core Components

### 1. App.tsx
**Location**: `src/App.tsx`  
**Purpose**: Main application component  
**Features**:
- Renders the main site layout
- Manages global state and routing
- Integrates all major components

### 2. RubulMoutSite.tsx
**Location**: `src/components/RubulMoutSite.tsx`  
**Purpose**: Main site container and tab management  
**Key Features**:
- Tab state management (`activeTab`)
- Conditional rendering of content sections
- ChatBox integration (visible on contact page)

### 3. Navigation.tsx
**Location**: `src/components/Navigation.tsx`  
**Purpose**: Main navigation bar with advanced features  
**Key Features**:
- **Sticky/Fixed Positioning**: Toggle between sticky and fixed navigation
- **Lock Functionality**: Users can lock navigation to top of screen
- **Responsive Design**: Mobile dropdown menu
- **Clickable Name**: Dr. Rubul Mout's name links to homepage
- **Dropdown Menus**: Publications and Teaching sections
- **Harvard Medical School Logo**: Links to HMS website

**Navigation Structure**:
```typescript
const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'biography', label: 'Biography' },
  { id: 'contact', label: 'Contact' }
];

const publicationTabs = [
  { id: 'publications', label: 'Publications' },
  { id: 'patents', label: 'Patents' },
  { id: 'books', label: 'Books' },
  { id: 'news', label: "News" }
];

const teachingTabs = [
  { id: 'teaching', label: 'Overview' },

  { id: 'sundayScience', label: 'Sunday Science' }
];
```

**Navigation Features**:
- **Scroll Detection**: Changes appearance on scroll
- **Spacer Div**: Prevents page jumping when locking/unlocking
- **Overflow Control**: Prevents horizontal scrollbar shifts
- **Hover Effects**: Professional hover animations

### 4. ChatBox.tsx
**Location**: `src/components/ChatBox.tsx`  
**Purpose**: AI-powered chatbot for visitor inquiries  
**Integration**: Dify API for AI responses  
**Features**:
- Real-time chat interface
- Loading states and error handling
- Message history
- Responsive design
- Only visible on contact page

**API Configuration**:
```typescript
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
    conversation_id: "",
    user: "user-" + Date.now(),
    files: []
  })
});
```

**Streaming Response Handling**:
```typescript
// Real-time streaming response processing
const reader = response.body?.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value);
  const lines = chunk.split('\n');

  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.slice(6);
      if (data === '[DONE]') break;
      
      const parsed = JSON.parse(data);
      if (parsed.event === 'message') {
        // Update message in real-time
        fullResponse += parsed.answer || '';
      }
    }
  }
}
```

---

## Content Sections

### 1. HomeTab.tsx
**Purpose**: Landing page with hero section and overview  
**Content**: Welcome message, key highlights, and navigation to other sections

### 2. ResearchTab.tsx
**Purpose**: Showcase research projects and areas  
**Content**: Research descriptions, project cards, and achievements

### 3. BiographyTab.tsx
**Purpose**: Personal and professional background  
**Content**: Academic history, achievements, and personal information

### 4. PublicationsTab.tsx
**Purpose**: Academic publications and research papers  
**Content**: Publication list, citations, and research output

### 5. PatentsTab.tsx
**Purpose**: Patent portfolio and intellectual property  
**Content**: Patent listings and descriptions

### 6. BooksTab.tsx
**Purpose**: Published books and major publications  
**Content**: Book covers, descriptions, and purchase links

### 7. NewsTab.tsx
**Purpose**: Recent news and media coverage  
**Content**: News articles, press releases, and media mentions

### 8. TeachingTab.tsx
**Purpose**: Teaching philosophy and overview  
**Content**: Teaching approach, methodologies, and educational background



### 9. SundayScienceTab.tsx
**Purpose**: Sunday Science initiative and outreach  
**Content**: Science communication, public engagement, and educational outreach

### 10. ContactTab.tsx
**Purpose**: Contact information and communication  
**Content**: Email, office location, social media, and contact form

---

## Navigation System

### Tab Management
The website uses a single-page application (SPA) approach with tab-based navigation:

```typescript
const [activeTab, setActiveTab] = useState('home');

const handleTabChange = (tab: string) => {
  setActiveTab(tab);
};
```

### Navigation States
1. **Sticky Navigation**: Default state, follows scroll
2. **Fixed Navigation**: Locked to top of screen
3. **Scrolled State**: Enhanced shadow and styling on scroll

### Mobile Navigation
- Dropdown select menu for mobile devices
- Responsive breakpoints using Tailwind CSS
- Touch-friendly interface

---

## Chatbot Integration

### Dify AI Chatbot
**Service**: Dify AI platform  
**Endpoint**: `https://d22yt2oewbcglh.cloudfront.net/v1/chat-messages`  
**Authentication**: Bearer token authentication  
**Features**:
- Real-time AI responses
- Conversation management
- Error handling and fallbacks
- Loading states

### Chatbot Configuration
```typescript
interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const [messages, setMessages] = useState<Message[]>([
  {
    id: 1,
    text: "Hello! I'm Dr. Rubul Mout's AI assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date(),
  },
]);
```

### Error Handling
- Network error detection
- CORS error handling
- API response validation
- User-friendly error messages

---

## Styling & Design

### Design System
**Primary Color**: Harvard Crimson (`#A51C30`)  
**Secondary Colors**: White, gray scale  
**Typography**: Professional, academic font stack  
**Spacing**: Consistent 8px grid system

### Tailwind CSS Configuration
```typescript
// tailwind.config.ts
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        harvard: {
          crimson: '#A51C30',
        }
      }
    }
  },
  plugins: []
}
```

### Component Styling
- **Utility-First**: Tailwind CSS classes
- **Component Variants**: Class variance authority
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and keyboard navigation

### Animation & Transitions
- **Hover Effects**: Subtle opacity and scale changes
- **Page Transitions**: Smooth tab switching
- **Loading States**: Spinner animations
- **Navigation Transitions**: Smooth position changes

---

## Configuration Files

### 1. package.json
**Dependencies**: React, TypeScript, Vite, Tailwind CSS  
**Scripts**: Development, build, and preview commands  
**Dev Dependencies**: ESLint, PostCSS, TypeScript

### 2. tsconfig.json
**TypeScript Configuration**: Strict type checking, module resolution  
**Compiler Options**: ES2020 target, React JSX support

### 3. vite.config.ts
**Build Configuration**: React plugin, development server  
**Optimization**: Code splitting, asset handling

### 4. tailwind.config.ts
**Styling Configuration**: Custom colors, fonts, spacing  
**Content Paths**: Source file scanning

### 5. postcss.config.js
**CSS Processing**: Tailwind CSS, autoprefixer

---

## Development & Deployment

### Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
- **Port**: 8080 (or next available)
- **Hot Reload**: Automatic page updates
- **TypeScript**: Real-time type checking
- **ESLint**: Code quality checking

### Build Process
1. **TypeScript Compilation**: Type checking and compilation
2. **Asset Optimization**: Image compression and optimization
3. **Code Splitting**: Automatic bundle splitting
4. **CSS Processing**: Tailwind CSS compilation
5. **Output**: Optimized production files in `dist/`

### Deployment Considerations
- **Static Site**: Can be deployed to any static hosting
- **Environment Variables**: API keys and configuration
- **CORS**: Cross-origin resource sharing setup
- **Performance**: Optimized bundle sizes and loading

---

## Troubleshooting

### Common Issues

#### 1. Navigation Shifting
**Problem**: Page content shifts when navigation locks/unlocks  
**Solution**: Spacer div implementation in Navigation component

#### 2. Chatbot API Errors
**Problem**: "Technical difficulties" error in chatbot  
**Causes**: CORS issues, network problems, API authentication  
**Debugging**: Check browser console for detailed error messages

#### 3. Build Errors
**Problem**: TypeScript compilation errors  
**Solution**: Check type definitions and imports

#### 4. Styling Issues
**Problem**: Tailwind CSS not applying  
**Solution**: Verify content paths in tailwind.config.ts

### Performance Optimization
- **Code Splitting**: Automatic bundle optimization
- **Image Optimization**: WebP format support
- **Lazy Loading**: Component-level lazy loading
- **Caching**: Browser caching strategies

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Support**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation

---

## Maintenance & Updates

### Regular Tasks
1. **Dependency Updates**: Keep packages current
2. **Content Updates**: Refresh publications and news
3. **Security Updates**: Monitor for vulnerabilities
4. **Performance Monitoring**: Track loading times

### Content Management
- **Publications**: Regular updates of new papers
- **News**: Current events and media coverage
- **Research**: Latest projects and achievements
- **Contact Information**: Keep current

### Technical Maintenance
- **Code Quality**: Regular code reviews
- **Testing**: Component and integration testing
- **Backup**: Regular code and content backups
- **Monitoring**: Error tracking and analytics

---

## Future Enhancements

### Potential Features
1. **Blog Integration**: Academic blog functionality
2. **Event Calendar**: Speaking engagements and conferences
3. **Student Portal**: Course materials and resources
4. **Research Database**: Searchable publication database
5. **Multi-language Support**: International audience support

### Technical Improvements
1. **PWA Support**: Progressive web app features
2. **SEO Optimization**: Enhanced search engine visibility
3. **Analytics Integration**: Visitor tracking and insights
4. **Accessibility**: WCAG compliance improvements

---

*Last Updated: [Current Date]*  
*Version: 1.0*  
*Maintained by: Development Team*
