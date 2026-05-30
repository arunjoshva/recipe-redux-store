import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { MealsResponse, CategoryResponse } from "../types/recipe";

export const recipeApi = createApi({
    reducerPath: "recipeApi",

    baseQuery: fetchBaseQuery({
       baseUrl: "https://www.themealdb.com/api/json/v1/1/"
    }),

    endpoints: (builder) => ({

        getCategories: builder.query<CategoryResponse, void>({  //builder.query<ResponseType, ArgumentType>()
            query: () => "categories.php"
        }),

        getRecipesByCategory: builder.query<MealsResponse, string>({
            query: (categoryName) => `filter.php?c=${categoryName}` 
        }),

        getRecipeDetails: builder.query<MealsResponse, string>({
            query: (id) => `lookup.php?i=${id}`
        }),

        searchRecipes: builder.query<MealsResponse, string>({
            query: (searchTerm: string) => `search.php?s=${searchTerm}`
        })
    })
});

export const { useGetCategoriesQuery, useSearchRecipesQuery, useGetRecipesByCategoryQuery, useGetRecipeDetailsQuery } = recipeApi;