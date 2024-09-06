// app/page.js (or wherever your Home component is located)
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <>
      {/* Ensure this is included to handle the initial logo animation */}
      <main className="flex flex-col h-screen overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Logo Section */}
          <div className="flex-1 bg-black flex items-center justify-center p-4">
            <Image
              src="/course logo.png" // Replace with your logo's path
              alt="Logo"
              width={500} // Adjust width as needed
              height={250} // Adjust height as needed
              className="object-contain" // Ensures the logo maintains its aspect ratio
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-4xl text-gray-800 mb-4">Welcome to</h1>
            <h1 className="text-4xl font-bold text-course-blue mb-4">
              Course Compass
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A place where you can track all your skills and expenses
            </p>
            <Image
              src="/student.svg"
              alt="logo"
              width={500}
              height={500}
              className="p-4 mx-auto"
            />
            <Link href="/auth/login" passHref>
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
