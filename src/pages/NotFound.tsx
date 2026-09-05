import { Link } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-sans antialiased">
      <div className="text-center px-6">
        <p className="micro-label text-primary-light mb-6">Error</p>
        <h1 className="display-xl text-foreground">404</h1>
        <p className="mt-6 text-lg text-gray-500">Nothing here.</p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 micro-label text-primary-light hover:text-foreground transition-colors duration-200"
        >
          <ArrowUpLeft className="h-3.5 w-3.5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
