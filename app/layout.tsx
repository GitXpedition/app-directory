*
 * =================================================================
 * ARCHIVO: app/layout.tsx
 * INSTRUCTIONS: This version is corrected to fix the build error.
 * The font has been changed from 'Geist_Sans' to 'Inter', a
 * standard font that will resolve the "Unknown font" issue.
 * =================================================================
 */
import '#/styles/globals.css';
import db from '#/lib/db';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: 'ArgenSource.com', template: '%s | ArgenSource' },
  description:
    'Source Information for Advanced Industries. We connect industrial needs with the right suppliers through a unique and efficient classification system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The original template fetches demo items for the nav. We keep this structure.
  // Note: The content of `db.demo.findMany()` might need to be adapted later
  // to reflect the ArgenSource sections.
  const navItems = db.demo.findMany();

  return (
    <html lang="en" className={`[color-scheme:dark] ${inter.variable}`}>
      <body className="overflow-y-scroll bg-gray-950 font-sans antialiased">
        <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-b-0 lg:border-gray-800">
          {/* We use the real GlobalNav component from the template */}
          <GlobalNav items={navItems} />
        </div>

        <div className="lg:pl-72">
          <div className="mx-auto mt-12 mb-24 max-w-4xl space-y-9 px-8 py-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

