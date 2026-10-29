import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Mohosenat Jahan | Full-Stack Web Developer",
  description:
    "Portfolio of Mohosenat Jahan — a Full-Stack Web Developer building modern, responsive web applications with React, Next.js, TypeScript, and MongoDB.",
  keywords: ["Mohosenat Jahan", "Full-Stack Web Developer", "React", "Next.js", "TypeScript", "MongoDB"],
  openGraph: {
    title: "Mohosenat Jahan | Full-Stack Web Developer",
    description: "Building modern, responsive web applications.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
