import {configureStore} from '@reduxjs/toolkit';
import plantReducer from '../reducer/plantReducer';
import plantPotReducer from '../reducer/plantPotReducer';
import {useDispatch, useSelector} from 'react-redux';
import accessoryReducer from '../reducer/accessoryReducer';
import userReducer from '../reducer/userReducer';

export const store = configureStore({
  reducer: {
    plant: plantReducer,
    plant_pot: plantPotReducer,
    accessory: accessoryReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelected = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
