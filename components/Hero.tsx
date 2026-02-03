export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary to-dark py-20 md:py-32 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-secondary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Outdoor Space
            </h1>
            <p className="text-lg text-gray-100">
              Professional landscaping services in Toronto. From garden design to hardscaping and maintenance, we create beautiful outdoor spaces that enhance your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="btn-primary bg-secondary hover:bg-opacity-90"
              >
                Get Your Free Quote
              </a>
              <a
                href="#services"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex text-yellow-400">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-200">5-Star Rated | Trusted by Toronto Homeowners</p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative h-96 md:h-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-green-600 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-32 h-32 text-white opacity-80 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-white text-xl font-semibold">Beautiful Landscaping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
