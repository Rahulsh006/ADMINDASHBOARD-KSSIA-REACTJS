import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from '../../../../ui/StyledButton.jsx';
import AddEvent from '../../../../components/AddEvent.jsx';

export default function EditEventpage() {
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
  const handleView = (id) => {
    console.log("View item:", id);
    navigate(`/members/member/${id}`);
  };

  return (
    <>
       {" "}
       <Box padding={"10px"} bgcolor={"#FFFFFF"}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" color={"#4A4647"}>
           Events / Edit event
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <StyledButton name="Cancel" variant="secondary">
              Download
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton name="Postpone" variant="primary" >
             Postpone
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Grid container item xs={12}>
      <Grid item xs={10} padding={5}>
       <AddEvent/>

      </Grid>
    </Grid>
      
    </>
  )
}
