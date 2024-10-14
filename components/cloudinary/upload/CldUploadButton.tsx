'use client';

import { CldUploadButtonProps, CldUploadButton as CldUploadButtonDefault } from "next-cloudinary";

export default function CldUploadButton(props:CldUploadButtonProps) {
    return (
        <CldUploadButtonDefault {...props} />
    )
}