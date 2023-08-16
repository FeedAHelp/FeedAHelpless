import Image from "next/image";
import { Styled } from "./footer.styled";
import { Grid } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-violet-400"
                >
                  Link
                </a>
              </li>
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
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
            <span>
              &copy; {new Date().getFullYear()} FeedAHelp. All rights reserved.
            </span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-violet-400 dark:text-gray-900"
            >
              <EmailIcon />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-violet-400 dark:text-gray-900"
            >
              <FacebookIcon />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-violet-400 dark:text-gray-900"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
