import GenericLink from "~/ui/components/elements/GenericLink/GenericLink";
import SocialMedia from "../socialMedia/socialMedia";
import LoginForm from "./LoginForm";

type Props = {
  loginRegisterToggle: () => void;
};

const Login = ({ loginRegisterToggle }: Props) => {
  return (
    <div className="max flex flex-col overflow-hidden rounded-md bg-white p-10 pr-0 shadow-lg md:flex-1 md:flex-row lg:max-w-screen-md">
      <div className="bg-white md:flex-1">
        <LoginForm />
        <div className="mb-4 flex flex-row items-center justify-center gap-4 pt-4 text-center">
          <h4 className="text-sm">Don&lsquo;t have an account?</h4>
          <GenericLink color="Black" fontSize="0.8rem">
            <button onClick={loginRegisterToggle}>{"Register!"}</button>
          </GenericLink>
        </div>
        <div className="flex flex-col space-y-5 pt-4">
          <span className="flex items-center justify-center space-x-2">
            <span className="h-px w-14 bg-gray-400"></span>
            <span className="font-normal text-gray-500">or login with</span>
            <span className="h-px w-14 bg-gray-400"></span>
          </span>
          <div className="flex flex-col space-y-4">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
