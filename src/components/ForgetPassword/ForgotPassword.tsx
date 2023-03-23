import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Box, Grid, Paper } from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/material";

import { styled } from '@mui/material/styles';



  export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 ,position:'center',display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
        position:'center'
      },
    }}>
        <Paper sx={{position:'center',marginLeft:'300px',marginRight:'100px',paddingTop:'px',paddingLeft:'20px'}}>hello</Paper>
        
      </Box>
    );
  }