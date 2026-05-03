import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Timeout Killer – Auto-refresh sessions, never lose form data",
  description: "Browser extension that detects form session timeouts and automatically refreshes authentication while preserving your form data."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bad54a11-62e5-413d-8b76-6d5214855c78"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
