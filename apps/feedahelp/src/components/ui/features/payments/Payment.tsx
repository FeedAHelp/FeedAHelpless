import React, { useState } from "react";
import { Styled } from "./Payment.styled";
import CreditCard from "./CreditCard/CreditCard";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Paypal from "../payments/Paypal/PaypalProvider";
import { useSession } from "next-auth/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import StripScriptProvider from "./Stripe/CheckoutForm";

const Payment = () => {
  const [value, setValue] = useState("1");
  const { data: session } = useSession();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Styled.PaymentWrapper>
      <Box>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="feedahelp-tab">
              <Tab label="Credit Card" value="1" />
              <Tab label="Paypal" value="2" />
              <Tab label="Stripe" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 1 }}>
            <CreditCard />
          </TabPanel>
          <TabPanel value="2">
            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
                currency: "USD",
              }}
            >
              <Paypal
                email={session?.user?.email ?? undefined}
                value="10.00"
                currency="USD"
              />
            </PayPalScriptProvider>
          </TabPanel>
          <TabPanel value="3">
            <StripScriptProvider />
          </TabPanel>
        </TabContext>
      </Box>
    </Styled.PaymentWrapper>
  );
};

export default Payment;
