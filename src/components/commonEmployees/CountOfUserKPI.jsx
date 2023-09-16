import React from "react";
import { Avatar, Stack, Typography, Paper } from "@mui/material";

const data = [
    {
        count:8,
        sharh:"Hodimlar soni shtat bo'yicha"
    },
    {
        count:0,
        sharh:"Vokant"
    },
    {
        count:8,
        sharh:"Ro'yhat bo'yicha"
    },
    {
        count:0,
        sharh:"Sababli"
    },
    {
        count:0,
        sharh:"Sababsiz"
    },

]
console.log(data.map((data) => {
    return data.count
}))

function CountOfUserKPI() {
  return (
    <Stack sx={{
        display: "flex",
        flexDirection: "row",
        gap:'10px',
        flexWrap:'wrap',
        borderRadius:'22px'
      }}>
        {data.map((data) => {
            return (
                <Stack key={data.count} sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap:'10px',
                    flexWrap:'wrap',
                    borderRadius:'22px',
                    margin:"15px"
                  }}>
                <Paper sx={{
                    padding:"5px 14px",
                    borderRadius:"22px",
                    minWidth:"180px"
                }}>
                    <Stack
                        sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap:'10px'
                        }}
                        >
                        <Stack>
                        <Avatar sx={{ color: "#4623e9" }}></Avatar>
                        </Stack>
                        <Stack>
                            <Typography variant="h5">{data.count}</Typography>
                            <Typography variant="p">{data.sharh}</Typography>
                        </Stack>
                    </Stack>
                    </Paper>
                </Stack>
            )
    })}
    </Stack>
  );
}

export default CountOfUserKPI;
