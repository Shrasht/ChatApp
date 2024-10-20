import React, { useRef } from 'react'
import AppLayout from '../components/styles/layout/AppLayout'
import { IconButton,Stack } from '@mui/material';
import { AttachFile, Send } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import MessageComponent from '../components/shared/MessageComponent';
import { sampleMessage } from '../components/constants/sampleData';
import FileMenu from '../components/dialogs/FileMenu';
const Chat = () => {
  const containerRef=useRef(null);

  const user={
   _id:'akjsdkadkajd',
   name:'Shreshth'
  }
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


      

        {sampleMessage.map((i)=>(
        <MessageComponent key={i._id} message={i} user={user}/>
        ))}
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
        <FileMenu/>
    </>
  )
}

export default AppLayout()(Chat)