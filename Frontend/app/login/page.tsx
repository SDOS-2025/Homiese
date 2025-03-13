import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">Login to Homiese</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="example@email.com" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded-lg" placeholder="••••••••" required />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</Link>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don&#39;t have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
