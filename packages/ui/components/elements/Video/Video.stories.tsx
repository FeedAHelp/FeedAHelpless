import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Video } from "./";
import { Styled } from "./Video.styled";

export default {
  title: "ATOMS/Video",
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => (
  <Styled.StoryBookContainer>
    <Video {...args} />
  </Styled.StoryBookContainer>
);

export const NormalVideo = Template.bind({});
NormalVideo.args = {
  title: "Video Title",
  autoPlay: false,
  controls: true,
  loop: false,
  muted: false,
  poster:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
  src: "https://cdn.media.amplience.net/v/marsmmsnonprod/102061_video_01_102061/webm_480p",
};

export const AutoPlayVideoLoop = Template.bind({});
AutoPlayVideoLoop.args = {
  title: "Video Title",
  autoPlay: true,
  controls: false,
  loop: true,
  muted: true,
  poster:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
  src: "https://cdn.media.amplience.net/v/marsmmsnonprod/102061_video_01_102061/webm_480p",
};
