import {createSlice} from '@reduxjs/toolkit';
import {fetchPlantPot} from '../action/plantPotAction';

interface IPlantPotType {
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

interface IPlantPot {
  listPlantPot: IPlantPotType[];
}

const init: IPlantPot = {
  listPlantPot: [],
};

const PLantPotSlice = createSlice({
  name: 'plantPot',
  initialState: init,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPlantPot.fulfilled, (state, action) => {
        state.listPlantPot = action.payload;
      })
      .addCase(fetchPlantPot.rejected, (state, action) => {
        console.log('Plant pot rejected error: ', action.error.message);
      });
  },
});

export default PLantPotSlice.reducer;
