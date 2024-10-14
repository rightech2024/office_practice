import React from 'react';
import BeforeOptimize from '@/components/image-optimize-with-nextjs/before-optimize';
import ImageOptimize from '@/components/image-optimize-with-nextjs/image-optimizer';

const ImageOptimizePage = () => {
    return (
        <div>
            {/* <BeforeOptimize /> */}
            <ImageOptimize />
        </div>
    );
};

export default ImageOptimizePage;