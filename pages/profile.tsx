import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import InfoIcon from "../components/info-icon";
import Profile from "../components/profile"; 
import Footer from "../components/footer";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';


const Profile1: NextPage = () => {
  return (
    <div>
      <Profile /> 
    </div>
  );
};

export default Profile1;