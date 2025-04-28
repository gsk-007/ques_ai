import MaskImage from "../assets/landing_mask.png";
import Logo from "../assets/QuesLogo_white.png";
import LoginForm from "../components/LoginForm";
import brandLogo from "../assets/main_logo.png";
const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex">
      {/* Mask Layer */}
      <div className="h-full w-[70vw] bg-purple-800">
        <div
          className="w-[70vw] h-full fixed top-0 left-0"
          style={{
            backgroundImage: `url(${MaskImage})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0) invert(1)",
          }}
        ></div>
        <div className="absolute text-white m-16">
          <div>
            <img src={Logo} className="w-[200px] h-[50px]" alt="QuesAi logo" />
          </div>
          <h1 className="text-7xl w-[560px] font-bold mt-8">
            Your podcast will no longer be just a hobby.
          </h1>
          <h3 className="text-2xl mt-6 w-[400px]">
            Supercharge Your Distribution using our AI assistant!
          </h3>
        </div>
      </div>
      <div className="w-[30vw] bg-gray-200">
        <div className="mt-10 h-[200px] flex flex-col items-center">
          <div>
            <img src={brandLogo} className="w-[80px] h-[80px]" alt="" />
          </div>
          <div className="text-3xl mt-4 text-purple-500">Welcome to</div>
          <div className="text-3xl text-purple-800 font-bold">Ques.AI</div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
