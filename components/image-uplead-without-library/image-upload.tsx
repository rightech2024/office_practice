'use client';
import React, { useState } from 'react';

const ImageUpload = () => {
    const [file, setFile] = useState<File>();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) return
        
        try {
            const data = new FormData();
        data.set('file', file);

        const res = await fetch('/api/upload', {
            method: "POST",
            body: data,
        })

        if (!res.ok) {
            throw new Error(await res.text())
        }
        } catch (error: any) {
            console.log(e)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files?.[0])}/>
                <input type="submit" value="upload" />
            </form>
        </div>
    );
};

export default ImageUpload;