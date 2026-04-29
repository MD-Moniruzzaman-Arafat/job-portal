import { LogIn, ShieldCheck } from 'lucide-react';
import { NavLink, Outlet } from 'react-router';

export default function LoginPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* <!-- Page Title --> */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <LogIn className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              Welcome Back
            </h1>
            <p className="text-lg text-muted-foreground">
              Sign in to access your account
            </p>
          </div>

          <div className="w-full text-center">
            <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
              <div className="grid grid-cols-2 gap-2 w-full">
                <NavLink
                  to={'userLogin'}
                  className={({ isActive }) =>
                    isActive
                      ? 'btn btn-ghost text-center btn-primary'
                      : 'btn btn-ghost text-center'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-user-icon lucide-user h-4 w-4 mr-2"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  User Login
                </NavLink>
                <NavLink
                  to={'companyLogin'}
                  className={({ isActive }) =>
                    isActive
                      ? 'btn btn-ghost text-center btn-primary'
                      : 'btn btn-ghost text-center'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-building2-icon lucide-building-2 h-4 w-4 mr-2"
                  >
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>
                  Company Login
                </NavLink>
              </div>
            </div>
          </div>

          <Outlet />

          {/* <!-- Security Note --> */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              <p>
                Your information is protected with industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
