import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import Register1 from "../components/register";

const Register: NextPage = () => {
  return (
    <div className="bg-ColorBaseline">
      <Register1 />
    </div>
  );
};

export default Register;