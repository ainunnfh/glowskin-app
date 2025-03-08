import Available from "./components/Available";
import BestProduct from "./components/BestProduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex w-full lg:px-14 ">
        <img
          src="/glowingskin-banner.png"
          alt="banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <Product />
      <BestProduct />
      <Available />
      <Footer />
    </>
  );
}
