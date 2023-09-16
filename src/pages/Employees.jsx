import React from 'react'
import { Grid } from '@mui/material';
import NavbarGrid from '../components/common/NavbarGrid';
import Animate from '../components/common/Animate';
import CategoryButtons from '../components/commonEmployees/CategoryButtons';
import CustomTable from '../components/commonEmployees/ActiveStudentsTable';

function Employees() {
  return (
    <Grid container spacing={2}  >
      <Grid item xs={12}>
        <NavbarGrid/>
      </Grid> 

      <Grid item xs={12} sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"start",
        gap:"50px",
        alignItems:"center",
      }}>
        <CategoryButtons value={"All"} notifications={12}/>
        <CategoryButtons value={"Active users"} notifications={21}/>
        <CategoryButtons value={"None active"} notifications={9}/>
        <CategoryButtons value={"temporary users"} notifications={15}/>
      </Grid>
    
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <CustomTable />
            </Animate>
          </Grid>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              {/* <TotalIncomeExpence /> */}
            </Animate>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={3.5}>
        <Grid container spacing={3}>
        <Grid item xs={12}  marginRight="22px">
            <Animate delay={1.5}>
              {/*  */}
            </Animate>
          </Grid>
          <Grid item xs={12} marginRight="22px">
            <Animate delay={1}>
              {/*  */}
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Employees