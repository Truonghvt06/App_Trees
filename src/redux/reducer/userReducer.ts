import {createSlice} from '@reduxjs/toolkit';
import {fetchUsser} from '../action/userAction';

export interface IUserStyle {
  id?: string;
  name: string;
  avatar: string;
  email: string;
  phone_number: string;
  password: string;
  address: string;
}
interface IUser {
  listUser: IUserStyle[];
}
const init: IUser = {
  listUser: [],
};

const UserSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsser.fulfilled, (state, action) => {
        state.listUser = action.payload;
      })
      .addCase(fetchUsser.rejected, (state, action) => {
        console.log('User rejected error: ', action.error.message);
      });
  },
});

export default UserSlice.reducer;
