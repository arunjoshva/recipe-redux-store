import { createSlice } from "@reduxjs/toolkit";

const loadFavourites = () => {
    try {
        const stored = localStorage.getItem("favourites");

        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        return [];
    }
};

const favouriteSlice = createSlice({
    name: "favourites",

    initialState: {
        items: loadFavourites()
    },

    reducers: {
        addFavourite: (state, action) => {

            const exists = state.items.find(
                (item: any) => item.idMeal === action.payload.idMeal  //item.idMeal means item in the favourites list
            )

            if(!exists){
                state.items.push(action.payload);

                localStorage.setItem("favourites", JSON.stringify(state.items));
            }
        },

        removeFavourite: (state, action) => {

            state.items = state.items.filter(
                (item: any) => item.idMeal !== action.payload
            )

            localStorage.setItem("favourites", JSON.stringify(state.items));
        }
    }
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;