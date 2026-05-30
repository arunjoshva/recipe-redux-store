import { useParams } from "react-router-dom";
import { useGetRecipesByCategoryQuery } from "../services/recipeApi";
import { Link } from "react-router-dom";
import RecipeCardSkeleton from "../components/RecipeCardSkeleton";
import type { Meal } from "../types/recipe";

const CategoryRecipes = () => {

    const { name } = useParams();

    const { data, error, isLoading } = useGetRecipesByCategoryQuery(name || "");

    if(isLoading){
        return(
            <div className="min-h-screen bg-gray-100 px-6 py-10">

                <div className="max-w-7xl mx-auto">
                    {/* PAGE TITLE */}
                    <div className="h-10 w-72 bg-gray-300 rounded animate-pulse mb-10"></div>

                    {/* SKELETON GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                            Array.from({length: 8}).map((_, index) => (
                                <RecipeCardSkeleton key={index} />
                            ))
                        }
                    </div>

                </div>

            </div>
        );
    }

    if(error){
        return(
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-3xl font-bold animate-pulse">
                    Something Went Wrong
                </h1>
            </div>
        );
    }   
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

        <div className="max-w-7xl mx-auto">

            {/* PAGE TITLE */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
                {name} Recipes
            </h1>            

            {/* RECIPE GRID */}
            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        Array.isArray(data?.meals) && 
                        data.meals.map((meal: Meal) => (
                            <Link to={`/recipe/${meal.idMeal}`}>
                                <div key={meal.idMeal} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer">

                                    {/* IMAGE */}
                                    <div className="relative">
                                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-56 object-cover" />

                                        <div className="absolute inset-0 bg-black/20"></div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-5">
                                        <h2 className="text-xl font-bold text-center text-gray-800 mb-4 line-clamp-1">{meal.strMeal}</h2>

                                        <button className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition duration-300 cursor-pointer">
                                            View Recipe
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            

        </div>
        
    </div>
  );
};

export default CategoryRecipes;
