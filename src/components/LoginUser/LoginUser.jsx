import { useMutation } from '@tanstack/react-query';
import { Eye, LogIn, Mail } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import { login } from '../../api/api';

export default function LoginUser() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success('Login Success');
      console.log(data);
    },
    onError: () => toast.error('Login Fail'),
  });

  const onSubmit = (data) => {
    mutation.mutate({ ...data, role: 'USER' });
  };
  return (
    <>
      <div className="card p-8 md:p-10">
        {/* <!-- Login Form --> */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* <!-- Email --> */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
              <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                {...register('email', { required: 'email is required' })}
                type="email"
                id="email"
                name="email"
                className={`input pl-10 ${errors.email && 'border-red-500'}`}
                placeholder="you@example.com"
              />
            </div>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

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
                {...register('password', {
                  required: 'password is required',
                  minLength: {
                    value: 6,
                    message: 'password must be at least 6 characters',
                  },
                })}
                type={`${showPassword ? 'text' : 'password'}`}
                id="password"
                name="password"
                className={`input pl-10 pr-10 ${errors.password && 'border-red-500'}`}
                placeholder="Enter your password"
              />

              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
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
          <Link
            to="/register/userRegister"
            className="text-primary hover:underline font-medium"
            id="signupLink"
          >
            Sign up as Job Seeker
          </Link>
        </div>
      </div>
    </>
  );
}
