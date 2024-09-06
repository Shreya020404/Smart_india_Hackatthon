import { doSocialLogin } from "@/app/actions";
import { Button } from "./ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <form className="space-y-4" action={doSocialLogin}>
        <Button
          type="submit"
          name="action"
          value="google"
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm"
        >
          <FaGoogle className="w-5 h-5 mr-2 text-red-500" />
          Continue with Google
        </Button>
        <Button
          type="submit"
          name="action"
          value="github"
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm "
        >
          <FaGithub className="w-5 h-5 mr-2 text-gray-800" />
          Continue with GitHub
        </Button>
      </form>
    </div>
  );
};

export default SocialLogin;
