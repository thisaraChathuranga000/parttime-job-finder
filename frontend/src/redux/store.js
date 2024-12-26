import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authUserReducer from "./slices/authUserSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import postedJobsReducer from "./slices/postedJobsSlice";
import appliedJobsReducer from "./slices/appliedJobsSlice";
import JobPostsReducer from "./slices/jobPostsSlice"
import applicantReducer from "./slices/applicantsSlice"

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authUser: authUserReducer,
  postedJobs: postedJobsReducer,
  appliedJobs: appliedJobsReducer,
  jobPosts: JobPostsReducer,
  applicants: applicantReducer
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
