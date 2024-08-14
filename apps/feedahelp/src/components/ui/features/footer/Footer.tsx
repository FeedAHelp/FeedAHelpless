import { z } from "zod";
import type { ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { Styled } from "./footer.styled";
import { Grid } from "@mui/material";
import FooterDown from "./footerDown";
import Data from "./footerData";
import GenericLink from "~/ui/components/elements/GenericLink/GenericLink";
import { useState } from "react";
import Modal from "~/ui/components/elements/Modal/GenericModal";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Payment from "../payments/Payment";
import CustomLoader from "./../../../../../../../packages/ui/components/elements/GenericLoader/CustomLoader";
import { apiSetup } from "~/utils/api/api";
import { endPoints } from "~/utils/api/route";
import { motion } from "framer-motion";

interface FromData {
  email: string;
}

const schema: ZodType<FromData> = z.object({
  email: z.string().min(5).email(),
});

export const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useTranslation("footer");
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
    const api = await apiSetup();
    api
      .post(endPoints.subscription.create, {
        email: data.email,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsSubscribed(true);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <footer className="px-10 py-6">
      <div className=" mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50 px-6 md:space-y-12">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Link href="/">
              <Image
                src={"/static/images/feedahelp/logo.png"}
                width={200}
                height={100}
                alt={"feedahelpLogo"}
                priority={true}
                className="mx-auto h-auto w-auto"
              />
            </Link>
            <Styled.FooterButton
              onClick={() => {
                setModalOpen(true);
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                }, 5000);
              }}
              type="button"
            >
              <Modal isOpen={modalOpen} closeModal={closeModal}>
                <div className="payment-modal-dimention">
                  <CustomLoader isLoading={isLoading}>
                    <Payment />
                  </CustomLoader>
                </div>
              </Modal>
            </Styled.FooterButton>
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
                    >
                      {t(item.title)}
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
                    >
                      {item.title}
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
                    >
                      {item.title}
                    </GenericLink>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <p className="pb-1 text-lg font-medium">Want To Know More</p>
            {!isSubscribed ? (
              <>
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
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="bg-gray-500"
                style={{
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  width: "auto",
                  height: "auto",
                  borderRadius: ".8rem",
                }}
              >
                <text>Thank You for your Participation.</text>
              </motion.div>
            )}
          </Grid>
        </Grid>
        <FooterDown />
      </div>
    </footer>
  );
};

export default Footer;
