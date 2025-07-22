export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Brand Identity System",
      category: "Branding & Visual Identity",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
      size: "large"
    },
    {
      title: "Digital Platform",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      size: "small"
    },
    {
      title: "E-commerce Site",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      size: "small"
    },
    {
      title: "App Design",
      category: "Mobile UI",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      size: "medium"
    },
    {
      title: "Brand Strategy",
      category: "Consulting",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      size: "medium"
    },
    {
      title: "Website Redesign",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      size: "medium"
    },
    {
      title: "Visual Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      size: "medium"
    },
    {
      title: "Creative Direction",
      category: "Art Direction",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      size: "tall"
    },
    {
      title: "Digital Experience",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      size: "wide"
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center">FEATURED WORK</h2>

        {/* Main Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Large Featured Project */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] hover:shadow-2xl transition-all duration-500">
              <img
                src={portfolioItems[0].image}
                alt={portfolioItems[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{portfolioItems[0].title}</h3>
                <p className="text-lg opacity-90">{portfolioItems[0].category}</p>
              </div>
            </div>
          </div>

          {/* Side Projects */}
          <div className="lg:col-span-4 space-y-6">
            {portfolioItems.slice(1, 3).map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-100 aspect-square hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portfolioItems.slice(3, 7).map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] hover:shadow-xl transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Asymmetric Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] hover:shadow-xl transition-all duration-500">
              <img
                src={portfolioItems[7].image}
                alt={portfolioItems[7].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-xl font-bold mb-1">{portfolioItems[7].title}</h4>
                <p className="text-sm">{portfolioItems[7].category}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-[16/9] hover:shadow-xl transition-all duration-500">
              <img
                src={portfolioItems[8].image}
                alt={portfolioItems[8].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-1">{portfolioItems[8].title}</h4>
                <p className="text-lg">{portfolioItems[8].category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
