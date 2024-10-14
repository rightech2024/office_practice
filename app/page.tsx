"use client"
import UploadButton from "@/components/cloudinary/upload/upload-button"
import RemoveBackground from "@/components/remove-background/remove-background"
import { CldImage } from "next-cloudinary";
import CloudinaryImage from "@/components/cloudinary/cloudinary-react/cloudinay-image"
import BarenjTable from "@/components/ant-design-components/table/barenj-table";

export default function Home() {
  return (
    <>
    <h1 className="h-[300vh]">hello world</h1>
    <h1 className="h-[10vh] flex justify-center items-center font-sans font-black">0123 سلام دنیا</h1>
    <h1 className="h-[10vh] flex justify-center items-center yekan-bakh">1234567890 سلام دنیا</h1>
    <h1 className="h-[10vh] flex justify-center items-center font-YekanBakh font-black">1234567890 سلام دنیا</h1>
    <h1 className="basalam">500</h1>
    <CloudinaryImage />
    <BarenjTable />
    </>
  );
}
