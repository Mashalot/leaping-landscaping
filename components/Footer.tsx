export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-lg font-bold">Leaping Landscaping</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional landscaping services in Toronto, creating beautiful outdoor spaces.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Garden Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Hardscaping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="tel:+16478951812" className="hover:text-accent transition-colors">
                  (647) 895-1812
                </a>
              </li>
              <li>
                <a href="mailto:info@leapinglandscaping.com" className="hover:text-accent transition-colors">
                  info@leapinglandscaping.com
                </a>
              </li>
              <li>
                404 Spadina Rd<br />
                Toronto, ON M5P 2W2
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Leaping Landscaping LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
