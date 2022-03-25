import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";

const fileTypes = ["jpg", "jpeg", "png"];

export const DragAndDropFile = () => {
  const [file, setFile] = useState('');
  const handleChange = (e:any) => {
    console.log('draged file', e.name);
    
    setFile(e.name);
  };
  console.log("fiile name",file);
  
  return (
    <div>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <p>{file ? `File name: ${file}` : "no files uploaded yet"}</p>
    </div>
  );
}

