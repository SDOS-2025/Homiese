import Link from 'next/link';

export default function SignupPage() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input type="text" className="w-full p-2 border rounded-lg" placeholder="John Doe" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border rounded-lg" placeholder="example@email.com" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full p-2 border rounded-lg" placeholder="••••••••" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" className="w-full p-2 border rounded-lg" placeholder="••••••••" required />
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    );
  }
  