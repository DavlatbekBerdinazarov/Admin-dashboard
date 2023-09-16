import React from 'react'
import { Grid } from '@mui/material';
import NavbarGrid from '../components/common/NavbarGrid';
import Animate from '../components/common/Animate';
import CustomUserKPI from '../components/commonEmployees/CustomUserKPI';
import StatisticData from '../components/common/StatisticData';
import WorkEffectStatistics from '../components/commonEmployees/WorkEffectsStatistics';
import KPIincome from '../components/commonEmployees/KPIincome';
import UserKPIPieChartForUserKPI from '../components/commonEmployees/UserKPIPieChartForUserKPI';
import TableTransactionHistory from '../components/common/TableTransactionHistory';
import CountOfUserKPI from '../components/commonEmployees/CountOfUserKPI';

function UserKPI() {
  return (
    <Grid container spacing={2}  >
      <Grid item xs={12}>
        <NavbarGrid/>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Animate delay={1}>
              <CountOfUserKPI/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    
      <Grid item xs={12} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <CustomUserKPI/>
            </Animate>
          </Grid>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <WorkEffectStatistics/>
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
              <UserKPIPieChartForUserKPI/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Animate delay={1}>
              <TableTransactionHistory/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserKPI;