import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Meal {
  idMeal: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
}
const Page = async () => {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let data = await response.json();
  let myfood: Meal[] = data.meals;

  let response2 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=pasta"
  );
  let data2 = await response2.json();
  let myfood2: Meal[] = data2.meals;

  let response3 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=banana"
  );
  let data3 = await response3.json();
  let myfood3: Meal[] = data3.meals;

  let response4 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=shrimp"
  );
  let data4 = await response4.json();
  let myfood4: Meal[] = data4.meals;

  return (
    <div>
      <Image src={'/hero-image.jpg'} alt='hero images' width={2000} height={500}
      className='border-b-8 border-dashed border-black'></Image>
      <h4 className="text-8xl text-center font-dancing mb-4 mt-28">Recently Updated</h4>
      <div className='flex w-full justify-around'>
      {
        myfood.slice(0,3).map((food)=>{
          return(
            <div className="xl:w-1/4 md:w-1/2 p-4" key={food.idMeal}>
              <Link href={food.idMeal}>
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image src={food.strMealThumb} alt={food.strMeal} width={330} height={300} className="rounded-md"></Image>
          <h2 className="text-3xl text-center mt-4 font-serif text-gray-900 font-medium title-font mb-4">{food.strMeal}</h2>
        </div>
      </Link> 
      </div> 
          )
        })
      }
    </div>
    <h4 className="text-8xl text-center font-dancing mb-4 mt-28">Find Recipes for....</h4>
    <div className='flex w-full justify-around'>
      {
        myfood2.slice(0,3).map((food)=>{
          return(
            <div className="xl:w-1/4 md:w-1/2 p-4 rounded-full" key={food.idMeal}>
              <Link href={food.idMeal}>
        <div className="bg-gray-100 p-6 rounded-full">
          <Image src={food.strMealThumb} alt={food.strMeal} width={330} height={300} className="rounded-full"></Image>
        </div>
          <h2 className="text-3xl text-center mt-4 font-serif text-gray-900 font-medium title-font mb-4">{food.strMeal}</h2>
      </Link> 
      </div> 
          )
        })
      }
      {
        myfood3.slice(0,3).map((food)=>{
          return(
            <div className="xl:w-1/4 md:w-1/2 p-4 rounded-full" key={food.idMeal}>
              <Link href={food.idMeal}>
        <div className="bg-gray-100 p-6 rounded-full">
          <Image src={food.strMealThumb} alt={food.strMeal} width={330} height={300} className="rounded-full"></Image>
        </div>
          <h2 className="text-3xl text-center mt-4 font-serif text-gray-900 font-medium title-font mb-4">{food.strMeal}</h2>
      </Link> 
      </div> 
          )
        })
      }
      {
        myfood4.slice(0,3).map((food)=>{
          return(
            <div className="xl:w-1/4 md:w-1/2 p-4 rounded-full" key={food.idMeal}>
              <Link href={food.idMeal}>
        <div className="bg-gray-100 p-6 rounded-full">
          <Image src={food.strMealThumb} alt={food.strMeal} width={330} height={300} className="rounded-full"></Image>
        </div>
          <h2 className="text-3xl text-center mt-4 font-serif text-gray-900 font-medium title-font mb-4">{food.strMeal}</h2>
      </Link> 
      </div> 
          )
        })
      }
    </div>
    </div>
  )
}

export default Page
