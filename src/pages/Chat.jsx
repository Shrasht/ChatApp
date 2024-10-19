import React, { useRef } from 'react'
import AppLayout from '../components/styles/layout/AppLayout'
import { IconButton,Stack } from '@mui/material';
import { AttachFile, Send } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
const Chat = () => {
  const containerRef=useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={'border-box'}
        padding={'1rem'}
        spacing={'1rem'}
        height={'90%'}
        sx={{
          overflowX:'hidden',
          overflowY:'auto'
        }}>


        </Stack> 


        <form style={{
          height:'10%'
        }}>
          <Stack direction={'row'} >
          <IconButton>
            <AttachFile/>
          </IconButton>

        <InputBox placeholder='Enter Message Here'/>

        <IconButton type='submit' sx={{color:`#CF9FFF`}}>
          <Send/>
        </IconButton>
        </Stack>

        </form>
    </>
  )
}

export default AppLayout()(Chat)