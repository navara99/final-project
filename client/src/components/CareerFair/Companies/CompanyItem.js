import React from 'react'
import { Button, Typography, Grid, Paper} from '@mui/material';



const CompanyItem = (props) => {
  const {industry} = props
  return (
    <Grid item xs={8}>
      <Paper sx={{ p: 2, margin: 'auto',  flexGrow: 1 }} elevation={8}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container  spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                {industry.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                In Queue : 4
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <Button variant='contained'>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    See Flyer
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' color='secondary'>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Join
                </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
  )
}

export default CompanyItem
