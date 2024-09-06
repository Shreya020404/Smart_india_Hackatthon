import { auth } from "@/app/auth";
import CalendarComponent from "../../../components/CalenderPage"; // Adjust the path as necessary
import Navbar from "@/components/Navbar";
import DashboardNav from "@/components/DashboardNav";

const CalendarPage = async () => {
  const session = await auth();
    const userName = session?.user?.name || "User";

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

      {/* Calendar Content */}
      <main className="flex flex-col items-center justify-center p-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Calendar Page</h1>
          <CalendarComponent userName={userName}/>
        </div>
      </main>
    </div>
  );
};

export default CalendarPage;
