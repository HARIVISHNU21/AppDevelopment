import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        welcome:"Welcome  Hari!!!",
        name: 'Urban Noise Tracker',
        imageUrl:"https://www.sonitussystems.com/insights/wp-content/uploads/2021/12/real-time-noise-monitoring-for-smart-cities.jpg",
        description: 'Are you tired of the constant hustle and bustle of urban life? Do you dream of finding pockets of tranquility amidst the urban chaos? Look no further! Urban Noise Tracker is here to help you reclaim your peace and quiet in the city.',
      },
      {
        id: 2,
        welcome:"",
        name: 'Noise Alert',
        imageUrl:"https://tse3.mm.bing.net/th?id=OIP._VMHHZFASJWB6V49xnx9DAHaEb&pid=Api&P=0&h=180",
        description: 'Noise pollution can originate from various sources, including transportation (e.g., traffic, airplanes, trains), industrial activities, construction sites, recreational activities ',
      }
    ],
  },
  reducers: {},
});
const store = configureStore({
    reducer: {
      featuredProducts: featuredProductsSlice.reducer,
      // Add more slices as needed
    },
  });
  
 export default store