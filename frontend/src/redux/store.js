import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authUserReducer from "./slices/authUserSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import postedJobsReducer from "./slices/postedJobsSlice";
import appliedJobsReducer from "./slices/appliedJobsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authUser: authUserReducer,
  postedJobs: postedJobsReducer,
  appliedJobs: appliedJobsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
