import React from "react";

import imgs from "../../assets/images/Imgs.png";
import Logo from "../../assets/images/Logo.png";
import Google from "../../assets/images/iconfinder_Google_1298745 1.png";

import GooglePlay from "../../assets/images/google play.png";
import AppStore from "../../assets/images/App Store Badge.png";
import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const Register: React.FC = () => {
  const counter: Array<number> = [1, 2, 3];

  return (
    <main className="w-full h-screen flex">
      <section className="design hidden lg:flex flex-col justify-between left w-[40%] h-full px-20 py-10 text-white">
        <p className="text-center font-medium text-lg leading-[1.4rem]">
          Social media shared today, tomorrow or <br />
          by location
        </p>
        <div className="mt-5 relative">
          <img
            className="mx-auto relative z-[1] w-[80%]"
            src={imgs}
            alt="phone icons"
          />
          <div className="ellipse rounded-full top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  shadow absolute w-[110%] aspect-square"></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          {counter.map((_, idx) => (
            <div
              key={idx}
              className="rounded-full bg-white w-2 h-2 flex items-center justify-center"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full bg-primary-blue ${
                  idx === 1 && "bg-white"
                }`}
              >
                {" "}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className=" flex-1 h-full px-5 sm:px-10 lg:px-20 py-14  pb-6 max-w-screen overflow-auto">
        <div className="max-w-[650px] mx-auto">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="mt-10">
            <p className="font-semibold text-2xl">Create account</p>
            <p className="text-[12px] text-secondary-brown">
              For business, brand or celebrity.
            </p>
          </div>
          <form
            action=""
            className="relative mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6"
          >
            <CustomInput id="First name" label="First name" />
            <CustomInput id="Last name" label="Last name" />
            <CustomInput id="email or phone" label="Email or Phone Number" />
            <CustomInput
              id="date"
              label="Date of Birth (MM/DD/YY)"
              type="data"
            />
            <CustomInput id="password" label="Password" type="password" />
            <CustomInput
              id="confirm_password"
              label="Confirm Password"
              type="password"
            />
            <div className="relative text-sm">
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="flex items-center gap-1 sm:mt-1 mt-3">
                <input type="checkbox" name="agree" id="agree" />
                <label htmlFor="agree" className="whitespace-nowrap">
                  I agree to all the{" "}
                  <a
                    href="#"
                    className="text-custom-blue hover:underline underline-offset-2"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-custom-blue  hover:underline underline-offset-2"
                  >
                    Privacy policy{" "}
                  </a>{" "}
                </label>
              </div>
            </div>
            <a
              href="#"
              className=" hover:underline underline-offset-2 text-primary-blue text-right text-sm absolute sm:static bottom-[180px] right-0"
            >
              Forgot Password?
            </a>
            <CustomButton className="bg-custom-blue mt-3">
              Create account
            </CustomButton>
            <CustomButton className="bg-secondary-brown flex justify-center items-center gap-2 sm:mt-3">
              <img src={Google} />
              <span>Sign-in with Google</span>
            </CustomButton>
          </form>
          <p className="text-sm text-center mt-5">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-primary-blue  hover:underline underline-offset-2"
            >
              Log In
            </a>{" "}
          </p>
          <div className="flex items-center sm:justify-start justify-center gap-2 mt-20">
            <a href="#">
              <img className="w-[100px]" src={GooglePlay} alt="google play" />
            </a>
            <a href="#">
              <img className="w-[100px]" src={AppStore} alt="app store" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
