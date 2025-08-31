import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-sm text-gray-400 backdrop-blur-2xl py-14">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0 tracking-widest drop-shadow-[0_0_0.5px_rgba(255,0,128,0.7)]">
        {/* Left side: Copyright */}
        <p className="text-center md:text-left">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-rose-500 bg-clip-text text-transparent font-semibold">
            NeuBooks
          </span>
          . All Rights Reserved.
        </p>

        {/* Middle: Credit */}
        <p className="text-center">
          Designed & built by{" "}
          <span className="text-white font-semibold">Ekramul Jiad</span>
        </p>

        {/* Right side: Social links */}
        <div className="flex justify-center md:justify-end space-x-5 text-gray-400">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
