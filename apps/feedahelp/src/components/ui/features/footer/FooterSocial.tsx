import React, { useEffect, useState } from "react";
import { fetchSocialMedia } from "~/utils/cms/fetchSocialMedia";
import { urlForThumbnail } from "~/utils/cms/imageProcess";
import Link from "next/link";
import {Styled} from './FooterSocial.styled'

type GetSocialMediaType={
    socialLinkUrl:string,
    title:string,
    imageIcon:string
}

const FooterSocial = () => {
  const [socialMedia, setSocialMedia] = useState<GetSocialMediaType[]>([]);

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
    <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
      {socialMedia.map((item: GetSocialMediaType, key:number) => {
        return (
          <Link
            key={key}
            rel="noopener noreferrer"
            href={item.socialLinkUrl}
            title={item.title}
          >
            <Styled.SocialIcon
              src={urlForThumbnail(item.imageIcon)}
              width={40}
              height={40}
              alt={"feedahelpLogo"}
              className="h-full object-cover"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterSocial;
