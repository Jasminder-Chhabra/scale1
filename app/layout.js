import "./globals.css";
import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "Scale Us",
  description: "Next.js app",
  icons: {
    icon: "/favicon.svg",   // Favicon in public/
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
