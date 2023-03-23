import React from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Box, Grid, Paper } from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/material";


function SignUpForm() {
    return (
      <Box sx={{
        display: 'flex'
      }}>
        <Grid container sx={{bgcolor:'#EEF0FA',width:'1366px',height:'768px'}}>
        <Grid xs={4}>
        <Box>hello</Box>
        </Grid>
  
        <Grid xs={7.5}>
        <Paper >Hello World</Paper></Grid>
        </Grid>
      </Box>
    );
  }
  
  export default SignUpForm;