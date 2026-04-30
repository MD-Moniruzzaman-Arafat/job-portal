import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import { signup } from '../../api/api';

export default function RegisterUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const passWord = watch('password');

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      toast.success('Signup Success');
      console.log(data);
    },
    onError: () => toast.error('Signup Fail'),
  });

  const onSubmit = (data) => {
    mutation.mutate({ ...data, role: 'USER' });
    console.log(data);
  };
  return (
    <>
      {/* <!-- Registration Card --> */}
      <div className="card p-8 md:p-10">
        {/* <!-- Registration Form --> */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* <!-- Name Fields Row --> */}
          <div className="space-y-2">
            <label for="name" className="label">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
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
                className="lucide lucide-user-icon lucide-user absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                {...register('name', { required: 'name is Require' })}
                type="text"
                id="name"
                name="name"
                className={`input pl-10 ${errors.name && 'border-red-500'}`}
                placeholder="John"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* <!-- Email & Phone Row --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label for="email" className="label">
                Email Address
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
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
                  className="lucide lucide-mail-icon lucide-mail absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <input
                  {...register('email', { required: 'email is require' })}
                  type="email"
                  id="email"
                  name="email"
                  className={`input pl-10 ${errors.email && 'border-red-500'}`}
                  placeholder="john.doe@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label for="phone" className="label">
                Phone Number
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
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
                  className="lucide lucide-phone-icon lucide-phone absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <input
                  {...register('phone', {
                    required: 'phone number is require',
                  })}
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`input pl-10 ${errors.phone && 'border-red-500'}`}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* <!-- Job Title & Experience Row --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label for="experience" className="label">
                Years of Experience
              </label>
              <div className="relative">
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
                  className="lucide lucide-calendar-icon lucide-calendar absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <select
                  {...register('experience', {
                    required: 'experience is require',
                  })}
                  id="experience"
                  name="experience"
                  className={`input pl-10 ${errors.experience && 'border-red-500'}`}
                >
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior (6-10 years)</option>
                  <option value="expert">Expert (10+ years)</option>
                </select>
              </div>
              {errors.experience && (
                <p className="text-red-500 text-sm">
                  {errors.experience.message}
                </p>
              )}
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
                  className="lucide lucide-lock-icon lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  {...register('password', {
                    required: 'password is required',
                  })}
                  type={`${showPassword ? 'text' : 'password'}`}
                  id="password"
                  name="password"
                  className={`input pl-10 pr-10 ${errors.password && 'border-red-500'}`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
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
                    class="lucide lucide-eye-icon lucide-eye h-4 w-4"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label for="confirmPassword" className="label">
                Confirm Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
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
                  className="lucide lucide-lock-icon lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  {...register('confirmPassword', {
                    required: 'confirmPassword is required',
                    validate: (value) => value === passWord || 'not matched',
                  })}
                  type={`${showConfirmPassword ? 'text' : 'password'}`}
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`input pl-10 pr-10 ${errors.confirmPassword && 'border-red-500'}`}
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    className="lucide lucide-eye-icon lucide-eye h-4 w-4"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <p className="text-xs text-muted-foreground -mt-2">
            Password must be at least 8 characters with letters and numbers
          </p>

          {/* <!-- Terms and Conditions --> */}
          <div className="flex items-start gap-2">
            <input
              {...register('terms', { required: 'terms and service require' })}
              type="checkbox"
              id="terms"
              name="terms"
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
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
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}
          {/* <!-- Newsletter Subscription --> */}

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="btn btn-primary w-full text-base h-11 mt-2"
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
              class="lucide lucide-user-plus-icon lucide-user-plus h-4 w-4 mr-2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" x2="19" y1="8" y2="14" />
              <line x1="22" x2="16" y1="11" y2="11" />
            </svg>
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
          <Link
            to="/login/userLogin"
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* <!-- Feature Highlights --> */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <i data-lucide="briefcase" className="h-5 w-5 text-primary"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Thousands of Jobs</h3>
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
            <i data-lucide="shield-check" className="h-5 w-5 text-primary"></i>
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
    </>
  );
}
