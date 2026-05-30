const RecipeDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 animate-pulse">

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* IMAGE SKELETON */}
            <div className="w-full h-100 bg-gray-300"></div>

            {/* CONTENT */}
            <div className="p-8">

                {/* TITLE */}
                <div className="h-10 w-2/3 bg-gray-300 rounded mb-6"></div>

                {/* CATEGORY + AREA */}
                <div className="flex gap-4 mb-8">

                    <div className="h-10 w-32 bg-gray-300 rounded-full"></div>

                    <div className="h-10 w-32 bg-gray-300 rounded-full"></div>

                </div>

                {/* INGREDIENTS */}
                <div className="mb-10">

                    <div className="h-8 w-40 bg-gray-300 rounded mb-6"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        {
                            Array.from({length: 6}).map((_, index) => (

                                <div key={index} className="h-12 bg-gray-200 rounded-lg"></div>

                            ))
                        }

                    </div>

                </div>

                {/* INGREDIENTS */}
                <div className="mb-10">

                    <div className="h-8 w-40 bg-gray-300 rounded mb-6"></div>

                    <div className="space-y-3">

                        <div className="h-4 bg-gray-200 rounded"></div>

                        <div className="h-4 bg-gray-200 rounded"></div>

                        <div className="h-4 bg-gray-200 rounded"></div>

                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                    </div>

                </div>

                {/* BUTTON */}
                <div className="h-12 w-48 bg-gray-300 rounded-lg"></div>

            </div>

        </div>
      
    </div>
  );
};

export default RecipeDetailSkeleton;
