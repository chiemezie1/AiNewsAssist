// src/app/layout.js
import './globals.css';
import { AppProvider } from "@/context/contextProvider";

export const metadata = {
  title: "Absolute AI",
  description: "AI powered News assistant",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className="">
        <main className="">
          <AppProvider session={session}>
            {children}
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
