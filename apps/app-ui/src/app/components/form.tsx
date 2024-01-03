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
      <div className="flex flex-row justify-between">
        <h1 className="text-xl">Log Parser</h1>
        <p>
          by{' '}
          <a href="https://gunvant.in" className="hover:underline">
            Gunvant
          </a>
        </p>
      </div>
      <form className="flex flex-col" onSubmit={handleFileUpload}>
        <input
          type="file"
          onChange={handleChange}
          className="text-lg mt-5 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
        />
        <button
          type="submit"
          className="text-white text-lg mt-3 bg-blue-700 hover:bg-blue-800 focus:outline-none  focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Upload file
        </button>
      </form>
    </div>
  );
}

export default FileUploadForm;
