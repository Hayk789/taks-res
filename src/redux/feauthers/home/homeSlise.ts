import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reqImageData } from "../../../api/api";
import { AppThunk } from "../../store";
import { HomeParamsType } from "./model";


 const initialState:HomeParamsType = {
  data:[],
  category:1,
  limit:10,
  page:1
};
const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCategory:(state, {payload}:PayloadAction<number>) => {
      state.category  = payload
    },
    setLimit:(state, {payload}:PayloadAction<number>) => {   
      state.limit =  payload   
     },
    setPage:(state, {payload}:PayloadAction<number>) => {
      state.page = payload
    },
    getImage:(state, {payload}:PayloadAction<any> ) => {
      state.data = payload
    }
   },
  
});

export const getImages = (page:number, category:number , limit:number): AppThunk => async (dispatch) => {
  
  try {
    const res = await reqImageData(page,category,limit);
    dispatch(getImage(res));
  } catch (error) {
    alert(error);
  }
};

export const { setCategory, setLimit,setPage,getImage  } = HomeSlice.actions;
export default HomeSlice.reducer;
export const homeSlise = (state: any) => state;