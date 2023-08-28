import React, { useEffect, useState } from "react";
import { fetchSocialMedia } from "~/utils/cms/fetchSocialMedia";
import Link from "next/link";
import {Styled} from './SocialMedia.styled';
import { urlForThumbnail } from "~/utils/cms/imageProcess";

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  const getSocialMedia = async () => {
    try {
      const socialData = await fetchSocialMedia();
      setSocialMedia(socialData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSocialMedia();
  }, []);
  
  return (
    <div className="grid grid-cols-3 gap-2 ml-8">
     {socialMedia.map((item: any, key) => {
        return (
          <Link
            key={key}
            rel="noopener noreferrer"
            href={item.solicalLinkUrl}
            title={item.title}
          >
            <Styled.SocialIcon
              className="flex items-center justify-center"
              src={urlForThumbnail(item.imageIcon)}
              width={48}
              height={48}
              alt={"feedahelpLogo"}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
