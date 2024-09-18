import { User } from "@/entities/user";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {} as User;

export const fetchDummyUsers = createAsyncThunk(
  "users/fetchDummyUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return {
        ...state,
        id: action.payload.id,
        fullName: action.payload.fullName,
        email: action.payload.email,
      };
    },
    removeUser() {
      return {} as User;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummyUsers.fulfilled, (state, action) => {
      return {
        ...state,
        test: action.payload,
      };
    });
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
