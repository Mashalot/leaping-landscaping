import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  )
}
