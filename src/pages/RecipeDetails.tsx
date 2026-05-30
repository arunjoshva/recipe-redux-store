import { useParams } from "react-router-dom";
import { useGetRecipeDetailsQuery } from "../services/recipeApi";
import RecipeDetailSkeleton from "../components/RecipeDetailSkeleton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { Heart } from "lucide-react";
import { addFavourite, removeFavourite } from "../features/favourites/favouriteSlice";

const RecipeDetails = () => {

  const { id } = useParams();

  const { data, error, isLoading} = useGetRecipeDetailsQuery(id || "");

  const recipe = data?.meals?.[0];

  const dispatch = useDispatch();

  const favourites = useSelector(
    (state: RootState) => state.favourites.items 
  );

  const isFavourite = favourites.some(
    (item: any) => item.idMeal === recipe?.idMeal
  );

  if(isLoading){
    return <RecipeDetailSkeleton />;
  }

  if(error){
    return(
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold animate-pulse">Something Went Wrong</h1>
      </div>
    );
  }

  if(!recipe){
    return(
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Recipe Not Found</h1>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
        
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* IMAGE */}
          <img src={recipe?.strMealThumb} alt={recipe?.strMeal} className="w-full h-100 object-cover" />

          {/* CONTENT */}
          <div className="p-8">

            {/* TITLE */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{recipe?.strMeal}</h1>            

            {/* CATEGORY + AREA */}
            <div className="flex flex-wrap gap-4 mb-6">

                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium">Category: {recipe?.strCategory}</span>

                <span className="bg-green-100 text-gray-600 px-4 py-2 rounded-full font-medium">Cuisine: {recipe?.strArea}</span>

                <button onClick={() => {
                    if(isFavourite){
                      dispatch(removeFavourite(recipe.idMeal))
                    }else{
                      dispatch(addFavourite(recipe))
                    }
                  }}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110" aria-label={
                    isFavourite ? "Remove from favourites" : "Add to favourites"
                  }
                
                >
                  <Heart size={20} className={isFavourite ? "fill-red-500 text-red-500" : "text-gray-800 hover:text-red-500" } />
                </button>

            </div>

            {/* INGREDIENTS */}
            <div className="mb-10">

              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {
                  Array.from({length: 20}).map((_, index) => {
                    
                    const ingredient = recipe?.[`strIngredient${index + 1}`];

                    const measure = recipe?.[`strMeasure${index + 1}`];

                    if(!ingredient) return null;

                    return(
                      <li key={index} className="bg-gray-100 p-3 rounded-lg">
                        {ingredient} - {measure}
                      </li>
                    );

                  })
                }

              </ul>

            </div>

            {/* INSTRUCTIONS */}
            <div className="mb-10">

                <h2 className="text-2xl font-bold mb-4">Instructions</h2>

                <p className="text-gray-700 leading-8 whitespace-pre-line">{recipe?.strInstructions}</p>

            </div>

             {/* YOUTUBE VIDEO */}
             {
              recipe?.strYoutube && (
                <div>

                  <h2 className="text-2xl font-bold mb-4">
                      Video Tutorial
                  </h2>

                  <a 
                    href={recipe.strYoutube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                  >
                      Watch on Youtube
                  </a>
                    
                </div>
              )
             }

          </div>

        </div>

    </div>
  );
};

export default RecipeDetails;
