import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Box, Grid, Paper } from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/material";
import SignUpForm from './SignUpForm'


function SignUp() {
    return (
      <Box sx={{
        display: 'flex'
      }}>
        <Grid container sx={{bgcolor:'#EEF0FA',width:'1202px',height:'768px'}}>
        <Grid xs={4.5}>
        <Box>hello</Box>
        </Grid>
  
        <Grid xs={7}>
        <Paper ><SignUpForm/></Paper></Grid>
        </Grid>
      </Box>
    );
  }
  
  export default SignUp;