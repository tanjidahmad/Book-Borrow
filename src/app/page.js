// import Banner from "@/components/Banner";
// import TopGenerations from "@/components/TopGenerations";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div >
//       <Banner/>

//       <TopGenerations/>
   
//     </div>
//   );
// }


import Banner from "@/components/Banner";
import BooksMarquee from "@/components/BooksMarquee";
import PopularCategories from "@/components/PopularCategories";
import TopGenerations from "@/components/TopGenerations";
import WhyChooseUs from "@/components/WhyChooseUs";
// import CategoriesSection from "@/components/CategoriesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";

async function getBooks() {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const books = await getBooks();

  return (
    <div>
      <Banner />

      {/* Marquee */}
      <BooksMarquee books={books} />

      {/* Featured Books */}
             <TopGenerations/>

              <WhyChooseUs />
      <PopularCategories />

      {/* Extra Sections */}
      {/* <CategoriesSection />
      <TestimonialsSection /> */}
    </div>
  );
}
