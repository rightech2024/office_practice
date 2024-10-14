'use client'
import React, {
    useState
  } from 'react';
   
  export default function RemoveBackground() {
    const [image, setImage] = useState(null);
    const [bgRemove, setBgRemove] = useState(null);
   
    const handleRemoveBackground = async () => {
        const apiKey = "TdRDXRQvv8jhNw6KQXgQZWED";
        const apiUrl = "https://api.remove.bg/v1.0/removebg";
   
        const formData = new FormData();
        formData.append("image_file", image, image.name);
        formData.append("size", 'auto');
   
        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'X-Api-Key': 'TdRDXRQvv8jhNw6KQXgQZWED',
                },
                body: formData,
            });
   
            const data = await res.blob();
            const imageUrl = URL.createObjectURL(data);
            setBgRemove(imageUrl);
        } catch (error) {
            console.log(error);
        }
    };
   
    return (
        <div className="container">
            <h1 className="mb-4">Image Background Remover</h1>
            <div className="input-file mb-4">
                <label htmlFor="userImg" className="info_text">
                    Select a File
                </label>
                <input
                    type="file"
                    id="userImg"
                    className="form-control-file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
            </div>
            <div className="flex mb-4">
                {image && (
                    <div className="image-preview mr-2">
                        <img src={image ? URL.createObjectURL(image) : ""}
                            alt="" />
                    </div>
                )}
                {bgRemove && (
                    <div className="image-preview">
                        <img src={bgRemove} alt="hello" />
                    </div>
                )}
            </div>
            {bgRemove && (
                <div className="mb-4">
                    <a href={bgRemove}
                        download="background_removed_image.png">
                        <button className="btn btn-success">
                            Download
                        </button>
                    </a>
                </div>
            )}
            <div>
                <button type="button"
                    onClick={handleRemoveBackground}
                    className="btn btn-primary">
                    Remove Background
                </button>
            </div>
        </div>
    );
  }