import SocialMedia from "../socialMedia/socialMedia";

const Login = () => {
  return (
    <div className="max flex flex-col overflow-hidden rounded-md bg-white p-10 shadow-lg md:flex-1 md:flex-row lg:max-w-screen-md">
      <div className="bg-white md:flex-1">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Login;
