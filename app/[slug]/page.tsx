<<<<<<< HEAD
// import React from 'react'
// import { useParams } from 'next/navigation'
// import Image from 'next/image'

// interface Meal {
//   idMeal: string;
//   strInstructions: string;
//   strMeal: string;
//   strMealThumb: string;
//   strArea: string;
//   strIngredient1: string | null;
//   strIngredient2: string | null;
//   strIngredient3: string | null;
//   strIngredient4: string | null;
//   strIngredient5: string | null;
//   strIngredient6: string | null;
//   strIngredient7: string | null;
//   strIngredient8: string | null;
//   strIngredient9: string | null;
//   strIngredient10: string | null;
//   strIngredient11: string | null;
//   strIngredient12: string | null;
//   strIngredient13: string | null;
//   strIngredient14: string | null;
//   strIngredient15: string | null;
//   strIngredient16: string | null;
//   strIngredient17: string | null;
//   strIngredient18: string | null;
//   strIngredient19: string | null;
//   strIngredient20: string | null;
// }

// const Page = async() => {
//   const {slug} = useParams();
//   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`)
//   const data = await response.json();
//   const food:Meal[] = data.meals;

//   return (
//     <div>
//       {
//         food.map((myfood)=>{
//           return(
//             <section className="text-gray-600 body-font" key={myfood.idMeal}>
//   <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
//   <Image
//         className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
//         alt={myfood.strMeal}
//         src={myfood.strMealThumb}
//         width={720}
//         height={600}
//       />
//     {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
//     <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{myfood.strMeal}</h1>
//       <p className='text-xl text-black font-semibold underline'> INGREDIENTS:</p>
//       <p>{myfood.strIngredient1 && <span>{myfood.strIngredient1}<br /></span>}
//               {myfood.strIngredient2 && <span>{myfood.strIngredient2}<br /></span>}
//               {myfood.strIngredient3 && <span>{myfood.strIngredient3}<br /></span>}
//               {myfood.strIngredient4 && <span>{myfood.strIngredient4}<br /></span>}
//               {myfood.strIngredient5 && <span>{myfood.strIngredient5}<br /></span>}
//               {myfood.strIngredient6 && <span>{myfood.strIngredient6}<br /></span>}
//               {myfood.strIngredient7 && <span>{myfood.strIngredient7}<br /></span>}
//               {myfood.strIngredient8 && <span>{myfood.strIngredient8}<br /></span>}
//               {myfood.strIngredient9 && <span>{myfood.strIngredient9}<br /></span>}
//               {myfood.strIngredient10 && <span>{myfood.strIngredient10}<br /></span>}
//               {myfood.strIngredient11 && <span>{myfood.strIngredient11}<br /></span>}
//               {myfood.strIngredient12 && <span>{myfood.strIngredient12}<br /></span>}
//               {myfood.strIngredient13 && <span>{myfood.strIngredient13}<br /></span>}
//               {myfood.strIngredient14 && <span>{myfood.strIngredient14}<br /></span>}
//               {myfood.strIngredient15 && <span>{myfood.strIngredient15}<br /></span>}
//               {myfood.strIngredient16 && <span>{myfood.strIngredient16}<br /></span>}
//               {myfood.strIngredient17 && <span>{myfood.strIngredient17}<br /></span>}
//               {myfood.strIngredient18 && <span>{myfood.strIngredient18}<br /></span>}
//               {myfood.strIngredient19 && <span>{myfood.strIngredient19}<br /></span>}
//               {myfood.strIngredient20 && <span>{myfood.strIngredient20}<br /></span>}
//       </p>
//       <p className='text-xl text-black font-semibold underline mt-5'>RECIPE:</p>
//       <p className="mb-8 leading-relaxed text-xl">{myfood.strInstructions}</p>

      
//     </div>
//   </div>
// </section>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default Page

import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Meal {
  idMeal: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
}

async function getMealData(slug: string): Promise<Meal | null> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`);
    if (!response.ok) {
      return null; // If response is not ok, return null
    }
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
}

const MealPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch the data for the meal based on the slug
  const food = await getMealData(slug);

  if (!food) {
    notFound(); // If no food data found, show 404 page
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt={food.strMeal}
            src={food.strMealThumb}
            width={720}
            height={600}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {food.strMeal}
            </h1>
            <p className="text-xl text-black font-semibold underline"> INGREDIENTS:</p>
            <div>
              {food.strIngredient1 && <span>{food.strIngredient1}<br /></span>}
              {food.strIngredient2 && <span>{food.strIngredient2}<br /></span>}
              {food.strIngredient3 && <span>{food.strIngredient3}<br /></span>}
              {food.strIngredient4 && <span>{food.strIngredient4}<br /></span>}
              {food.strIngredient5 && <span>{food.strIngredient5}<br /></span>}
              {food.strIngredient6 && <span>{food.strIngredient6}<br /></span>}
              {food.strIngredient7 && <span>{food.strIngredient7}<br /></span>}
              {food.strIngredient8 && <span>{food.strIngredient8}<br /></span>}
              {food.strIngredient9 && <span>{food.strIngredient9}<br /></span>}
              {food.strIngredient10 && <span>{food.strIngredient10}<br /></span>}
              {food.strIngredient11 && <span>{food.strIngredient11}<br /></span>}
              {food.strIngredient12 && <span>{food.strIngredient12}<br /></span>}
              {food.strIngredient13 && <span>{food.strIngredient13}<br /></span>}
              {food.strIngredient14 && <span>{food.strIngredient14}<br /></span>}
              {food.strIngredient15 && <span>{food.strIngredient15}<br /></span>}
              {food.strIngredient16 && <span>{food.strIngredient16}<br /></span>}
              {food.strIngredient17 && <span>{food.strIngredient17}<br /></span>}
              {food.strIngredient18 && <span>{food.strIngredient18}<br /></span>}
              {food.strIngredient19 && <span>{food.strIngredient19}<br /></span>}
              {food.strIngredient20 && <span>{food.strIngredient20}<br /></span>}
            </div>
            <p className="text-xl text-black font-semibold underline mt-5">RECIPE:</p>
            <p className="mb-8 leading-relaxed text-xl">{food.strInstructions}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealPage;
=======
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Meal {
  idMeal: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
}

async function getMealData(slug: string): Promise<Meal | null> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`);
    if (!response.ok) {
      return null; // If response is not ok, return null
    }
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
}

const MealPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch the data for the meal based on the slug
  const food = await getMealData(slug);

  if (!food) {
    notFound(); // If no food data found, show 404 page
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt={food.strMeal}
            src={food.strMealThumb}
            width={720}
            height={600}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {food.strMeal}
            </h1>
            <p className="text-xl text-black font-semibold underline"> INGREDIENTS:</p>
            <div>
              {food.strIngredient1 && <span>{food.strIngredient1}<br /></span>}
              {food.strIngredient2 && <span>{food.strIngredient2}<br /></span>}
              {food.strIngredient3 && <span>{food.strIngredient3}<br /></span>}
              {food.strIngredient4 && <span>{food.strIngredient4}<br /></span>}
              {food.strIngredient5 && <span>{food.strIngredient5}<br /></span>}
              {food.strIngredient6 && <span>{food.strIngredient6}<br /></span>}
              {food.strIngredient7 && <span>{food.strIngredient7}<br /></span>}
              {food.strIngredient8 && <span>{food.strIngredient8}<br /></span>}
              {food.strIngredient9 && <span>{food.strIngredient9}<br /></span>}
              {food.strIngredient10 && <span>{food.strIngredient10}<br /></span>}
              {food.strIngredient11 && <span>{food.strIngredient11}<br /></span>}
              {food.strIngredient12 && <span>{food.strIngredient12}<br /></span>}
              {food.strIngredient13 && <span>{food.strIngredient13}<br /></span>}
              {food.strIngredient14 && <span>{food.strIngredient14}<br /></span>}
              {food.strIngredient15 && <span>{food.strIngredient15}<br /></span>}
              {food.strIngredient16 && <span>{food.strIngredient16}<br /></span>}
              {food.strIngredient17 && <span>{food.strIngredient17}<br /></span>}
              {food.strIngredient18 && <span>{food.strIngredient18}<br /></span>}
              {food.strIngredient19 && <span>{food.strIngredient19}<br /></span>}
              {food.strIngredient20 && <span>{food.strIngredient20}<br /></span>}
            </div>
            <p className="text-xl text-black font-semibold underline mt-5">RECIPE:</p>
            <p className="mb-8 leading-relaxed text-xl">{food.strInstructions}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealPage;
>>>>>>> 6865bc71177856998400ac204b551de6417b1b0a
