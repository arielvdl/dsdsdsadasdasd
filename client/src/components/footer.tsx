export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black mb-4">FANCY</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A creative design studio focused on crafting exceptional digital experiences that make a lasting impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors">
                Behance
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors">
                Dribbble
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fancy Design Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
