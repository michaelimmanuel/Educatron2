import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';


const LoginIcon: NextPage = () => {
  return(
    <div className="container mx-0 px-0" id="LoginPage">
      <div className="flex flex-row start-0 mx-0 px-0">
        <div className="static basis-1/2 h-max mr-5 overflow-hidden">
          <img className="absolute top-0 " src="../Moon-login-cropped.png" alt="LeftImage"></img>
        </div>
        <div className="flex flex-col basis-1/2 h-max ml-5 z-1">
          <img src="../imageplaceholder.jpg" alt="RightImage"></img>
        </div>
      </div>
    </div>
  )
};

export default LoginIcon;
