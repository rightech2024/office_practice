import ImageUpload from '@/components/image-uplead-without-library/image-upload';
import ServerActioinImageUpload from '@/components/image-uplead-without-library/server-actioin-image-upload';
import React from 'react';

const ImageUploadPage = () => {
    return (
        <div className='h-screen w-full grid place-content-center'>
            <h2>normal Image upload</h2>
            <ImageUpload />
            <h2>Server Action Image upload</h2>
            <ServerActioinImageUpload />
        </div>
    );
};

export default ImageUploadPage;