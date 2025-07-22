export default function Services() {
  const services = [
    {
      number: "01",
      title: "Brand Identity",
      description: "Creating distinctive brand identities that capture your essence and resonate with your audience."
    },
    {
      number: "02",
      title: "Web Design",
      description: "Crafting responsive, user-friendly websites that deliver exceptional digital experiences."
    },
    {
      number: "03",
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that prioritize user experience and drive engagement."
    },
    {
      number: "04",
      title: "Digital Strategy",
      description: "Developing comprehensive digital strategies that align with your business objectives."
    },
    {
      number: "05",
      title: "Motion Graphics",
      description: "Creating compelling motion graphics and animations that bring your stories to life."
    },
    {
      number: "06",
      title: "Consulting",
      description: "Providing expert guidance to help you make informed design and business decisions."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center">OUR SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer border border-gray-200"
            >
              <div className="w-16 h-16 bg-accent-orange mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:bg-white group-hover:text-black transition-colors duration-300">
                {service.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
