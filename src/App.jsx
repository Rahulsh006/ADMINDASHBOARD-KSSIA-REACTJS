import React, { useState } from "react";
import { userColumns, userData } from "./assets/json/TableData";
import StyledInput from './ui/StyledInput'
import StyledTable from './ui/StyledTable'
import { StyledButton } from './ui/StyledButton'
import { StyledCalender } from "./ui/StyledCalender";
import DashboardCardbig from "./ui/DashboardCard";

import StyledSearchbar from "./ui/StyledSearchbar";
import MembersPayments from "./components/MembersPayments";
import AppSubscriptionCard from "./ui/AppSubscriptionCard";
import MemberSubscriptionCard from "./ui/MemberSubscriptionCard";
import MembersProducts from "./components/MemberProducts";
import StyledReview from "./ui/StyledReview";
import Review from "./components/Review";
import MemberAnalytics from "./components/MemberAnalytics";
import UserCard from "./ui/Usercard";
import MemberProfile from "./components/MemberProfile";
import UserCard2 from "./ui/Usercard2";



import Addproductform from "./components/AddProductform.jsx";
import AddEvent from "./components/AddEvent";
import AddPaymentdetails from "./components/AddPaymentdetails.jsx";








function App() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleView = (id) => {
    console.log("View item:", id);
  };



  return (
    <>
      
      <StyledTable
        columns={userColumns}
        data={userData}
        onSelectionChange={handleSelectionChange}
        onView={handleView}
      />
       <StyledButton name="Primary" variant="primary">
        Primary Button
      </StyledButton>
      <StyledButton name="Secondary" variant="secondary">
        Secondary Button
      </StyledButton>
      <StyledInput/>
      <StyledCalender/>
      <DashboardCardbig/>

     
      <StyledSearchbar/>
      <MembersPayments/>
      <AppSubscriptionCard/>
      
      <MemberSubscriptionCard/>
      <MembersProducts/>
      <StyledReview/>
      <Review/>
     <MemberAnalytics/>
     <UserCard/>
     <MemberProfile/>
     <UserCard2/>


     

     <Addproductform/>
     <AddEvent/>
    <AddPaymentdetails/>



    
    
    </>
  )
}

export default App;