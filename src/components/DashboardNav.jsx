"use client"



import Link from "next/link";

const DashboardNav = () => {
  return (
    <nav className="flex justify-center bg-gray-200 p-4 shadow-md">
      <Link
        href="/dashboard"
        className="mx-4 text-gray-800 hover:text-indigo-600"
      >
        Home
      </Link>
      <Link
        href="/dashboard/calendar"
        className="mx-4 text-gray-800 hover:text-indigo-600"
      >
        Calendar
      </Link>
      <Link
        href="/dashboard/courses"
        className="mx-4 text-gray-800 hover:text-indigo-600"
      >
        Courses
      </Link>
      <Link
        href="/dashboard/rewards"
        className="mx-4 text-gray-800 hover:text-indigo-600"
      >
        Rewards
      </Link>
    </nav>
  );
};

export default DashboardNav;
