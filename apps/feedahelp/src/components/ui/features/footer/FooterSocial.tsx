import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchSocialMedia } from "~/utils/cms/fetchSocialMedia";

const FooterSocial = () => {
  const [socialMedia,setSocilaMedia]=useState([])
  console.log("🚀 ~ file: FooterSocial.tsx:7 ~ FooterSocial ~ socialMedia:", socialMedia)

  const getSocilaMedia =async () =>{
    try {
        const socialData = await fetchSocialMedia();
        setSocilaMedia(socialData);
    } catch (error) {
        console.error(error)
    }
}

useEffect(() => {
  getSocilaMedia()
  }, [])
  return (
    <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
      <a rel="noopener noreferrer" href="#" title="Facebook">
        <Image
          src={"/static/images/feedahelp/facebook.svg"}
          width={40}
          height={40}
          alt={"feedahelpLogo"}
          className="h-full object-cover"
        />
      </a>
      <a rel="noopener noreferrer" href="#" title="Email">
        <Image
          src={"/static/images/feedahelp/mail.svg"}
          width={40}
          height={40}
          alt={"feedahelpLogo"}
          className="h-full object-cover"
        />
      </a>
      <a rel="noopener noreferrer" href="#" title="Google">
        <Image
          src={"/static/images/feedahelp/twitter.svg"}
          width={40}
          height={40}
          alt={"feedahelpLogo"}
          className="h-full object-cover"
        />
      </a>
    </div>
  );
};

export default FooterSocial;
