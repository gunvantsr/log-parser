// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { blob } from 'stream/consumers';
import React, { useState } from 'react';
export function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-4 rounded-md shadow-[0px_20px_20px_10px_#00000024]">
        <UploadFileForm />
      </div>
    </div>
  );
}

export default App;

function UploadFileForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = 'http://localhost:3000/api/file/upload';
    const formData = new FormData();

    if (file === undefined || file === null) return;

    formData.append('file', file);
    formData.append('fileName', file.name);

    try {
      const results = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (results.ok) {
        // Retrieve the filename from the Content-Disposition header, if available
        const contentDisposition = results.headers.get('Content-Disposition');
        const fileNameMatch =
          contentDisposition && contentDisposition.match(/filename="(.+?)"/);
        const suggestedFileName = fileNameMatch
          ? fileNameMatch[1]
          : `parsed_logs.json`;

        const blob = await results.blob();

        // Create a temporary link and trigger a click to download the file
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = suggestedFileName;
        link.click();

        // Cleanup: Remove the temporary link
        window.URL.revokeObjectURL(link.href);

        console.log(results);
      } else {
        window.alert(`File upload failed: ${results.statusText}`);
      }
    } catch (error) {
      window.alert('Error while processing file');
    }
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
