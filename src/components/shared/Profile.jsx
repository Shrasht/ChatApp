import { Email, Height, Info } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <Stack spacing={'2rem'} alignItems={'center'}>
        <Avatar 
        sx={{width:200,
            height:200,
            objectFit:'contain',
            marginBottom:'1rem',
            border:'5px white solid'


        }}
        />
        <ProfileCard heading={'Name'} text={'Shreshth Singh'} />
        <ProfileCard heading={'Email'} text={'shreshth.singh22@spit.ac.in'} icon={<Email/>}/>
        <ProfileCard heading={'Bio'} text={'I am a Passionate learner'} icon={<Info />}/>
        </Stack>

  )
}

const ProfileCard=({text,icon,heading})=>{
   return( <Stack spacing={'1rem'} direction={'row'} alignItems={'center'}  textAlign={'center'}>
            {icon&&icon}
            <Stack>
                {heading&&(<Typography variant='body1' sx={{color:'white' ,fontFamily: 'Spectral, serif' }}>
                    {heading}
                </Typography>)
}
                {text &&(<Typography variant='h6' sx={{color:'white'}}>
                    {text}
                </Typography>)}
            </Stack> 

    </Stack>
 )
}
export default Profile