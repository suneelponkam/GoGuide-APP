import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Box, Grid, Paper } from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/material";

import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item><Box>
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg

            </Box></Item>
            <Box>
                helloworld
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Item><Box>
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg

            </Box></Item>
            <Box>
                helloworld
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Item><Box>
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg

            </Box></Item><Box>
                helloworld
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Item><Box>
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                helloworldgggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg
                gteeeeeeeeeeeettttttttttttttttttttttttt
                gggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggg

            </Box></Item>
            <Box>
                helloworld
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }