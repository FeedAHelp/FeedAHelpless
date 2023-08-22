import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchSocialMedia } from "~/utils/cms/fetchSocialMedia";
import { urlForThumbnail } from "~/utils/cms/imageProcess";

const FooterSocial = () => {
  const [socialMedia, setSocilaMedia] = useState([]);

  const getSocilaMedia = async () => {
    try {
      const socialData = await fetchSocialMedia();
      setSocilaMedia(socialData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSocilaMedia();
  }, []);
  return (
    <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
      {socialMedia.map((item: any, key) => {
        return (
          <a
            key={key}
            rel="noopener noreferrer"
            href={item.solicalLinkUrl}
            title={item.title}
          >
            <Image
              src={urlForThumbnail(item.imageIcon)}
              width={40}
              height={40}
              alt={"feedahelpLogo"}
              className="h-full object-cover"
            />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocial;
