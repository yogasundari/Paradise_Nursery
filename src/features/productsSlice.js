import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    // Example data
    { id: 1, name: 'Plant 1', price: 10, category: 'Aromatic', imageUrl: '/images/plant1.jpg' },
    { id: 2, name: 'Plant 2', price: 15, category: 'Medicinal', imageUrl: '/images/plant2.jpg' }
  ],
  reducers: {}
});

export default productsSlice.reducer;
