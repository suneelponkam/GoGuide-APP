import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Box, Grid, Paper } from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/material";
import SignUpPage from './components/SignUp/SignUpPage'
import SignInPage from './components/SignIn/SignInPage';
import Buddy from './components/Buddy/Buddy';
import ForgotPassword from './components/ForgetPassword/ForgotPassword';
function App() {
  return (
    <Box sx={{
        height: '100%',width:'1000px'
    }}>
      {/* <SignUpPage /> */}
      {/* <SignInPage /> */}
      {/* <Buddy /> */}
      <ForgotPassword/>
    </Box>
  );
}

export default App;
