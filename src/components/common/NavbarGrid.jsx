import React from 'react';
import { images } from "../../assets";
import { Box, Stack, Typography, Avatar, TextField } from '@mui/material';
import Animate from "./Animate";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import MPaper from './MPaper';

const NavbarGrid = () => {
  return (
    <Animate>
    <MPaper>
      <Box sx={{
        width:"100%",
        height:"10px",
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between"
      }}>
        <Stack sx={{
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        gap: "5px"
      }}>
          <HomeOutlinedIcon/>
          <ArrowForwardIosIcon sx={{  fontSize: "13px" }}/>
          Documents
        </Stack>
        <Stack sx={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center"
      }}>
        <TextField
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon fontSize="19px"/>,
              sx: {
                borderRadius: '20px',
                border:"secondary",
                opacity:"0.7",
                height: "34px"
              },
            }}
            placeholder="John Doe"
            defaultValue="John Doe"
          />
          <NotificationsNoneOutlinedIcon/>
          <Typography variant='p'>Kruluz Otsman</Typography>  
          <Avatar src={images.userProfile} alt="" />
        </Stack>
      </Box>
    </MPaper>
    </Animate>
  )
}
export default NavbarGrid;