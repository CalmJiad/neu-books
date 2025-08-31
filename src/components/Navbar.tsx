import { Link } from "react-router";
import Footer from "./Footer";
import Heroarea from "./Heroarea";
import { BackgroundLines } from "./ui/BackgroundLines";
import BlueButton from "./ui/BlueButton";

export default function Navbar() {
  return (
    <>
      <BackgroundLines>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white font-bold py-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0 text-[1.45rem] font-bold text-shadow-transparent">
              <span
                className="bg-gradient-to-r from-blue-400 via-violet-500 to-rose-500 
      bg-clip-text text-transparent 
      font-extrabold tracking-tight text-3xl 
      inline-block drop-shadow-[0_0_2px_rgba(255,0,128,0.7)]"
              >
                NeuBooks
              </span>
            </div>
            <div className="flex space-x-8 text-md">
              <Link to="/books" className="relative px-2 py-1 group">
                All Books
                <span
                  className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 
                                bg-gradient-to-r from-blue-400 via-violet-500 to-rose-500 
                                transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </Link>
              <Link to="/add-book" className="relative px-2 py-1 group">
                Add Book
                <span
                  className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 
                                bg-gradient-to-r from-blue-400 via-violet-500 to-rose-500 
                                transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </Link>
              <Link to="/borrow-summary" className="relative px-2 py-1 group">
                Borrow Summary
                <span
                  className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 
                                bg-gradient-to-r from-blue-400 via-violet-500 to-rose-500 
                                transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </Link>
            </div>
            <BlueButton btnname="About Us" />
          </div>
        </div>
        <Heroarea />
        <Footer />
      </BackgroundLines>
    </>
  );
}
