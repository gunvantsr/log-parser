export const upload = async (file: File) => {
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
