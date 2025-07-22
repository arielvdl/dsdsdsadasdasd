export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl sm:text-6xl font-black mb-8 leading-tight">
              WE CREATE<br />
              <span className="text-accent-orange">BEAUTIFUL</span><br />
              EXPERIENCES
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team of passionate designers and developers work collaboratively to bring your vision to life.
              We believe in the power of thoughtful design to transform businesses and create meaningful connections.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-accent-orange mb-2">150+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-accent-orange mb-2">50+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
              alt="Creative design team collaboration"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent-orange text-white p-6 rounded-lg">
              <p className="font-semibold">Award Winning</p>
              <p className="text-sm">Design Studio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
