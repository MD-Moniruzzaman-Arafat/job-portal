export default function RegisterPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* <!-- Page Title --> */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <i data-lucide="user-plus" className="h-8 w-8 text-primary"></i>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              Create Your Account
            </h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of professionals finding their dream jobs
            </p>
          </div>

          {/* <!-- Account Type Toggle --> */}
          <div className="w-full text-center">
            <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
              <div className="grid grid-cols-2 gap-2 w-full">
                <button className="btn btn-primary text-center">
                  <i data-lucide="user" className="h-4 w-4 mr-2"></i>
                  Job Seeker
                </button>
                <a
                  href="register-company.html"
                  className="btn btn-ghost text-center"
                >
                  <i data-lucide="building-2" className="h-4 w-4 mr-2"></i>
                  Employer
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Registration Card --> */}
          <div className="card p-8 md:p-10">
            {/* <!-- Registration Form --> */}
            <form className="space-y-5">
              {/* <!-- Name Fields Row --> */}
              <div className="space-y-2">
                <label for="name" className="label">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <i
                    data-lucide="user"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  ></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input pl-10"
                    placeholder="John"
                    required
                  />
                </div>
              </div>

              {/* <!-- Email & Phone Row --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label for="email" className="label">
                    Email Address
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i
                      data-lucide="mail"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    ></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input pl-10"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label for="phone" className="label">
                    Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i
                      data-lucide="phone"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    ></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input pl-10"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Job Title & Experience Row --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label for="experience" className="label">
                    Years of Experience
                  </label>
                  <div className="relative">
                    <i
                      data-lucide="calendar"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    ></i>
                    <select
                      id="experience"
                      name="experience"
                      className="input pl-10"
                    >
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (3-5 years)</option>
                      <option value="senior">Senior (6-10 years)</option>
                      <option value="expert">Expert (10+ years)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* <!-- Password Fields Row --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label for="password" className="label">
                    Password
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i
                      data-lucide="lock"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    ></i>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="input pl-10 pr-10"
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onclick="togglePassword('password')"
                    >
                      <i data-lucide="eye" className="h-4 w-4"></i>
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label for="confirmPassword" className="label">
                    Confirm Password
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i
                      data-lucide="lock"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    ></i>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="input pl-10 pr-10"
                      placeholder="Re-enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onclick="togglePassword('confirmPassword')"
                    >
                      <i data-lucide="eye" className="h-4 w-4"></i>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground -mt-2">
                Password must be at least 8 characters with letters and numbers
              </p>

              {/* <!-- Terms and Conditions --> */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
                  required
                />
                <label for="terms" className="text-sm text-muted-foreground">
                  I agree to the
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                  and
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* <!-- Newsletter Subscription --> */}

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="btn btn-primary w-full text-base h-11 mt-2"
              >
                <i data-lucide="user-plus" className="h-4 w-4 mr-2"></i>
                Create Account
              </button>
            </form>

            {/* <!-- Divider --> */}
            <div className="relative my-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-border border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* <!-- Sign In Link --> */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Already have an account?
              <a
                href="login.html"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </a>
            </div>
          </div>

          {/* <!-- Feature Highlights --> */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <i data-lucide="briefcase" className="h-5 w-5 text-primary"></i>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">
                  Thousands of Jobs
                </h3>
                <p className="text-xs text-muted-foreground">
                  Access opportunities from top companies worldwide
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <i data-lucide="bell" className="h-5 w-5 text-primary"></i>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Job Alerts</h3>
                <p className="text-xs text-muted-foreground">
                  Get notified when new jobs match your profile
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <i
                  data-lucide="shield-check"
                  className="h-5 w-5 text-primary"
                ></i>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Secure & Private</h3>
                <p className="text-xs text-muted-foreground">
                  Your data is protected with industry-standard security
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Additional Information --> */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              By creating an account, you'll get access to thousands of job
              opportunities from top companies worldwide.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
