import { useEffect, useState } from "react";
import { useSearchRecipesQuery } from "../services/recipeApi";
import { Link } from "react-router-dom";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

    const { data, isLoading } = useSearchRecipesQuery(debouncedSearchTerm, {skip: debouncedSearchTerm.trim() === ""});

    const meals = data?.meals ?? [];

    useEffect(() => {

        const timer = setTimeout(() => {

            setDebouncedSearchTerm(searchTerm);

        }, 500);

        return () => clearTimeout(timer);

    }, [searchTerm]);

    return (
        <div className="relative max-w-2xl mx-auto mb-12">

            {/* INPUT */}
            <input type="text" placeholder="Search Recipes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-full px-6 py-4 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"            
            />

            {/* SEARCH RESULTS */}
            {
                debouncedSearchTerm && (
                    <div className="absolute top-full left-0 w-full bg-white rounded-xl shadow-xl mt-3 max-h-100 overflow-y-auto z-50">
                       {
                        isLoading ? (
                            <p className="p-4 text-gray-400">Searching...</p>
                            ) : meals.length > 0 ? (

                                meals.map((meal: any) => (

                                    <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal}
                                        className="flex items-center gap-4 p-4 hover:bg-gray-100 transition duration-200 border-b"                                
                                    >
                                        
                                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 object-cover rounded-lg" />

                                        <span  className="font-medium text-gray-800">{meal.strMeal}</span>

                                    </Link>
                                ))
                            ) : (
                                <p className="p-4 text-gray-500">No Recipes Found. </p>
                            )
                       }

                    </div>
                )
            }
        
        </div>
  ) ;
};

export default SearchBar;
