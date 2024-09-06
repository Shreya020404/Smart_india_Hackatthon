import { redirect } from "next/navigation";
import { auth } from "../auth";
import Navbar from "@/components/Navbar";
import DashboardNav from "@/components/DashboardNav";
import DashboardHome from "@/components/DashboardHome"; // Dashboard with Pie and Bar charts

const dashboard = async () => {
  const session = await auth();

  if (!session?.user) redirect("/auth/login");

  // Static user statistics
  const completedCourses = 300;
  const inProgressCourses = 150;
  const pendingCourses = 50;

  // Static course progress for bar chart
  const courseProgress = [65, 59, 80]; // Course progress percentages

  // Pie chart data
  const pieData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "User Stats",
        data: [completedCourses, inProgressCourses, pendingCourses],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ["Course 1", "Course 2", "Course 3"],
    datasets: [
      {
        label: "Progress",
        data: courseProgress,
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-auto bg-gray-100">
      {/* Navbar with logo, search, user profile, and notifications */}
      <Navbar user={session?.user} />

      {/* Dashboard Navigation (Home, Calendar, Courses, Rewards) */}
      <DashboardNav />

      {/* Dashboard Content */}
      <div className="p-4">
        <DashboardHome pieData={pieData} barData={barData} />
      </div>
    </div>
  );
};

export default dashboard;
