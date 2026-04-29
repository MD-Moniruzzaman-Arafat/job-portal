import { Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function Navbar() {
  const location = useLocation();
  console.log('Current location:', location);
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link to={'/'} className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">LWS Job Portal</span>
            </Link>
          </div>
          {location.pathname === '/login' && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Don't have an account?
              </span>
              <Link
                to={'/register/userRegister'}
                className="btn btn-ghost text-sm"
              >
                Sign Up
              </Link>
            </div>
          )}
          {location.pathname === '/' && (
            <div className="flex items-center gap-4">
              <Link to={'/login'} className="btn btn-ghost text-sm">
                Sign In
              </Link>
              <a
                href="register-company.html"
                className="btn btn-primary text-sm"
              >
                Post a Job
              </a>
            </div>
          )}
          {location.pathname === '/register/userRegister' && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Already have an account?
              </span>
              <Link to={'/login'} className="btn btn-ghost text-sm">
                Sign In
              </Link>
            </div>
          )}
          {location.pathname === '/register/companyRegister' && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Already have an account?
              </span>
              <Link to={'/login'} className="btn btn-ghost text-sm">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
