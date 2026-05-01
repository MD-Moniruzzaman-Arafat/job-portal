import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import { signup } from '../../api/api';

export default function RegisterCompany() {
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
    mutation.mutate({ ...data, role: 'COMPANY' });
    console.log(data);
  };
  return (
    <>
      <div className="card p-8 md:p-10 ">
        {/* <!-- Registration Form --> */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* <!-- Company Information Section --> */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200 border-border">
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
                class="lucide lucide-building-icon lucide-building h-5 w-5 text-primary"
              >
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M12 6h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M16 6h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
                <path d="M8 6h.01" />
                <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                <rect x="4" y="2" width="16" height="20" rx="2" />
              </svg>
              <h2 className="text-lg font-semibold">Company Information</h2>
            </div>

            {/* <!-- Company Name --> */}
            <div className="space-y-2">
              <label for="companyName" className="label">
                Company Name
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
                  class="lucide lucide-building2-icon lucide-building-2 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <path d="M10 12h4" />
                  <path d="M10 8h4" />
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                </svg>
                <input
                  {...register('name', {
                    required: 'Company name is required',
                  })}
                  type="text"
                  id="companyName"
                  name="companyName"
                  className={`input pl-10 ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="e.g., TechCorp Solutions"
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                  class="lucide lucide-mail-icon lucide-mail absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  name="email"
                  className={`input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="john.doe@company.com"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* <!-- Company Website & Industry Row --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label for="website" className="label">
                  Company Website
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
                    class="lucide lucide-globe-icon lucide-globe absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <input
                    {...register('websiteUrl', {
                      required: 'Website is required',
                      pattern: {
                        value:
                          /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                        message: 'Please enter a valid website URL',
                      },
                    })}
                    type="url"
                    id="website"
                    name="website"
                    className={`input pl-10 ${errors.websiteUrl ? 'border-red-500' : ''}`}
                    placeholder="https://example.com"
                  />
                </div>
                {errors.websiteUrl && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.websiteUrl.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label for="industry" className="label">
                  Industry
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
                    class="lucide lucide-briefcase-icon lucide-briefcase absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                  <select
                    {...register('industry', {
                      required: 'Industry is required',
                    })}
                    id="industry"
                    name="industry"
                    className={`input pl-10 ${errors.industry ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="consulting">Consulting</option>
                    <option value="marketing">Marketing & Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {errors.industry && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.industry.message}
                  </p>
                )}
              </div>
            </div>

            {/* <!-- Company Size & Founded Year Row --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label for="companySize" className="label">
                  Company Size
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
                    class="lucide lucide-users-icon lucide-users absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  <select
                    {...register('employeeCount', {
                      required: 'Company size is required',
                    })}
                    id="companySize"
                    name="companySize"
                    className={`input pl-10 ${errors.employeeCount ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                {errors.employeeCount && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.employeeCount.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label for="foundedYear" className="label">
                  Founded Year
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
                    class="lucide lucide-calendar-icon lucide-calendar absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <input
                    {...register('foundedYear', {
                      required: 'Founded year is required',
                      min: {
                        value: 1800,
                        message: 'Please enter a valid year',
                      },
                      max: {
                        value: 2025,
                        message: 'Please enter a valid year',
                      },
                    })}
                    type="number"
                    id="foundedYear"
                    name="foundedYear"
                    className={`input pl-10 ${errors.foundedYear ? 'border-red-500' : ''}`}
                    placeholder="e.g., 2010"
                    min="1800"
                    max="2025"
                  />
                </div>
                {errors.foundedYear && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.foundedYear.message}
                  </p>
                )}
              </div>
            </div>

            {/* <!-- Company Location --> */}
            <div className="space-y-2">
              <label for="location" className="label">
                Headquarters Location
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
                  class="lucide lucide-map-pin-icon lucide-map-pin absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <input
                  {...register('location', {
                    required: 'Location is required',
                  })}
                  type="text"
                  id="location"
                  name="location"
                  className={`input pl-10 ${errors.location ? 'border-red-500' : ''}`}
                  placeholder="City, Country"
                />
              </div>
              {errors.location && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* <!-- Company Description --> */}
            <div className="space-y-2">
              <label for="description" className="label">
                Company Description
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                className={`textarea min-h-30 ${errors.description ? 'border-red-500' : ''}`}
                placeholder="Tell us about your company, mission, and what makes it a great place to work..."
                {...register('description', {
                  required: 'Description is required',
                  minLength: {
                    value: 100,
                    message: 'Description must be at least 100 characters long',
                  },
                })}
              ></textarea>
              <p className="text-xs text-muted-foreground">
                Minimum 100 characters. This will be displayed on your company
                profile.
              </p>
            </div>
            {errors.description && (
              <p className="text-xs text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* <!-- Account Security Section --> */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200 border-border">
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
                class="lucide lucide-shield-icon lucide-shield h-5 w-5 text-primary"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <h2 className="text-lg font-semibold">Account Security</h2>
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
                    class="lucide lucide-lock-icon lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                    })}
                    type={`${showPassword ? 'text' : 'password'}`}
                    id="password"
                    name="password"
                    className={`input pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
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
                  <p className="text-xs text-red-500 mt-1">
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
                    class="lucide lucide-lock-icon lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    {...register('confirmPassword', {
                      validate: (value) =>
                        value === passWord || 'Passwords do not match',
                      required: 'Please confirm your password',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                    })}
                    type={`${showConfirmPassword ? 'text' : 'password'}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`input pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
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
                      class="lucide lucide-eye-icon lucide-eye h-4 w-4"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <p className="text-xs text-muted-foreground -mt-2">
              Password must be at least 8 characters with letters and numbers
            </p>
          </div>

          {/* <!-- Terms and Conditions --> */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <input
                {...register('terms', {
                  required: 'You must agree to the Terms of Service',
                })}
                type="checkbox"
                id="terms"
                name="terms"
                className={`mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring ${errors.terms ? 'border-red-500' : ''}`}
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
              <p className="text-xs text-red-500 mt-1">
                {errors.terms.message}
              </p>
            )}

            <div className="flex items-start gap-2">
              <input
                {...register('verified', {
                  required: 'You must confirm your authorization',
                })}
                type="checkbox"
                id="verified"
                name="verified"
                className={`mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring ${errors.verified ? 'border-red-500' : ''}`}
              />
              <label for="verified" className="text-sm text-muted-foreground">
                I confirm that I am an authorized representative of this company
                and have the right to register on its behalf
              </label>
            </div>
            {errors.verified && (
              <p className="text-xs text-red-500 mt-1">
                {errors.verified.message}
              </p>
            )}

            <div className="flex items-start gap-2">
              <input
                {...register('updates', {
                  required: 'You must agree to receive updates',
                })}
                type="checkbox"
                id="updates"
                name="updates"
                className={`mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring ${errors.updates ? 'border-red-500' : ''}`}
              />
              <label for="updates" className="text-sm text-muted-foreground">
                Send me product updates, hiring tips, and promotional offers via
                email
              </label>
            </div>
            {errors.updates && (
              <p className="text-xs text-red-500 mt-1">
                {errors.updates.message}
              </p>
            )}
          </div>

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
              class="lucide lucide-building2-icon lucide-building-2 h-4 w-4 mr-2"
            >
              <path d="M10 12h4" />
              <path d="M10 8h4" />
              <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
              <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
              <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
            </svg>
            Register Company
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
            to={'/login/companyLogin'}
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* <!-- Benefits for Employers --> */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <i data-lucide="users" className="h-5 w-5 text-primary"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Access Top Talent</h3>
            <p className="text-xs text-muted-foreground">
              Connect with thousands of qualified candidates actively looking
              for opportunities
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <i data-lucide="zap" className="h-5 w-5 text-primary"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Easy Job Posting</h3>
            <p className="text-xs text-muted-foreground">
              Post jobs in minutes with our intuitive interface and smart
              templates
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <i data-lucide="chart-line" className="h-5 w-5 text-primary"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Smart Analytics</h3>
            <p className="text-xs text-muted-foreground">
              Track applications and optimize your hiring with detailed insights
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
