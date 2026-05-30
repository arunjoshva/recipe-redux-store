import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { Link } from "react-router-dom";
import { removeFavourite } from "../features/favourites/favouriteSlice";
import { Heart } from "lucide-react";
import type { Meal } from "../types/recipe";

const Favourites = () => {

    const favourites = useSelector(
        (state: RootState) => state.favourites.items
    );    

    const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

        <div className="max-w-7xl mx-auto">

            <h1 className="text-4xl font-extrabold text-gray-800 mb-10">Favourite Recipes</h1>

            {
                favourites.length === 0 ? (

                    <div className="bg-white rounded-2xl p-10 text-center shadow">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">No Favourites Yet</h2>
                        <p className="text-gray-500">Start adding your favourite recipes</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                            favourites.map((meal: Meal) => (
                                <div key={meal.idMeal} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

                                    <div className="relative">

                                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-56 object-cover" />   

                                        {/* HEART BUTTON */}
                                        <button
                                            onClick={() => dispatch(removeFavourite(meal.idMeal))}
                                            title="Remove from favourites"
                                            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full
                                            p-2 shadow-md cursor-pointer transition-all duration-300 hover:scale-110"
                                        ><Heart size={20} className="fill-red-500 text-red-500" /></button>

                                    </div>                                                                     

                                    <div className="p-5">

                                        <h2 className="text-xl font-bold text-gray-800 mb-4 line-clamp-1">
                                            {meal.strMeal}
                                        </h2>

                                        <Link to={`/recipe/${meal.idMeal}`} className="block text-center w-full bg-orange-500 hover:bg-orange-600
                                         text-white py-2 rounded-lg font-semibold transition duration-300 " >
                                            View Recipe
                                        </Link>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
      
    </div>
  );
};

export default Favourites;
