import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dataSlice = createSlice({
  name: 'data',
  initialState: { data: null, loading: false, error: null },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const fetchData = () => async (dispatch) => {
  try {
    dispatch(dataSlice.actions.fetchDataStart());

    const response = await axios.get('https://api.npoint.io/4829d4ab0e96bfab50e7');
    const data = response.data;
    dispatch(dataSlice.actions.fetchDataSuccess(data));
  } catch (error) {
    dispatch(dataSlice.actions.fetchDataFailure(error));
  }
};

const store = configureStore({
  reducer: dataSlice.reducer,
});

export default store;
