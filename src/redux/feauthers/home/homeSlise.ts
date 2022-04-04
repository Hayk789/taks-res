import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reqCategory, reqImageData } from "../../../api/api";
import { AppThunk } from "../../store";
import { HomeParamsType } from "./model";

const initialState: HomeParamsType = {
  data: {
    image: [],
    category: [],
  },
  category: 1,
  limit: 10,
  page: 1,
};
const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<number>) => {
      state.category = payload;
    },
    setLimit: (state, { payload }: PayloadAction<number>) => {
      state.limit = state.limit + payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    getImage: (state, { payload }: PayloadAction<any>) => {
      state.data.image = payload;
    },
    getCategory: (state, { payload }: PayloadAction<any>) => {
      console.log(state.data.category, " state.data.category");
      state.data.category = payload;
    },
  },
});

export const getImages =
  (page: number, category: number, limit: number): AppThunk =>
  async (dispatch) => {
    try {
      const resImage = await reqImageData(page, category, limit);
      dispatch(getImage(resImage));
    } catch (error) {
      alert(error);
    }
  };

export const GetCategoryData = (): AppThunk => async (dispatch) => {
  try {
    const resCategory = await reqCategory();
    dispatch(getCategory(resCategory));
  } catch (error) {
    alert(error);
  }
};

export const { setCategory, setLimit, setPage, getImage, getCategory } =
  HomeSlice.actions;
export default HomeSlice.reducer;
export const homeSlise = (state: any) => state;
