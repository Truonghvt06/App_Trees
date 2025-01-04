import {createSlice} from '@reduxjs/toolkit';
import {fetchAccessory} from '../action/accessoryAction';

interface IAccessoryType {
  id: string;
  name: string;
  image_pro: string;
  image_slide: string[];
  price: number;
  size: string;
  origin: string;
  quantity: number;
  type: string;
  description: string;
}

interface IAccessory {
  listAccessory: IAccessoryType[];
}

const init: IAccessory = {
  listAccessory: [],
};

const AccessorySlice = createSlice({
  name: 'accessory',
  initialState: init,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAccessory.fulfilled, (state, action) => {
        state.listAccessory = action.payload;
      })
      .addCase(fetchAccessory.rejected, (state, action) => {
        console.log('Accessory rejected: ', action.error.message);
      });
  },
});

export default AccessorySlice.reducer;
