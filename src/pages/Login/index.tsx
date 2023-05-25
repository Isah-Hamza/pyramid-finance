import React from "react";

import imgs from "../../assets/images/Imgs.png";
import Logo from "../../assets/images/Logo.png";
import Google from "../../assets/images/iconfinder_Google_1298745 1.png";

import GooglePlay from "../../assets/images/google play.png";
import AppStore from "../../assets/images/App Store Badge.png";

interface ICustomInput {
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  id: string;
}

interface ICustomButton {
  className?: string;
  children: React.ReactNode;
}

export const CustomInput: React.FC<ICustomInput> = ({
  label,
  value,
  type,
  placeholder,
  id,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        placeholder={placeholder ?? ""}
        type={type ?? "text"}
        value={value}
        className="mt-1 block w-full rounded p-3 py-2.5 text-sm border border-border-color outline-blue-500"
        id={id}
      />
    </div>
  );
};

export const CustomButton: React.FC<ICustomButton> = ({
  className,
  children,
}) => {
  return (
    <button
      className={`py-2.5 w-full rounded text-white font-medium ${className}`}
    >
      {children}
    </button>
  );
};

const Login: React.FC = () => {
  return (
    <main className="w-full h-screen flex">
      <section className="left w-[40%] h-full bg-primary-blue px-20 py-14 text-white">
        <p className="text-center font-medium text-lg">
          Social media shared today, tomorrow <br /> or by location
        </p>
        <div className="mt-10">
          <img className="mx-auto" src={imgs} alt="phone icons" />
        </div>
      </section>
      <section className="flex-1 h-full px-20 py-14  pb-6 max-w-screen overflow-auto">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="mt-10">
          <p className="font-semibold text-xl">Create account</p>
          <p className="text-[12px] text-secondary-brown">
            For business, band or celebrity.
          </p>
        </div>
        <form action="" className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
          <CustomInput id="First name" label="First name" />
          <CustomInput id="Last name" label="Last name" />
          <CustomInput id="email or phone" label="Email or Phone Number" />
          <CustomInput id="date" label="Date of Birth (MM/DD/YY)" />
          <CustomInput id="password" label="Password" />
          <CustomInput id="confirm_password" label="Confirm Password" />
          <div className="text-sm">
            <div className="flex gap-1 items-center">
              <input type="checkbox" name="remember-me" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree">
                I agree to all the{" "}
                <a href="#" className="text-custom-blue">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-custom-blue">
                  Privacy policy{" "}
                </a>{" "}
              </label>
            </div>
          </div>
          <a href="#" className="text-primary-blue text-right text-sm">
            Forgot Password?
          </a>
          <CustomButton className="bg-custom-blue ">
            Create account
          </CustomButton>
          <CustomButton className="bg-secondary-brown flex justify-center items-center gap-2">
            <img src={Google} />
            <span>Sign in with Google</span>
          </CustomButton>
        </form>
        <p className="text-sm text-center mt-5">
          Don’t have an account?{" "}
          <a href="#" className="text-primary-blue">
            Log In
          </a>{" "}
        </p>

        <div className="flex items-center gap-2 mt-20">
          <img className="w-[100px]" src={GooglePlay} alt="google play" />
          <img className="w-[100px]" src={AppStore} alt="app store" />
        </div>
      </section>
    </main>
  );
};

export default Login;
