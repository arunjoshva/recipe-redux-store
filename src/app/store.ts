import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "../services/recipeApi";
import favouritesReducer from "../features/favourites/favouriteSlice"

export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer,

        favourites: favouritesReducer
    },

    middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(recipeApi.middleware))
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;