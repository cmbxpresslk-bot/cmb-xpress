import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found | CMB XPRESS.LK"
        description="The requested page could not be found on CMB XPRESS.LK."
        path="/404"
      />
      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">404</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111]">Page Not Found</h1>
          <p className="text-sm sm:text-base text-neutral-600">
            The page you requested does not exist or may have moved.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
