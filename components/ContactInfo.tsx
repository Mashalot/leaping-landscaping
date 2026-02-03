import { MapPin, Phone, Mail, Star } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="bg-primary text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <MapPin size={48} className="inline-block" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-100">
              404 Spadina Rd<br />
              Toronto, ON M5P 2W2<br />
              Canada
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="mb-4">
              <Phone size={48} className="inline-block" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <a
              href="tel:+16478951812"
              className="text-gray-100 hover:text-accent transition-colors text-lg font-semibold"
            >
              (647) 895-1812
            </a>
            <p className="text-gray-300 mt-2">Mon-Fri: 8am - 6pm</p>
          </div>

          {/* Email */}
          <div className="text-center md:text-right">
            <div className="mb-4">
              <Mail size={48} className="inline-block" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <a
              href="mailto:info@leapinglandscaping.com"
              className="text-gray-100 hover:text-accent transition-colors"
            >
              info@leapinglandscaping.com
            </a>
            <p className="text-gray-300 mt-2">Response within 24 hours</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-12 pt-8 border-t border-gray-400 text-center">
          <div className="flex justify-center mb-3 gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="fill-current" />
            ))}
          </div>
          <p className="text-gray-200">5-Star Rated on Google</p>
          <p className="text-gray-300 text-sm mt-2">Trusted by hundreds of satisfied customers in Toronto</p>
        </div>
      </div>
    </section>
  )
}
