// src/components/BOQUploadForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BOQUploadForm = () => {
  const [file, setFile]     = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async e => {
    e.preventDefault();
    if (!file) {
      setMessage('કૃપા કરીને ફાઇલ પસંદ કરો');
      return;
    }

    const formData = new FormData();
    formData.append('boqFile', file);

    try {
      // <-- relative path, proxy will forward this to port 5000
      const { data } = await axios.post('/api/boq/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage(data.message);
    } catch (err) {
      console.error('અપલોડ ભૂલ:', err);
      setMessage('અપલોડ દરમિયાન ભૂલ આવી');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" name="boqFile" onChange={handleFileChange} />
      <button type="submit">અપલોડ કરો</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default BOQUploadForm;
