import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFormState {
  id: number;
  jobTitle: string;
  fio: string;
  email: string;
  tel: string;
  vcss: {
    [key: string]: {
      nickname: string;
      subscribers: string;
    };
  };
}

const initialState: IFormState = {
  id: -1,
  jobTitle: "",
  fio: "",
  email: "",
  tel: "",
  vcss: {
    gitHub: {
      nickname: "",
      subscribers: "",
    },
    gitLab: {
      nickname: "",
      subscribers: "",
    },
  },
};

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    setFieldValue: <T extends keyof IFormState>(state: IFormState, action: PayloadAction<{ field: T; value: IFormState[T] }>) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetState: () => initialState,
  },
});

export const responseReducer = responseSlice.reducer;
export const { setFieldValue, resetState } = responseSlice.actions;
