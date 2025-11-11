import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'In-like-new | Premium Refurbished Tech',
  description: 'Premium refurbished technology. Rigorously tested. Certified quality. Unbeatable value.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
