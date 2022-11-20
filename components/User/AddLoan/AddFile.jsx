import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineClose } from "react-icons/ai";

const AddFile = ({ setFile }) => {
  const [file, setFileState] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFileState(acceptedFiles[0]);
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-3">
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center w-full h-full bg-[#25d58c] rounded-lg shadow-lg"
      >
        <input {...getInputProps()} />
        <div className="flex items-center justify-center w-full h-full p-5">
          {file ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-xl font-semibold mb-4">{file.name}</h1>
              <AiOutlineClose
                className="text-black cursor-pointer"
                onClick={() => {
                  setFileState(null);
                  setFile(null);
                }}
              />
            </div>
          ) : (
            <h1 className="text-xl font-semibold">
              Drag and drop files here <br /> or <br />
              click to select files
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFile;
