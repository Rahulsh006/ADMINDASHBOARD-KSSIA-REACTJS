import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from '../../../ui/StyledButton';
import StyledSearchbar from '../../../ui/StyledSearchbar';
import { ReactComponent as FilterIcon } from "../../../assets/icons/FilterIcon.svg";
import StyledTable from '../../../ui/StyledTable';
import { userColumns, userData } from "../../../assets/json/TableData";
export default function PaymentPage() {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const handleView2 = (id) => {
   
    navigate(`/payments/addpaymentdetails`);
  };
  return (
    <>
       {" "}
       <Box padding={"10px"} bgcolor={"#FFFFFF"}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" color={"#4A4647"}>
            Payments
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <StyledButton name="Add" variant="secondary" onClick={handleView2}>
              Add
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton name="Download" variant="primary" >
             Download
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Box padding="30px" marginBottom={4}>
        <>
          <Stack
            direction={"row"}
            justifyContent={"end"}
            paddingBottom={3}
            alignItems={"center"}
          >
            <Stack direction={"row"} spacing={2}>
              <StyledSearchbar />
              <Box
                bgcolor={"#FFFFFF"}
                borderRadius={"50%"}
                width={"48px"}
                height={"48px"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid rgba(0, 0, 0, 0.12)"
                onClick={handleOpenFilter}
                style={{ cursor: "pointer" }}
              >
                <FilterIcon />
              </Box>
            </Stack>
          </Stack>
          <StyledTable
            columns={userColumns}
            data={userData}
            onSelectionChange={handleSelectionChange}
            // onView={handleView}
          />{" "}
        </>
      </Box>
      
    </>
  )
}

