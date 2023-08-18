import React from 'react';
import Image from "next/image";
import { Styled } from './footer.styled';

const footerDown = () => {
    return (
        <div className="grid justify-center pt-6 lg:justify-between">
        <div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
          <Styled.DownFooter>
            &copy; {new Date().getFullYear()} FeedAHelp. All rights reserved.
          </Styled.DownFooter>
          <a rel="noopener noreferrer" href="#">
            <Styled.DownFooter>Privacy policy</Styled.DownFooter>
          </a>
          <a rel="noopener noreferrer" href="#">
            <Styled.DownFooter>Terms of service</Styled.DownFooter>
          </a>
        </div>
        <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
        <a
            rel="noopener noreferrer"
            href="#"
            title="Facebook"
          >
         <Image
              src={"/static/images/feedahelp/facebook.svg"}
              width={40}
              height={40}
              alt={"feedahelpLogo"}
              className='object-cover h-full'
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Email"
          >
             <Image
              src={"/static/images/feedahelp/mail.svg"}
              width={40}
              height={40}
              alt={"feedahelpLogo"}
              className='object-cover h-full'
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Google"
          >
              <Image
              src={"/static/images/feedahelp/twitter.svg"}
              width={40}
              height={40}
              alt={"feedahelpLogo"}
              className='object-cover h-full'
            />
          </a>
        </div>
      </div>
    );
};

export default footerDown;
