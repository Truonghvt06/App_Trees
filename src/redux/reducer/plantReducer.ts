import {createSlice} from '@reduxjs/toolkit';
import {fetchPlant} from '../action/plantAction';

interface IPlantType {
  id: string;
  name: string;
  image_pro: string;
  image_slide: string[];
  price: number;
  characteristic: string;
  size: string;
  origin: string;
  quantity: number;
  type: string;
  description: string;
}

interface IPlant {
  listPlant: IPlantType[];
}
const init: IPlant = {
  listPlant: [],
};

const PlantSlice = createSlice({
  name: 'plant',
  initialState: init,
  reducers: {},
  extraReducers: bulder => {
    bulder
      .addCase(fetchPlant.fulfilled, (state, action) => {
        state.listPlant = action.payload;
      })
      .addCase(fetchPlant.rejected, (state, action) => {
        console.log('Plant rejected error: ', action.error.message);
      });
  },
});

export default PlantSlice.reducer;
