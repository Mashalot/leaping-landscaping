export default function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      title: '5-Star Rated',
      description: 'Trusted by hundreds of satisfied customers in Toronto with excellent reviews.',
      icon: '⭐',
    },
    {
      id: 2,
      title: 'Professional Team',
      description: 'Experienced landscapers with years of expertise in garden and hardscape design.',
      icon: '👥',
    },
    {
      id: 3,
      title: 'Custom Solutions',
      description: 'Personalized designs tailored to your budget, style, and property needs.',
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Quality Materials',
      description: 'We use premium, durable materials that stand the test of time.',
      icon: '✨',
    },
    {
      id: 5,
      title: 'Timely Completion',
      description: 'Projects completed on schedule and within agreed budget parameters.',
      icon: '⏰',
    },
    {
      id: 6,
      title: 'Ongoing Support',
      description: 'Maintenance packages and support to keep your landscape looking beautiful.',
      icon: '🤝',
    },
  ]

  return (
    <section id="why-us" className="py-20 md:py-28 bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Leaping Landscaping?</h2>
          <p className="section-subtitle">
            We're committed to delivering exceptional landscaping services that exceed your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Your Landscape Transformation Partner
              </h3>
              <p className="text-gray-600 mb-4">
                At Leaping Landscaping LLC, we believe that your outdoor space is an extension of your home. We take pride in every project, large or small, and work closely with our clients to bring their vision to life.
              </p>
              <p className="text-gray-600 mb-6">
                With a commitment to excellence, sustainable practices, and customer satisfaction, we're the trusted choice for landscaping in Toronto.
              </p>
              <a href="#contact" className="btn-primary inline-block">
                Start Your Project Today
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-light rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <p className="text-gray-700 font-semibold">Projects Completed</p>
              </div>
              <div className="bg-light rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <p className="text-gray-700 font-semibold">Years Experience</p>
              </div>
              <div className="bg-light rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Satisfaction Guaranteed</p>
              </div>
              <div className="bg-light rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <p className="text-gray-700 font-semibold">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
