import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X Profile Roaster - AI Comedy Roasts",
  description: "Enter any X username and get a hilarious AI-generated roast based on their profile and posts. Powered by X API and xAI Grok.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="exhibit-verify" content="exhibit-verify=8489c1b2e7881a59b975aff4e41757d9" />
      </head>
      <body className="font-sans antialiased min-h-screen">{children}</body>
    </html>
  );
}
