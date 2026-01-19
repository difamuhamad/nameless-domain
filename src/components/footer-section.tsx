import { Github, Instagram, Linkedin } from "lucide-react";

export default function FooterSection() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-neutral-800 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4 ">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/difamuhamad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/difa-muhamad-1b8347333/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/d_fluorites/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <Instagram />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-neutral-500 text-sm">
            <p>© {currentYear} Difa Muhamad</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
