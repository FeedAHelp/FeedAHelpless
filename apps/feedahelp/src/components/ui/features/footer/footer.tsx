import Image from "next/image";
import { Styled } from "./footer.styled";
import { Grid } from "@mui/material";
import FooterDown from "./footerDown";
import Data from "./footerData";

export const Footer = () => {
  return (
    <footer className="py-6">
      <div className=" mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50 px-6 md:space-y-12">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Image
              src={"/static/images/feedahelp/logo.png"}
              width={200}
              height={100}
              alt={"feedahelpLogo"}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              {Data.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      rel="noopener noreferrer"
                      href={item.title}
                      className="hover:dark:text-violet-400"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              {Data.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      rel="noopener noreferrer"
                      href={item.title}
                      className="hover:dark:text-violet-400"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              {Data.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      rel="noopener noreferrer"
                      href={item.title}
                      className="hover:dark:text-violet-400"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <p className="pb-1 text-lg font-medium">Want To Know More</p>
            <div className="flex gap-2">
              <Styled.InputField type="text" placeholder="Enter your email" />
              <button className="h-10 rounded-md bg-violet-400 px-4  text-white">
                Subscribe
              </button>
            </div>
          </Grid>
        </Grid>
        <FooterDown />
      </div>
    </footer>
  );
};

export default Footer;
