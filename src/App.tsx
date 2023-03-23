import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

// export default function App() {
//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Material UI Create React App example in TypeScript
//         </Typography>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
// export default function App() {
//   return ( 

//     <Container maxWidth="sm">
//       <Box sx={{ my: 10 }}>
//       <Copyright />
//       </Box>
//     </Container>
//     );
// }

// function Copyright() {

//   return (
//     <div>
//       <Box bgcolor='red' width={100} height={100}>
      
//       </Box>
//     </div>
//   );
// }

import { Box, Grid, Paper } from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/material";

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}>
      <Grid container><Grid xs={2}>hello ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</Grid></Grid>

      <Grid xs={4}>
      <Paper elevation={3}>Hello World</Paper></Grid>
    </Box>
  );
}

export default App;
