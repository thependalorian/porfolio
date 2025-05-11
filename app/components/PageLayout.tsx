import Navbar from './Navbar';
import Footer from './Footer';

/**
 * PageLayout Component
 * 
 * A wrapper component that provides consistent layout structure for all pages.
 * Includes Navbar, main content area with proper spacing, and Footer.
 * Located at: app/components/PageLayout.tsx
 */

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout; 