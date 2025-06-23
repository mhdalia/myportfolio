import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahmoud Salih - Full-Stack Developer',
  description: 'Portfolio of Mahmoud Salih, a passionate Full-Stack Developer with expertise in React, Vue.js, and Node.js',
  keywords: 'Full-Stack Developer, React, Vue.js, Node.js, JavaScript, Web Development',
  authors: [{ name: 'Mahmoud Salih' }],
  openGraph: {
    title: 'Mahmoud Salih - Full-Stack Developer',
    description: 'Portfolio of Mahmoud Salih, a passionate Full-Stack Developer with expertise in React, Vue.js, and Node.js',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}