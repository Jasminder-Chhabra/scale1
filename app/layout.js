// app/layout.js
import "./globals.css";
import GlobalEffects from "@/components/GlobalEffect";

export const metadata = {
  title: "Scale Us",
  description: "Next.js app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        
        <GlobalEffects />

        {children}
      </body>
    </html>
  );
}
