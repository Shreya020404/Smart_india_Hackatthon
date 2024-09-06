import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import CoursesPage from "@/components/CoursesPage";
import Navbar from "@/components/Navbar";
import DashboardNav from "@/components/DashboardNav";

const Course = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login"); // Redirect to login if user is not authenticated
    return null; // Prevent further rendering
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar with logo, search, user profile, and notifications */}
      <Navbar user={session?.user} />

      {/* Dashboard Navigation (Home, Calendar, Courses, Rewards) */}
      <DashboardNav />

      {/* Courses Content */}
      <main className="flex flex-col items-center justify-center p-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Courses Page</h1>
          <CoursesPage />
        </div>
      </main>
    </div>
  );
};

export default Course;
