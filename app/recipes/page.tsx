import React from "react";
import Image from "next/image";
import Link from "next/link";           

interface Meal {
  idMeal: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strArea:string;
}

// Function to fetch meals by category
async function fetchMealsByCategory(category: string) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  // const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`);
  const data = await res.json();
  return data.meals // Ensure we return an empty array if no meals are found
}

const Page = async () => {
  // Define the categories
  const categories = ["Seafood", "Beef", "Chicken", "Pasta", "Side", "Dessert"];

  // Object to hold the meals for each category
  const categoryMeals: { [key: string]: Meal[] } = {};

  // Fetch meals for each category (up to 3 meals per category)
  for (const category of categories) {
    const meals = await fetchMealsByCategory(category);
    categoryMeals[category] = meals.slice(0, 3); // Limit to 3 meals if more are returned
  }

  return (
    <div className="">
      {/* Display meals for each category */}
      {Object.entries(categoryMeals).map(([category, meals]) => (
        <div key={category}>
          <h1 className="xl:text-8xl text-center font-dancing mb-4 mt-4 xs:text-4xl md:text-5xl">{category}</h1>
          <div className="flex justify-around">
            <div className="flex xs:flex-col xs:px-12 md:flex-row md:p-0 lg:w-full lg:justify-around">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={meal.idMeal}>
              <Link href={meal.idMeal}>
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image src={meal.strMealThumb} alt={meal.strMeal} width={330} height={300} className="rounded-md"></Image>
          <h2 className="lg:text-3xl text-center mt-4 font-serif text-gray-900 font-medium title-font mb-4
          xs:text-xl">{meal.strMeal}</h2>
        </div>
      </Link> 
      </div>  
          ))
        ) : (
          <p>No meals found for {category}.</p>
        )}
        </div>  
        </div>
        <div className="w-full flex justify-center items-start h-28 border-b-8">
          <Link href={`../${category.toLocaleLowerCase()}`}>
        <button className="border-2 border-slate-600 h-10 rounded-md bg-slate-200 px-6
        text-xl">View All {category} recipes</button>
        </Link>
        </div>
        </div>
      ))}
    </div>
  );
};
export default Page;

