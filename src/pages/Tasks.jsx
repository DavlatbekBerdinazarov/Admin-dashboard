import React from 'react'
import { Grid } from '@mui/material';
import NavbarGrid from '../components/common/NavbarGrid';
import Animate from '../components/common/Animate';
import CategoryButtons from '../components/commonEmployees/CategoryButtons';
import TasksTable from '../components/commonEmployees/TasksTable';

function Tasks() {
  return (
    <Grid container spacing={2}  >
      <Grid item xs={12}>
        <NavbarGrid/>
      </Grid>

      <Grid item xs={12}>
        <CategoryButtons/>
      </Grid>
    
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <TasksTable/>
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

export default Tasks