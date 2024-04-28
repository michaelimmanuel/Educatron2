import type { NextPage } from "next";
import LoginPage from "../components/login";
import styles from "./global.css"
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Login: NextPage = () => {
  return (
      <LoginPage />
  );
};

export default Login;
