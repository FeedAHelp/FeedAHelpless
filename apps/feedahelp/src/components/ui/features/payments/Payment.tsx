import React, { useState } from "react";
import { Styled } from "./Payment.styled";
import CreditCard from "./CreditCard/CreditCard";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Payment = () => {
  const [value, setValue] = useState("1");

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
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 1 }}>
            <CreditCard />
          </TabPanel>
          <TabPanel value="2">Paypal</TabPanel>
        </TabContext>
      </Box>
    </Styled.PaymentWrapper>
  );
};

export default Payment;
