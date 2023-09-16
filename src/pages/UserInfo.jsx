import React from 'react'
import { Grid } from '@mui/material';
import NavbarGrid from '../components/common/NavbarGrid';
import Animate from '../components/common/Animate';
import CustomUserInfo from '../components/commonEmployees/CustomUserInfo';
import StatisticData from '../components/common/StatisticData';
import WorkEffectStatistics from '../components/commonEmployees/WorkEffectsStatistics';
import KPIincome from '../components/commonEmployees/KPIincome';
import UserKPIshowPieChart from '../components/commonEmployees/UserKPIshowPieChart';

function UserInfo() {
  return (
    <Grid container spacing={2}  >
      <Grid item xs={12}>
        <NavbarGrid/>
      </Grid>
    
      <Grid item xs={12} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <CustomUserInfo/>
            </Animate>
          </Grid>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <WorkEffectStatistics/>
            </Animate>
          </Grid>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <StatisticData/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Animate delay={1.5}>
              <KPIincome/>
            </Animate>
          </Grid>
          <Grid item xs={12} >
            <Animate delay={1}>
              <UserKPIshowPieChart/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserInfo