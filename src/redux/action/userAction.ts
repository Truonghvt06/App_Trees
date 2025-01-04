import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API} from '../../api/Api';
import {IUserStyle} from '../reducer/userReducer';

const API_USER = `${URL_API}/users`;

export const fetchUsser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const response = await fetch(API_USER);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Lỗi lấy dữ liệu user từ server: ', error);
  }
});

export const addUserAPI = createAsyncThunk(
  'user/addUser',
  async (obj: IUserStyle, thunkAPI) => {
    try {
      const response = await fetch(API_USER, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateUserAPI = createAsyncThunk(
  'user/updateUser',
  async (obj: IUserStyle, thunkAPI) => {
    try {
      const response = await fetch(`${API_USER}/${obj.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
