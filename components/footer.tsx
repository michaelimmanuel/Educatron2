import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Footer: NextPage = () => {
  return (

    <div className="footer p-10 bg-ColorTealish rounded-t-3xl text-neutral-content w-screen justify-between">
      <div className="flex flex-col">
        <img src="..\educatronhighresolutionlogowhitetransparent-1@2x.png" alt="Educatron Logo" className="my-auto basis-1/2 w-60"/>
        <p className="text-ColorBaseline text-l">©Educatron Ltd. 2023</p>
      </div>
      <div className="justify-self-end mx-auto my-auto">
        <div className="flex flex-col basis-3/4">
          <div className="flex flex-row justify-end">
              <div className="flex flex-row button-container bg-ColorBaseline border border-slate-200 rounded-full p-2 mx-2 text-ColorTealish">
                <p className="h-5 px-6 font-bold rounded-full text-slate-900 mr-2 my-auto">
                  Policies:
                </p>
                <button className="btn btn-ghost h-10 px-6 font-semibold rounded-full text-slate-900" type="button">
                  Privacy
                </button>
                <button className="btn btn-ghost h-10 px-6 font-semibold rounded-full text-slate-900" type="button">
                  T&C
                </button>
                <button className="btn btn-ghost h-10 px-6 font-semibold rounded-full text-slate-900" type="button">
                  Copyright
                </button>
              </div>
              <div className="flex flex-row button-container bg-ColorBaseline border border-slate-200 rounded-full p-2 mx-2 items-center text-ColorTealish">
                <p className="h-5 px-6 font-bold rounded-full text-slate-900 mr-2">
                  Collaborate:
                </p>
                <button className="btn btn-ghost h-10 px-6 font-semibold rounded-full text-slate-900 mr-2" type="button">
                  Career
                </button>
                <button className="btn btn-ghost h-10 px-6  font-semibold rounded-full text-slate-900" type="button">
                  Advertise
                </button>
              </div>
          </div>
            <div className="flex flex-row items-center justify-end py-5">
              <a className="footer-title mr-5 my-auto text-ColorWhite">
                Contact us:
              </a> 
              <div className="grid grid-flow-col mt-4">
                <button className="btn btn-ghost Instagram">
                  <img src="../instagram-circle@2x.png" alt="Instagram" width="40" height="40" />
                </button>
                <button className="btn btn-ghost Facebook">
                  <img src="../facebook@2x.png" alt="Facebook" width="40" height="40" />
                </button>
                <button className="btn btn-ghost LinkedIn">
                  <img src="../linkedin@2x.png" alt="LinkedIn" width="40" height="40" />
                </button>
                <button className="btn btn-ghost WhatsApp">
                  <img src="../whatsapp@2x.png" alt="WhatsApp" width="40" height="40" />
                </button>
                <button className="Email btn btn-ghost">
                  <img src="../circled-envelope@2x.png" alt="Email" width="40" height="40"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;