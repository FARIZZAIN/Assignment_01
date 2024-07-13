import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {

  const [rows, setRows] = useState([]);

    const [formData, setFormData] = useState({
        pname:'',
        description:'',
        price:'',
        category:'',
      });

      function valueCap(e){
        setFormData({...formData,[e.target.name]:e.target.value})
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="pname"
        name="pname"
        label="Product Name"
        variant="outlined"
        value={formData.pname}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
        onChange={valueCap}
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        variant="outlined"
        value={formData.description}
        onChange={valueCap}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="price"
        name="price"
        label="Price"
        variant="outlined"
        value={formData.price}
        onChange={valueCap}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="category"
        name="category"
        label="Category"
        variant="outlined"
        value={formData.category}
        onChange={valueCap}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <Button type="submit" variant="contained" sx={{ color: '#fff' }} >
        Submit
      </Button>
    </Box>
  )
}

export default Add