const CategorySkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">

         {/* IMAGE SKELETON */}
         <div className="w-full h-56 bg-gray-300"></div>

        {/* CONTENT */}
        <div className="p-5 flex justify-center">

            {/* TITLE SKELETON */}
            <div className="h-6 w-32 bg-gray-300 rounded"></div>

        </div>         
      
    </div>
  );
};

export default CategorySkeleton;

