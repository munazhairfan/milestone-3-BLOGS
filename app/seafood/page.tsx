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
    "https://www.themealdb.com/api/json/v1/1/search.php?s=fish"
  );
  const data = await response.json();
  const seafood: Meal[] = data.meals;

  const response2 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=salmon"
  );
  const data2 = await response2.json();
  const seafood2: Meal[] = data2.meals;

  const response3 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=prawn"
  );
  const data3 = await response3.json();
  const seafood3: Meal[] = data3.meals;
  return (
    <div>
      <h1 className="lg:text-8xl text-center font-dancing mb-4 mt-4 xs:text-6xl">Seafood</h1>
      {seafood.map((food) => {
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
      {seafood2.map((food) => {
        return (
          <div className="py-8 flex flex-wrap md:flex-nowrap"
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
      {seafood3.map((food) => {
        return (
          <div className="py-8 flex flex-wrap md:flex-nowrap"
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