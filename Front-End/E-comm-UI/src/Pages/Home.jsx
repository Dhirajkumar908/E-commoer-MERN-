import Header from "../components/Header";
import Carousel from "../components/Carousel";
import ProductGrid from "../components/ProductGrid";
import NewLaunchSection from "../components/NewLaunchSection";
import Reviews from "../components/Reviews";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="px-6">
        <Header />
        <div className="px-6">
          <Breadcrumb/>
          <Carousel />
          <ProductGrid />
          <NewLaunchSection />
          <Reviews />
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;


function Breadcrumb(){
    return (
        <>
        <div className="text-sm text-gray-400 p-4">
            home &gt; shop &gt; bag

        </div>
        </>
    )
}