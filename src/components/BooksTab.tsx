import { BookOpen } from "lucide-react";
import Book from "@/assets/Book.jpg";
//import projectStemCells from "../assets/project-stem-cells.jpg";

const books = [
  {
    title: "Dhuxorotat Xonghoto Shrawan",
    assameseTitle: "(ধূসৰতাত সংহত শ্ৰৱণ)",
    author: "Rubul Mout",
    year: "2015",
    language: "Assamese",
    description: "A collection of short stories.",
    imageUrl: Book,
    link: null,
    available: false
  },
  {
    title: "Moro Eta Sapon Ase",
    assameseTitle: "(মোৰো এটা সপোন আছে)",
    author: "Rubul Mout",
    year: "2017",
    language: "Assamese",
    description: "A bestselling memoir depicting Dr. Mout's journey from a poor peasant family in rural Assam to Harvard Medical School. Over 50,000 copies have been sold.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595491894i/54645343.jpg",
    link: "https://www.goodreads.com/book/show/54645343-moro-eata-sapon-ase",
    available: true
  }
  
];

export const BooksTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Books</h1>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Published literary works in Assamese language
            </p>
          </div>

          <div className="bg-[#f2f2f2] backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Published Works</h2>
            <div className="space-y-6 sm:space-y-8">
              {books.map((book, index) => (
                <div key={index} className="border-b border-border/30 pb-4 sm:pb-6 last:border-b-0">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-full sm:w-32 md:w-40 h-48 sm:h-56 md:h-60 rounded overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                      <img 
                        src={book.imageUrl}
                        alt={`Cover of ${book.title}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                        {book.available ? (
                          <a 
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-glow transition-colors link-underline text-base sm:text-lg break-words"
                          >
                            {book.title} {book.assameseTitle}
                          </a>
                        ) : (
                          <span className="text-black text-base sm:text-lg break-words">
                            {book.title} {book.assameseTitle} (Currently Unavailable)
                          </span>
                        )}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700 mb-3">
                        <span>by {book.author}</span>
                        <span>•</span>
                        <span>{book.year}</span>
                        <span>•</span>
                        <span>{book.language}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};