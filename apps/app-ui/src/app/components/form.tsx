// FileUploadForm.js
import React, { useState } from 'react';

interface Props {
  onFileUpload(file: File | null): void;
}

function FileUploadForm({ onFileUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFileUpload(file);
  };

  return (
    <div>
      <h1 className="text-lg">Upload log file</h1>
      <form className="flex flex-col" onSubmit={handleFileUpload}>
        <input type="file" onChange={handleChange} />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Upload file
        </button>
      </form>
    </div>
  );
}

export default FileUploadForm;
