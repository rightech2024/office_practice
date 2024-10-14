import { writeFile } from "fs/promises";
import { join } from "path";
import React from "react";

const ServerActioinImageUpload = () => {
  const upload = async (data: FormData) => {
    "use server";
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      throw new Error("no File upload");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join("/", "tmp", file.name);
    await writeFile(path, buffer);

    console.log(`open ${path} to see the upload flie`);

    return { success: true };
  };
  return (
    <div>
      <form action={upload}>
        <input type="file" name="file" id="file" />
        <input type="submit" value="upload" />
      </form>
    </div>
  );
};

export default ServerActioinImageUpload;
