import { doLogout } from "@/app/actions";
import { Button } from "./ui/button";

const LogoutButton = () => {
  return (
    <form action={doLogout}>
      <Button type="submit">Logout</Button>
    </form>
  );
};

export default LogoutButton;
