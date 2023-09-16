import { Grid } from '@mui/material';
import React from 'react';
import NavbarGrid from '../components/common/NavbarGrid';
import ToursData from '../components/common/SpendCategoryCard';
import Animate from '../components/common/Animate';
import UserBookingCard from '../components/common/UserBalanceCard';
import TableTransactionHistory from '../components/common/TableTransactionHistory';
import TotalIncomeExpence from '../components/common/TotalIncomeExpence';
import StatisticData from '../components/common/StatisticData';

const DashboardPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavbarGrid/>
      </Grid>
    
      <Grid item xs={12} lg={8.5}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Animate delay={2.5}>
              <StatisticData />
            </Animate>
          </Grid>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <TableTransactionHistory />
            </Animate>
          </Grid>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <TotalIncomeExpence />
            </Animate>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={3.5}>
        <Grid container spacing={3}>
        <Grid item xs={12}  marginRight="22px">
            <Animate delay={1.5}>
              <UserBookingCard />
            </Animate>
          </Grid>
          <Grid item xs={12} marginRight="22px">
            <Animate delay={1}>
              <ToursData />
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;