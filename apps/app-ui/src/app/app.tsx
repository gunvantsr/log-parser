// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import FileUploadForm from './components/form';
import { upload } from './utils/upload';

export function App() {
  const handleFileUpload = async (file: File) => {
    await upload(file);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-4 rounded-md shadow-[0px_20px_20px_10px_#00000024]">
        <FileUploadForm onFileUpload={handleFileUpload} />
      </div>
    </div>
  );
}

export default App;
