import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Plans", href: "#plans" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Privacy Policy", href: "#privacy" },
];

const moreLinks = [
  { name: "Option 1", href: "#" },
  { name: "Option 2", href: "#" },
  { name: "Option 3", href: "#" },
];

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 relative">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="MobuisEngine Logo"
          width={150}
          height={40}
          priority
        />
      </Link>

      <div className="flex space-x-6 items-center">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white hover:text-primary transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}

        <div className="relative group">
          <button
            className="text-white hover:text-primary flex items-center focus:outline-none"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More <span className="ml-1">▾</span>
          </button>

          <div className="absolute left-0 mt-2 hidden min-w-[150px] bg-white rounded-md shadow-md group-hover:block transition">
            {moreLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-black hover:bg-light-blue hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Button variant="secondary">Get Started</Button>
    </nav>
  );
};

export default Header;
