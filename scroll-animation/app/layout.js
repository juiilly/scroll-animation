import "./globals.css";

export const metadata = {
  title: "Scroll Driven Hero Animation",
  description: "Car Scroll Animation using GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}