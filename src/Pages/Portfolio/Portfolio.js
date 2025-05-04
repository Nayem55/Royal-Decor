import React from "react";

const portfolioImages = [
  {
    url: "https://st.hzcdn.com/simgs/pictures/basements/stone-wine-cellars-hx-home-solutions-and-north-star-stone-img~584162630fe345b2_9-3634-1-78d82ed.jpg",
    category: "Home Decor",
  },
  {
    url: "https://st.hzcdn.com/simgs/be61aad90d46f537_4-9179/home-design.jpg",
    category: "Home Decor",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnlj-vCbzAPw5T6AXgrFe_5yaFN212O36TQ&s",
    category: "Home Decor",
  },
  {
    url: "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-1080x675.jpg",
    category: "Interior Design",
  },
  {
    url: "https://img.money.com/2021/11/Mortgage-If-You-Stage-One-Room-In-Your-House-Make-It-This-One.jpg",
    category: "Home Decor",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bFVL5UnfZVQzXevLqoMa_khg9w3_Gr5Png&s",
    category: "Home Decor",
  },

  {
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg",
    category: "Interior Design",
  },
  {
    url: "https://media.designcafe.com/wp-content/uploads/2022/07/15170350/luxury-home-design-on-budget.jpg",
    category: "Interior Design",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjfk-oLCG_mFuXC_CxVkI-f-Lu0fLESmoJMw&s",
    category: "Interior Design",
  },
  {
    url: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202207/10-best-tips-on-budget-friendly-home-interior-designs/title-living-room-designs-indian-style-low-budget.jpg.transform/bh-tb-image-container/image.webp",
    category: "Interior Design",
  },
  {
    url: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
    category: "Home Decor",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2100&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            A showcase of our premium home staging and interior styling
            projects.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Design Inspirations
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {portfolioImages.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md break-inside-avoid group`}
            >
              <img
                src={item.url}
                alt={`Portfolio ${index + 1}`}
                className="w-full object-cover rounded-xl transition-all duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded text-sm text-white font-semibold">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
