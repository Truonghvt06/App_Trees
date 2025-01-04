import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API} from '../../api/Api';

const API_PLANT = `${URL_API}/plants`;

export const fetchPlant = createAsyncThunk('plant/fetchPlant', async () => {
  try {
    const response = await fetch(API_PLANT);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Lỗi lấy data từ server: ', error);
  }
});
