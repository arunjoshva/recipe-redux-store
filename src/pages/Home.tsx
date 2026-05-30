import CategorySkeleton from "../components/CategorySkeleton";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { useGetCategoriesQuery } from "../services/recipeApi";
import { Link } from "react-router-dom";
import type { Category } from "../types/recipe";

const Home = () => {

  const { data, error, isLoading } = useGetCategoriesQuery();

  if(isLoading){
    return(
      <div className="min-h-screen bg-gray-100">

        {/* HERO SECTION */}
        <Hero />    
        
        {/* SEARCH BAR*/}
        <div className="px-6 mt-10 h-24">
          <SearchBar />
        </div>   

        {/* CATEGORY GRID */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-10 text-gray-800" id="recipe-categories">Recipe Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {
              Array.from({length: 8}).map((_, index) => (<CategorySkeleton key={index} />))
            }
          </div>
        </div>

      </div>
    );
  }

  if(error){
    return (
      <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl font-bold animate-pulse">Something Went Wrong</h1>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <Hero />

      {/* SEARCH BAR */}
        <div className="px-6 mt-10 h-24">
          <SearchBar />
        </div>

      {/* CATEGORY GRID */}     

      <div className="max-w-7xl mx-auto px-6 py-12">

          <h2 className="text-3xl font-bold mb-10 text-gray-800" id="recipe-categories">Recipe Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {
            
                data?.categories?.map((category: Category) => (

                  <Link key={category.idCategory} to={`category/${category.strCategory}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:translate-y-2 cursor-pointer">

                      {/* IMAGE */}
                      <div className="relative">
                          <img className="w-full h-56 object-cover" src={category.strCategoryThumb} alt={category.strCategory} />

                          <div className="absolute inset-0 bg-black/20"></div>

                      </div>

                      {/* CONTENT */}
                      <div className="p-5">
                            <h2  className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 text-center">{category.strCategory}</h2>                             
                      </div>
                  </Link>
                ))
              }
          </div>
      </div>

    </div>
  );
};

export default Home;
