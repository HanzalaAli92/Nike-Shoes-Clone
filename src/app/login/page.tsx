import Image from "next/image";

export default function LoginPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-white p-8 w-full max-w-sm">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/nike-logo.png" 
              alt="Nike Logo"
              height={17}
              width={100}
            />
          </div>
  
          {/* Title */}
          <h2 className="text-center text-lg font-semibold mb-4">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h2>
  
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-black focus:border-black"
            />
          </div>
  
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-black focus:border-black"
            />
          </div>
  
          {/* Keep Me Signed In and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 border-gray-300" />
              <span>Keep me signed in</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
  
          {/* Terms and Privacy */}
          <div className="text-xs text-gray-500 mb-4">
            By logging in, you agree to Nike's{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>
            .
          </div>
  
          {/* Sign In Button */}
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            SIGN IN
          </button>
  
          {/* Join Us */}
          <div className="text-center mt-4 text-sm">
            Not a Member?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Join Us.
            </a>
          </div>
        </div>
      </div>
    );
  }
  