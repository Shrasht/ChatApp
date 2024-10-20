const fileType = (url = '') => {
    const fileExtension = url.split('.').pop().toLowerCase();

    if (['mp4', 'obb', 'webm'].includes(fileExtension)) {
        return 'video';
    }

    if (['png', 'jpeg', 'jpg'].includes(fileExtension)) {
        return 'image';
    }

    if (['mp3', 'wav'].includes(fileExtension)) {
        return 'audio';
    }

    return 'file';
}

const transformtoString=(url="",width=100)=>url;

export {transformtoString};

export  {fileType};
