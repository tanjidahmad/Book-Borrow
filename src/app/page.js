
import Banner from "@/components/Banner";
import BooksMarquee from "@/components/BooksMarquee";
import PopularCategories from "@/components/PopularCategories";
import TopGenerations from "@/components/TopGenerations";
import WhyChooseUs from "@/components/WhyChooseUs";


async function getBooks() {
  const res = await fetch("https://book-borrow-delta.vercel.app/data.json", {
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

      
    </div>
  );
}
