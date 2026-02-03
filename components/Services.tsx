export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Garden Design',
      description: 'Custom garden designs tailored to your style and property. We create stunning landscapes that reflect your vision.',
      icon: '🌱',
      features: ['Site planning', 'Plant selection', 'Color schemes', 'Layout design'],
    },
    {
      id: 2,
      title: 'Hardscaping',
      description: 'Professional hardscape installation including patios, walkways, retaining walls, and outdoor structures.',
      icon: '🪨',
      features: ['Patio design', 'Retaining walls', 'Walkways', 'Drainage solutions'],
    },
    {
      id: 3,
      title: 'Maintenance',
      description: 'Ongoing lawn and garden maintenance to keep your outdoor space looking beautiful year-round.',
      icon: '🛠️',
      features: ['Lawn care', 'Pruning', 'Weeding', 'Seasonal cleanup'],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive landscaping solutions for your residential property
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-secondary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-block text-secondary font-semibold hover:text-primary transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
