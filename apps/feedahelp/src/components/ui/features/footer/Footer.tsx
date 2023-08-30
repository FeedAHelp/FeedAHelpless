import axios from "axios";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { Styled } from "./footer.styled";
import { Grid } from "@mui/material";
import FooterDown from "./footerDown";
import Data from "./footerData";
import GenericLink from "../../../../../../../packages/ui/components/elements/GenericLink/GenericLink";
import { useState } from "react";
import Modal from "../../../../../../../packages/ui/components/elements/Modal/GenericModal";

interface FromData {
  email: string;
}

const schema: ZodType<FromData> = z.object({
  email: z.string().min(5).email(),
});

export const Footer = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (): void => {
    setModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FromData) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:3020/subscribe",
      data: {
        email: data.email,
      },
    });
    if (res.status === 200) {
      toast.success("Thank you for subscribing!");
    }
  };

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
            <button onClick={() => setModalOpen(true)}
              className="h-10 mt-5 rounded-md transition-colors duration-300 bg-gradient-to-r from-[#ec0404] to-[#ed6002] hover:from-green-700 hover:to-green-600 px-4 text-white"
              type="submit"
            >
              Donate
              <Modal isOpen={modalOpen} closeModal={closeModal}>
                <div className="w-[400px] h-[400px]">

                </div>
              </Modal>
            </button>

          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">About Us</p>
            <ul>
              {Data?.About?.map((item, index) => {
                return (
                  <li key={index}>
                    <GenericLink
                      href={item.title}
                      color="Black"
                      fontSize="0.8rem"
                    >{item.title}
                    </GenericLink>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">Join Our Community</p>
            <ul>
              {Data?.Community?.map((item, index) => {
                return (
                  <li key={index}>
                    <GenericLink
                      href={item.title}
                      color="Black"
                      fontSize="0.8rem"
                    >{item.title}
                    </GenericLink>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <p className="pb-1 text-lg font-medium">Contact Us</p>
            <ul>
              {Data?.Contact?.map((item, index) => {
                return (
                  <li key={index}>
                    <GenericLink
                      href={item.title}
                      color="Black"
                      fontSize="0.8rem"
                    >{item.title}
                    </GenericLink>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <p className="pb-1 text-lg font-medium">Want To Know More</p>
            <form onSubmit={handleSubmit(submitData)}>
              <div className="flex gap-2">
                <Styled.InputField
                  type="text"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <button
                  className="h-10 rounded-md bg-violet-400 px-4  text-white"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
              <span className="text-sm text-red-500">
                {errors.email?.message}
              </span>
              <Toaster position="bottom-right" reverseOrder={false} />
            </form>
          </Grid>
        </Grid>
        <FooterDown />
      </div>
    </footer>
  );
};

export default Footer;
