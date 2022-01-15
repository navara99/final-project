import React,{useState}from 'react'
import { Button, Typography, Grid, Paper} from '@mui/material';
import CompanyInfo from './CompanyInfo';

const CompanyItem = ({organization}) => {
  const {organizations_name} = organization;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Grid item xs={8} marginTop={2} >
      <Paper sx={{ p: 4, margin: 'auto',  flexGrow: 1, borderRadius:5 }} elevation={8}>
        <Grid item xs={12} sm container spacing={2}>
          <Grid item xs container  spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                {organizations_name}
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <Button variant="outlined" onClick={handleClickOpen}>
                  Detail
                </Button>
                <CompanyInfo open = {open} setOpen = {setOpen}/>
              </Grid>
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
    </Paper>
    </Grid>
  )
}

export default CompanyItem
