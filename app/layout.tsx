import type { Metadata } from "next";
import { Crimson_Text, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aleyna Ayvaz | Front-End Developer",
  description: "Front-End Developer portfolyosu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${crimson.variable} ${dmSans.variable} antialiased bg-stone-50 text-stone-900`}>
        <nav className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-crimson text-2xl font-semibold tracking-tight text-stone-900">
              Aleyna Ayvaz
            </Link>
            <div className="flex gap-8">
              {["About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-dm-sans text-sm text-stone-500 hover:text-stone-900 transition-colors tracking-wide uppercase"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}