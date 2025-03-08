export default function Product() {
  const products = [
    {
      src: "/product-1.png",
      title: "Product 1",
      desc: "desc for product 1.",
    },
    {
      src: "/product-2.png",
      title: "Product 2",
      desc: "desc for product 2.",
    },
    {
      src: "/product-3.png",
      title: "Product 3",
      desc: "desc for product 3.",
    },
    {
      src: "/product-4.png",
      title: "Product 4",
      desc: "desc for product 4.",
    },
  ];

  return (
    <div className="p-4 mt-5">
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={product.title}
            className={`flex items-center gap-4
              ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"} 
              sm:flex-row lg:flex-col lg:items-center`}
          >
            <img
              src={product.src}
              alt={product.title}
              className="w-32 sm:w-48 md:w-64 rounded-md"
            />

            <div className="text-[#644040] ">
              <h2 className="font-semibold">{product.title}</h2>
              <p className="font-light">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
