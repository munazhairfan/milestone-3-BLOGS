// import React from "react";
// import Image from "next/image";

// interface Meal {
//   idMeal: string;
//   strInstructions: string;
//   strMeal: string;
//   strMealThumb: string;
// }

// // Function to fetch meals for a given search query
// async function fetchMealsBySearch(query: string) {
//   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
// const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

//   const data = await res.json();
  
//   // Ensure we return only the meals array or an empty array if no meals are found
//   return Array.isArray(data.meals) ? data.meals.slice(0, 3) : [];
// }

// const Page = async () => {
//   // Categories for which we need to fetch meals
//   const categories = ["Seafood", "Beef", "Chicken", "Vegetarian", "Pasta", "Side", "Dessert"];

//   // Fetch meals for each category (up to 3 meals per category)
//   const categoryMeals: { [key: string]: Meal[] } = {};

//   // Loop through categories and fetch meals for each one
//   for (const category of categories) {
//     categoryMeals[category] = await fetchMealsBySearch(category);
//   }

//   return (
//     <div>
//       {/* Display meals for each category */}
//       {Object.entries(categoryMeals).map(([category, meals]) => (
//         <div key={category}>
//           <h1 className="text-8xl text-center font-dancing mb-4 mt-4">{category}</h1>
          
//           {/* Check if meals exist */}
//           {meals.length > 0 ? (
//             meals.map((meal) => (
//               <div className="py-8 flex flex-wrap md:flex-nowrap bg-slate-100" key={meal.idMeal}>
//                 <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                   <Image
//                     src={meal.strMealThumb}
//                     alt={meal.strMeal}
//                     width={400}
//                     height={400}
//                   />
//                 </div>
//                 <div className="md:flex-grow ml-5">
//                   <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
//                     {meal.strMeal}
//                   </h2>
//                   {/* Display instructions if available */}
//                   <p className="leading-relaxed">{meal.strInstructions || "No instructions available"}</p>
//                   <a className="text-green-500 inline-flex items-center mt-4">
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No meals found for {category}.</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;

          // <div className="py-8 flex flex-wrap md:flex-nowrap bg-slate-100" key={se.idMeal}>
      //       <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      //       <Image
      //             src={se.strMealThumb} // Path to your saved SVG file
      //             alt={se.strMeal}
      //             width={400} // Set your desired width
      //             height={400} // Set your desired height
      //           />
      //   </div>
      //       <div className="md:flex-grow ml-5">
      //         <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
      //           {se.strMeal}
      //         </h2>
      //         {recipe ? (
      //           <p className="leading-relaxed">{recipe.strInstructions}</p>
      //         ) : (
      //           <p className="leading-relaxed">No instructions available</p>
      //         )}
      //         <a className="text-green-500 inline-flex items-center mt-4">
      //           Learn More
      //         </a>
      //       </div>
      //     </div>
      //   );
      // })}
    //   <h1 className="text-8xl text-center font-dancing mb-4 mt-4">Beef</h1>
    //   <h1 className="text-8xl text-center font-dancing mb-4 mt-4">Chicken</h1>
    //   <h1 className="text-8xl text-center font-dancing mb-4 mt-4">Vegetarian</h1>
    //   <h1 className="text-8xl text-center font-dancing mb-4 mt-4">Pasta</h1>
    //   <h1 className="text-8xl text-center font-dancing mb-4 mt-4">Side Dish</h1>
    //   <h1 className="text-8xl text-center font-dancing mb-4 mt-4">Dessert</h1>
    // </div>


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

              // 
            //   <div className="py-8 flex flex-wrap md:flex-nowrap bg-slate-100" key={meal.idMeal}>
            //     <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            //       <Image
            //         src={meal.strMealThumb}
            //         alt={meal.strMeal}
            //         width={400}
            //         height={400}
            //       />
            //     </div>
            //     <div className="md:flex-grow ml-5">
            //       <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            //         {meal.strMeal}
            //       </h2>
            //       {/* <p className="leading-relaxed">{meal.strInstructions || "No instructions available"}</p> */}
            //       <a className="text-green-500 inline-flex items-center mt-4">
            //         Learn More
            //       </a>
            //     </div>
            //   </div>
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

