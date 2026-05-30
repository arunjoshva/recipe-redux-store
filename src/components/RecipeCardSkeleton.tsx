const RecipeCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">

        {/* IMAGE SKELETON */}
        <div className="w-full h-56 bg-gray-300"></div>

        {/* CONTENT */}
        <div className="p-5">

            {/* TITLE */}
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>

            {/* BUTTON */}
            <div className="h-10 bg-gray-200 rounded"></div>

        </div>
        
    </div>
  );
};

export default RecipeCardSkeleton;
