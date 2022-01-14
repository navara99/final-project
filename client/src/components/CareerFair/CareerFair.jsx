import React from 'react'

import Grid from '@mui/material/Grid';
import CompanyList from './Companies/CompanyList';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const CareerFair = () => {
  const fair = 
    {
      name : 'Fair1',
      host_id : 1,
      description : "Some text",
      start_time : '2022-01-22',
      end_time:'2022-01-23',
      poster:"url"
    };

  
  const industries = [ 
      {
        name : 'Dabtype', 
        description :'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero convallis eget eleifend luctus ultricies eu nibh.'
      },
      {
        name :'Devcast', 
        description :'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.'
      }
    ];
    const users = [
      {
        first_name :'Louisa' ,
        last_name : 'Meyer',
        email :'jacksonrose@hotmail.com' ,
        username :'louisa' ,
        profile_picture : 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Round&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Surprised&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Yellow',
      },
      {
        first_name :'Dominic' ,
        last_name : 'Parks',
        email :'victoriablackwell@outlook.com' ,
        username :'dominic' ,
        profile_picture : 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Sad&skinColor=Yellow',
      }
    ]
  return (
    <Grid container spacing={2}>
      {/* Name of the fair */}
      <Grid item xs={12} marginTop={2}>
        <Item elevation={3}>
          {fair.name}
        </Item>
      </Grid>
      {/* companies detail */}
      <CompanyList industries = {industries}/>
    
    </Grid>
  )
}

export default CareerFair
