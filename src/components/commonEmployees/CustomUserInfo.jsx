import { Box, Stack } from '@mui/material'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Animate from '../common/Animate';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MPaper from '../common/MPaper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Frozen yoghurt','Frozen yoghurt'),
  createData('Ice cream sandwich','Frozen yoghurt'),
  createData('Eclair', 'Frozen yoghurt'),
  createData('Cupcake','Frozen yoghurt'),
  createData('Gingerbread', 'Frozen yoghurt'),
  createData('Eclair', 'Frozen yoghurt'),
  createData('Cupcake','Frozen yoghurt'),
];


function CustomUserInfo() {
  return (
    <Animate>
      <MPaper>
      <Stack>
        <Stack direction='row'>
            <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              bgcolor:"#f9fafb",
              width:"200px",
              height:"200px",
              margin:"0px 12px",
              borderRadius:"6px"
            }}>
              <PersonOutlineIcon sx={{
                fontSize:"170px",
                margin:"30px",
                fontWeight:"100",
                padding:"20px",
                color:"#ccc"
              }}/>
            </Box>
            <TableContainer sx={{ width: "600px"}} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
       </Stack>
      </MPaper>
    </Animate>
  )
}

export default CustomUserInfo