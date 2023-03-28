import { useState } from "react";

function FileUploader(props) {
  const [fileValid, setFileValid] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFileValid(true);
      // handle the valid file here
    } else {
      setFileValid(false);
      // handle the invalid file here
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />{" "}
      {!fileValid && <p> Please upload a valid image file. </p>}{" "}
    </div>
  );
}

export default FileUploader;
