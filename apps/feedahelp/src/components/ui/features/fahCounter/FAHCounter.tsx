import React from "react";
import FAHCounterDisplay from "./FAHCounterDisplay";

const FAHCounter = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-2 xl:grid-cols-4">
      <FAHCounterDisplay
        title={"TOTAL MONTHLY DONATIONS ($)"}
        imageIcon={"/static/images/feedahelp/donate.png"}
        imageAlt={"donation-icon"}
        value={100000}
        monthlyIncrease={"+4.4%"}
      />
      <FAHCounterDisplay
        title={"TOTAL CHEFT COOKING"}
        imageIcon={"/static/images/feedahelp/chef.png"}
        imageAlt={"chef-icon"}
        value={1000}
        monthlyIncrease={"+4.4%"}
      />
      <FAHCounterDisplay
        title={"TOTAL FAMILY HELPED"}
        imageIcon={"/static/images/feedahelp/family.png"}
        imageAlt={"family-icon"}
        value={900}
        monthlyIncrease={"+4.4%"}
      />
      <FAHCounterDisplay
        title={"TOTAL PEOPLE FEED"}
        imageIcon={"/static/images/feedahelp/logoHalf.png"}
        imageAlt={"family-icon"}
        value={569}
        monthlyIncrease={"+4.4%"}
      />
      <FAHCounterDisplay
        title={"TOTAL OLD AGE HELPED"}
        imageIcon={"/static/images/feedahelp/oldAge.png"}
        imageAlt={"oldAge-icon"}
        value={100}
        monthlyIncrease={"+4.4%"}
      />
      <FAHCounterDisplay
        title={"TOTAL USER REGISTERED"}
        imageIcon={"/static/images/feedahelp/user.png"}
        imageAlt={"user-icon"}
        value={50}
        monthlyIncrease={"+4.4%"}
      />
    </div>
  );
};

export default FAHCounter;
