import { Eye, LogIn, Mail, ShieldCheck } from 'lucide-react';

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

          {/* <!-- Login Card --> */}
          <div className="card p-8 md:p-10">
            {/* <!-- Login Form --> */}
            <form className="space-y-5">
              {/* <!-- Email --> */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input pl-10"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* <!-- Password --> */}
              <div className="space-y-2">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock-icon lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input pl-10 pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="btn btn-primary w-full text-base h-11"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </button>
            </form>

            {/* <!-- Divider --> */}
            <div className="relative my-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200 border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* <!-- Sign Up Link --> */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Don't have an account?
              <a
                href="register.html"
                className="text-primary hover:underline font-medium"
                id="signupLink"
              >
                Sign up as Job Seeker
              </a>
            </div>
          </div>

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
