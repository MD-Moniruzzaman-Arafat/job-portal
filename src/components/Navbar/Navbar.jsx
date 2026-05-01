import { useQuery } from '@tanstack/react-query';
import { Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { me } from '../../api/api';

export default function Navbar() {
  const location = useLocation();
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: me,
  });
  console.log(data);
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
          {data?.data?.role === 'USER' && (
            <nav class="hidden md:flex items-center gap-6">
              <Link
                to="/"
                class="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
              >
                Jobs
              </Link>
              <Link
                to="/user-dashboard"
                class="text-sm font-medium transition-colors text-[hsl(var(--color-primary))]"
              >
                Dashboard
              </Link>
              <Link
                to="/applied-jobs"
                class="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
              >
                My Applications
              </Link>
            </nav>
          )}
          {location.pathname === '/login/userLogin' && (
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
          {location.pathname === '/login/companyLogin' && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Don't have an account?
              </span>
              <Link
                to={'/register/companyRegister'}
                className="btn btn-ghost text-sm"
              >
                Sign Up
              </Link>
            </div>
          )}
          {location.pathname === '/register/userRegister' && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Already have an account?
              </span>
              <Link to={'/login/userLogin'} className="btn btn-ghost text-sm">
                Sign In
              </Link>
            </div>
          )}
          {location.pathname === '/register/companyRegister' && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Already have an account?
              </span>
              <Link
                to={'/login/companyLogin'}
                className="btn btn-ghost text-sm"
              >
                Sign In
              </Link>
            </div>
          )}
          {location.pathname === '/' ? (
            data ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                    <i
                      data-lucide="user"
                      className="h-4 w-4 text-[hsl(var(--color-primary))]"
                    ></i>
                  </div>
                  <span className="text-sm font-medium hidden md:inline">
                    {data?.data?.name}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to={'/login/userLogin'} className="btn btn-ghost text-sm">
                  Sign In
                </Link>
                <Link
                  to="/register/companyRegister"
                  className="btn btn-primary text-sm"
                >
                  Post a Job
                </Link>
              </div>
            )
          ) : (
            ''
          )}
          {location.pathname === '/user-dashboard' && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                  <i
                    data-lucide="user"
                    className="h-4 w-4 text-[hsl(var(--color-primary))]"
                  ></i>
                </div>
                <span className="text-sm font-medium hidden md:inline">
                  {data?.data?.name}
                </span>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
