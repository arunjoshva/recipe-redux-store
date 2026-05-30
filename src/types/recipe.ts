export interface Meal{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;

    strCategory?: string;
    strArea?: string;
    strInstructions: string;
    strYoutube: string;

    [key: string]: any;
}

export interface Category{
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface MealsResponse{
    meals: Meal[] | null;
}

export interface CategoryResponse{
    categories: Category[];
}