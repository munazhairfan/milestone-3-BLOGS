<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Meal {
  idMeal: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
}
const Page = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );
  const data = await response.json();
  const chicken: Meal[] = data.meals;

  return (
    <div>
      <h1 className="lg:text-8xl text-center font-dancing mb-4 mt-4 xs:text-6xl">Chicken</h1>
      {chicken.map((food) => {
        return (
          <div className="py-8 flex flex-wrap md:flex-nowrap justify-center"
          key={food.idMeal}>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col xs:size-80">
              <Image
                src={food.strMealThumb}
                alt={food.idMeal}
                height={400}
                width={400}
              ></Image>
            </div>
            <div className="md:flex-grow ml-5">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {food.strMeal}
              </h2>
              <p className="leading-relaxed">{food.strInstructions.slice(0,500)}......</p>
              <Link href={food.idMeal} className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
=======
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Meal {
  idMeal: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
}
const Page = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );
  const data = await response.json();
  const chicken: Meal[] = data.meals;

  return (
    <div>
      <h1 className="text-8xl text-center font-dancing mb-4 mt-4">Chicken</h1>
      {chicken.map((food) => {
        return (
          <div className="py-8 flex flex-wrap md:flex-nowrap" key={food.idMeal}>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <Image
                src={food.strMealThumb}
                alt={food.idMeal}
                height={400}
                width={400}
              ></Image>
            </div>
            <div className="md:flex-grow ml-5">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {food.strMeal}
              </h2>
              <p className="leading-relaxed">{food.strInstructions.slice(0,500)}......</p>
              <Link href={food.idMeal} className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
>>>>>>> 6865bc71177856998400ac204b551de6417b1b0a
