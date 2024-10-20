import React from 'react'
import { transformtoString } from '../../lib/features';
import { FileOpen } from '@mui/icons-material';
const RenderAttachment = (file,url) => {
  
    switch(file){

    case 'image':
    {
       return <img src={transformtoString(url,200)}  width={'200px'} height={'150px'} style={{objectFit:'contain'}} alt='Image'></img>
        break;

    }

    case 'audio':
    {
        return <audio src={url} preload='none' controls alt='Audio'></audio>
        break;

    }
    case 'video':
    {
       return <video  src={url} preload='none' width={'200px'} controls ></video>
        break;

    }

    default:
      return <FileOpen/>;
}
}
    
  

export default RenderAttachment