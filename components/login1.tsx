import type { NextPage } from "next";
import styles from "./login1.module.css";
import Header from "./header";

const LoginIcon: NextPage = () => {
  return(
<div className="overflow w-auto">
  <table className="table w-full">
    <tbody>
      <tr>
        <td>
          <img id="LeftScreen" className="w-10 h-10 overflow-x-auto max-w-full max-h-full" src="/pexels-eberhard-grossgasteiger-1366919.jpg" alt="Left Screen" />
        </td>
        <td>Tax Accountant</td>
      </tr>
    </tbody>
  </table>
</div>
  )
};

export default LoginIcon;
