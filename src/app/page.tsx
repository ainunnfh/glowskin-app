import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col w-full lg:px-14 ">
        <img
          src="/glowingskin-banner.png"
          alt="banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}
