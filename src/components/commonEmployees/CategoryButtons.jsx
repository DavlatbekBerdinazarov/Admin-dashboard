import React from 'react'
import { Box, Stack, Typography, Button, colors} from '@mui/material';
import Animate from '../common/Animate';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// const buttonData = [
//   {
//     categoryName:"All",
//     notification:42
//   },
//   {
//     categoryName:"Active Users",
//     notification:12
//   },
//   {
//     categoryName:"None users",
//     notification:9
//   },
//   {
//     categoryName:"Activeless users",
//     notification:5
//   }
// ]


function CategoryButtons({ value , notifications}) {
  const [type, setType] = useState(false);

  const hadnleClick = () => {
    setType(!type)
  }

  return (
    <Animate>
      <Stack sx={{
        display:'flex',
        flexDirection:"row",
        gap:"24px",
        flexWrap:'wrap'
      }}>
        
          <Button onClick={ hadnleClick } className={type ? "activeBtn": ""} variant="text" >
            {value}
            <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              marginLeft:"12px",
              height:"18px",
              width:"27px",
              borderRadius:"8px",
              bgcolor: "#f2f4f7",
              padding:"2px 6px 2px 6px"
          }}>
            { notifications }
            </Box>
          </Button>
          {/* <Button onClick={ hadnleClick } className={type ? "activeBtn": ""} variant="text">
          lorem ispum
          <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              marginLeft:"12px",
              height:"18px",
              width:"27px",
              borderRadius:"8px",
              bgcolor: "#f2f4f7",
              padding:"2px 6px 2px 6px"
          }}>
            12
            </Box>
          </Button>
          <Button onClick={ hadnleClick } className={type ? "activeBtn": ""} variant="text">
          <LocalGroceryStoreIcon sx={{paddingRight:"8px "}}/>
          lorem ispum
          <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              marginLeft:"12px",
              height:"18px",
              width:"27px",
              borderRadius:"8px",
              bgcolor: "#f2f4f7",
              padding:"2px 6px 2px 6px"
          }}>
            12
            </Box>
          </Button>
          <Button onClick={ hadnleClick } className={type ? "activeBtn": ""} variant="text">
          lorem ispum
          <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              marginLeft:"12px",
              height:"18px",
              width:"27px",
              borderRadius:"8px",
              bgcolor: "#f2f4f7",
              padding:"2px 6px 2px 6px"
          }}>
            12
            </Box>
          </Button> */}
      </Stack>
    </Animate>
  )
}

export default CategoryButtons