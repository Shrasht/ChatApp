import { Typography, Box } from '@mui/material';
import React from 'react';
import { fileType,transformtoString } from '../../lib/features'; // Ensure correct import
import RenderAttachment from './RenderAttachment';


const MessageComponent = ({ message, user }) => {
  const { attachments = [], sender, content, createdAt } = message;

  const sameSender = user._id === sender._id;
  const timeAgo = createdAt;

  return (
    <>
      <div
        style={{
          alignSelf: sameSender ? 'flex-end' : 'flex-start',
        }}
      >
        {/* Sender's name (only if not same sender) */}
        {!sameSender && <Typography>{sender.name}</Typography>}

        {/* Message content */}
        {content && <Typography>{content}</Typography>}

        {/* Attachments */}
        {attachments.length > 0 &&
          attachments.map((attachment, index) => {
            const url = attachment.url;
            const file = fileType(url); // Determine the file type based on the URL

            return (
              <Box key={index}>
                {/* RenderAttachment component used here */}
                
                {/* Download link for the attachment */}
                <a href={url} target='_blank'  download style={{ color: '#000' }}>
                {RenderAttachment(file,url)} 
                </a>
              </Box>
            );
          })}

        <Typography variant='caption'>{timeAgo}</Typography>
      </div>
    </>
  );
};

export default MessageComponent;
