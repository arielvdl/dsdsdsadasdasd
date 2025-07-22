export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6 animate-fade-in">
            CREATIVE<br />
            <span className="text-accent-orange">DESIGN</span><br />
            STUDIO
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            We craft exceptional digital experiences that push boundaries and create lasting impressions.
          </p>
        </div>

        <div className="flex justify-center animate-slide-up">
          <button
            onClick={scrollToWork}
            className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-accent-orange transition-all duration-300 transform hover:scale-105"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
