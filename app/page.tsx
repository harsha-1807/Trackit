import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { CardContainer } from "@/components/ui/3d-card";
import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";
import { TypewriterEffectSmooth1 } from "@/components/TypeWriteNav";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src={"/assets/icons/arrow-right.svg"}
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            {/* <h1 className="head-text">
              Unleash the Power of
              <span className="text-[#905DE8]"> Track It</span>
            </h1> */}
            <h1 className="head-text">
              <TypewriterEffectSmooth1 />
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text" id="trending">
          Trending
        </h2>
        <div className="flex flex-wrap justify-center gap-x-24 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
