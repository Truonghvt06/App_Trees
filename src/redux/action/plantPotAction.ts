import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API} from '../../api/Api';

const API_PLANT_POT = `${URL_API}/plant_pots`;

export const fetchPlantPot = createAsyncThunk(
  'plant-pot/fetchPlantPot',
  async () => {
    try {
      const response = await fetch(API_PLANT_POT);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log('Lỗi lấy plant pot từ server: ', error);
    }
  },
);
