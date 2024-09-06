// pages/register.js
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";
import SocialRegister from "@/components/SocialRegister";

export default function RegisterPage() {
  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Logo Section */}
      <div className="flex-1 bg-black flex items-center justify-center p-4">
        <Image
          src="/course logo.png" // Replace with your logo's path
          alt="Logo"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="object-contain"
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <RegisterForm />
          <div className="my-6">
            <hr className="border-gray-300" />
            <p className="text-center my-4 text-gray-500">Or continue with</p>
          </div>
          <SocialRegister />
          <p className="mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/login">
              <span className="text-indigo-600 hover:underline cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
