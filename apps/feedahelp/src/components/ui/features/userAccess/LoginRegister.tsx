import React, { memo, useState } from "react";
import Login from "./login/Login";
import ImageCarousal from "./imageCarousal/imageCarousal";
import dynamic from "next/dynamic";
import Register from "./register/Register";
import { motion, AnimatePresence } from "framer-motion";

const Logo = dynamic(import("../header/logo/Logo"));
const MemoLogo = memo(Logo);

const LoginRegister = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const loginRegisterToggle = () => {
    setIsLoginPage(!isLoginPage);
  };
  return (
    <div className={"h-[50rem] min-w-[26rem] md:h-[45rem] md:min-w-[46rem]"}>
      <AnimatePresence>
        {isLoginPage && (
          <div className="absolute flex min-h-[45rem] flex-col overflow-hidden md:flex-row">
            <motion.div
              initial={{
                x: -300,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              exit={{ x: -300 }}
              className="flex"
            >
              <CarousalWithLogo />
            </motion.div>
            <motion.div
              initial={{
                x: 300,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              exit={{ x: 300 }}
              className="flex"
            >
              <Login loginRegisterToggle={loginRegisterToggle} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoginPage && (
          <motion.div className="flex min-h-[45rem] flex-col overflow-hidden md:flex-row">
            <motion.div
              initial={{
                x: 800,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              exit={{ x: 800, transition: { duration: 0.6 } }}
              className="flex w-[20rem]"
            >
              <CarousalWithLogo />
            </motion.div>

            <motion.div
              initial={{
                x: -800,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              exit={{ x: -800, transition: { duration: 0.6 } }}
              className="flex"
            >
              <Register loginRegisterToggle={loginRegisterToggle} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CarousalWithLogo = () => {
  return (
    <div className="carousal-with-logo">
      <MemoLogo />
      <div className="hidden md:block">
        <ImageCarousal />
      </div>
    </div>
  );
};

export default LoginRegister;
