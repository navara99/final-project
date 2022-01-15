import React from 'react'
import Grid from '@mui/material/Grid';
import CompanyList from './Companies/CompanyList';
import FairHeader from './FairHeader';

const CareerFair = () => {
  const fair = 
    {
      name : 'Fair1',
      host_id : 1,
      description : "Some text",
      start_time : '2022-01-22',
      end_time:'2022-01-23',
      poster:"https://wonder.ph/wp-content/uploads/2021/03/upcap-career-fair-thumbnail.jpg"
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
    <Grid container spacing={2} >
      {/* Name of the fair */}
      <Grid item xs={12} >
        <FairHeader fair={fair}/>
      </Grid>
      {/* companies detail */}
      <Grid item xs={12} marginTop={2}>
        <CompanyList industries = {industries}/>
      </Grid>
      
    
    </Grid>
  )
}

export default CareerFair
