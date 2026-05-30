import { createBrowserRouter } from "react-router-dom";
import RecipeDetails from "../pages/RecipeDetails";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import CategoryRecipes from "../pages/CategoryRecipes";
import Favourites from "../pages/Favourites";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "favourites",
                element: <Favourites />
            },
            {   
                path: "category/:name",
                element: <CategoryRecipes />
            },
            {
                path: "recipe/:id",
                element: <RecipeDetails />
            }
        ]
    },
    
]);