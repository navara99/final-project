import React,{useState}from 'react'
import { Button, Typography, Grid, Paper, Avatar} from '@mui/material';
import CompanyInfo from './CompanyInfo';

const CompanyItem = ({organization}) => {
  const {organizations_name} = organization;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Grid item xs={12} mx={2}>
      <Paper sx={{ p: 3,  flexGrow: 1, borderRadius:3, mx:"auto"}} elevation={8}>
        <Grid item xs={12} sm container spacing={2}>
          <Grid item xs container spacing={2}>
            <Grid item  xs>
              <Avatar
                alt="Google"
                src="https://blog.hubspot.com/hubfs/image8-2.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography gutterBottom variant="h5" component="div">
                {organizations_name}
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <Button variant="outlined" onClick={handleClickOpen}>
                  Detail
                </Button>
                <CompanyInfo open = {open} setOpen = {setOpen} organization = {organization}/>
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
