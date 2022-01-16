import React from 'react';
import {Button, Avatar, List, ListItem} from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};



const CompanyInfo = (props) => {
  const {open, setOpen, organization} = props;
  console.log("org", organization);
  const {organizations_name,organizations_desc } = organization;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Avatar
            alt="Google"
            src="https://blog.hubspot.com/hubfs/image8-2.jpg"
            sx={{ width: 56, height: 56 }}
          />
          {organizations_name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom variant='h6'>
            Company Discription:
          </Typography>
          <Typography gutterBottom>
            {organizations_desc}
          </Typography>   
          <Typography gutterBottom variant='h6'>
            Availabel Jobs:
          </Typography>
          <Typography gutterBottom>
            1) Full-Stack Dev
            2) Ux Designer         
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Join
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


export default  CompanyInfo;