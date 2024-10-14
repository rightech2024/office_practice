import React from "react";

const TailwindBorderAnimation = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-slate-950 text-white">
      <div className="card-wrapper h-[200px] w-[200px]">
        <div className="card-content flex items-center justify-center text-xs">
          <div className="max-w-[60%] text-center">
            Check out{" "}
            <a
              href="https://youtube.com/@codinglyio"
              className="font-semibold underline"
              target="_blank"
            >
              Codingly
            </a>{" "}
            on YouTube
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindBorderAnimation;
