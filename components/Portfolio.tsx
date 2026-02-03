export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Modern Patio Design',
      category: 'Hardscaping',
      description: 'Beautiful multi-level patio with integrated outdoor kitchen',
    },
    {
      id: 2,
      title: 'Residential Garden Transformation',
      category: 'Garden Design',
      description: 'Complete garden renovation with native plants and custom pathways',
    },
    {
      id: 3,
      title: 'Landscape Maintenance',
      category: 'Maintenance',
      description: 'Year-round care and seasonal updates for residential property',
    },
    {
      id: 4,
      title: 'Zen Garden Installation',
      category: 'Garden Design',
      description: 'Tranquil garden space with meditation area and water features',
    },
    {
      id: 5,
      title: 'Stone Retaining Wall',
      category: 'Hardscaping',
      description: 'Professional retaining wall installation with proper drainage',
    },
    {
      id: 6,
      title: 'Front Yard Curb Appeal',
      category: 'Garden Design',
      description: 'Enhanced front entrance with landscaping and modern design',
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Recent Work</h2>
          <p className="section-subtitle">
            Check out some of our recent landscaping projects in Toronto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-light"
            >
              {/* Image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-secondary to-accent flex items-center justify-center overflow-hidden">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto opacity-80 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm font-semibold">{project.category}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <span className="inline-block px-3 py-1 bg-accent bg-opacity-20 text-secondary rounded-full text-xs font-semibold">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  )
}
