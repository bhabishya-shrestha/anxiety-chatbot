import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./slices/chat-slice";
import moodSlice from "./slices/mood-slice";
import generalSlice from "./slices/general-slice";
import userSlice from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    chat: chatSlice,
    mood: moodSlice,
    general: generalSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
