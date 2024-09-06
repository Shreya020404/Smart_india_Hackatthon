import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import RewardsPage from "@/components/RewardsPage";
import Navbar from "@/components/Navbar";
import DashboardNav from "@/components/DashboardNav";

const Rewards = async () => {
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

      {/* Rewards Content */}
      <main className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Rewards Page</h1>
        <RewardsPage />
      </main>
    </div>
  );
};

export default Rewards;
