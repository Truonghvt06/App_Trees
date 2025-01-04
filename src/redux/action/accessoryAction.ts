import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API} from '../../api/Api';

const API_ACCESSORY = `${URL_API}/accessory`;

export const fetchAccessory = createAsyncThunk(
  'accessory/fetchAccessory',
  async () => {
    try {
      const response = await fetch(API_ACCESSORY);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log('Lỗi lấy dữ liệu accessory từ server: ', error);
    }
  },
);
