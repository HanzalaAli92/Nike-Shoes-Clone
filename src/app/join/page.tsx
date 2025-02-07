import Image from "next/image";

export default function JoinUs() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-white p-8 w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/nike-logo.png"
              alt="Nike Logo"
              width={100}
              height={17}
            />
          </div>
  
          {/* Title */}
          <h2 className="text-center text-xl font-bold mb-2">BECOME A NIKE MEMBER</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
          </p>
  
          {/* Email Address */}
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
  
          {/* Password */}
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
  
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-black focus:border-black"
            />
          </div>
  
          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-black focus:border-black"
            />
          </div>
  
          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-black focus:border-black"
            />
            <p className="text-xs text-gray-500 mt-1">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
  
          {/* Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-black focus:border-black"
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </div>
  
          {/* Gender */}
          <div className="flex space-x-4 mb-4">
            <button className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 focus:ring-black">
              Male
            </button>
            <button className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 focus:ring-black">
              Female
            </button>
          </div>
  
          {/* Email Updates Checkbox */}
          <div className="mb-4">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 border-gray-300 mr-2" />
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
          </div>
  
          {/* Terms and Conditions */}
          <p className="text-xs text-gray-500 mb-4">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>
            .
          </p>
  
          {/* Join Us Button */}
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
            JOIN US
          </button>
  
          {/* Sign In Link */}
          <div className="text-center mt-4 text-sm">
            Already a Member?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign In.
            </a>
          </div>
        </div>
      </div>
    );
  }
  