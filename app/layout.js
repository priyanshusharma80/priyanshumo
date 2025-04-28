import "./globals.css";
import { Sora, DM_Sans } from "next/font/google";

// Load Google Fonts
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Metadata for SEO
export const metadata = {
  title: "Mobius Engine | Landing Page",
  description: "MobiusEngine.ai Front-End Assignment by Arman Khan",
  keywords: [
    "Mobius Engine",
    "Landing Page",
    "Frontend Assignment",
    "Arman Khan",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "Arman Khan", url: "https://github.com/Armaankhaan01" }],
  creator: "Arman Khan",
  metadataBase: new URL("https://mobiusengine-landing-page.vercel.app"),
  openGraph: {
    title: "Mobius Engine | Landing Page",
    description:
      "Clone of MobiusEngine.ai landing page for front-end developer assignment.",
    url: "https://mobiusengine-landing-page.vercel.app",
    siteName: "Mobius Engine",
    images: [
      {
        url: "/HiringTrendBook.png",
        width: 1200,
        height: 630,
        alt: "Mobius Engine Landing Page",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} antialiased`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
