import axios from 'axios';

axios.post('http://localhost:5001/api/boq/upload', data)
  .then(response => {
    console.log('Upload successful:', response.data);
  })
  .catch(error => {
    console.error('Upload error:', error);
  });