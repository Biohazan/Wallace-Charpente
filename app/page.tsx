import { Hammer, Ruler, Shield, TreePine, Clock, Phone } from 'lucide-react'

import carpenterBg from '@/public/charpentierBackGround.webp'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7f2]">
      {/* Hero Section */}
      <header className="relative h-screen">
        <Image
          src={carpenterBg}
          className="absolute inset-0 h-screen w-full bg-cover bg-center"
          alt="Charpentier sur un toit"
          layout="fill"
          objectFit="cover"
          quality={100}
          // style={{
          //   backgroundImage: carpenterBg,
          // }}
        ></Image>
        <div className="absolute inset-0 bg-black/40"></div>

        <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center space-x-2 text-white">
            <Hammer className="h-8 w-8" />
            <span className="text-2xl font-bold">Wallace Charpente</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#services" className="hover:text-[#a8c69f]">
              Services
            </a>
            <a href="#about" className="hover:text-[#a8c69f]">
              A Propos
            </a>
            <a href="#portfolio" className="hover:text-[#a8c69f]">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-[#a8c69f]">
              Contact
            </a>
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Crafting Excellence in Wood
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Custom carpentry solutions with attention to detail
            </p>
            <button className="bg-[#6b4423] hover:bg-[#8b5931] text-white px-8 py-3 rounded-lg text-lg transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-[#2c1810] mb-16">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <TreePine className="h-12 w-12" />,
              title: 'Custom Furniture',
              desc: 'Bespoke pieces tailored to your space',
            },
            {
              icon: <Ruler className="h-12 w-12" />,
              title: 'Home Renovation',
              desc: 'Complete woodwork solutions for your home',
            },
            {
              icon: <Shield className="h-12 w-12" />,
              title: 'Restoration',
              desc: 'Bringing old wood back to life',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-[#6b4423] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section id="portfolio" className="bg-[#e8efe5] py-20 px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-[#2c1810] mb-16">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80',
          ].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="bg-[#6b4423] text-white px-6 py-2 rounded">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-4xl font-bold text-center text-[#2c1810] mb-8">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-[#6b4423]">
                <Clock className="h-6 w-6" />
                <div>
                  <h3 className="font-bold">Working Hours</h3>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-[#6b4423]">
                <Phone className="h-6 w-6" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4423]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4423]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4423]"
              ></textarea>
              <button className="w-full bg-[#6b4423] hover:bg-[#8b5931] text-white px-6 py-3 rounded transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white py-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Hammer className="h-6 w-6" />
            <span className="text-xl font-bold">Wallace Charpente</span>
          </div>
          <div className="text-center md:text-right">
            <p>© 2024 Wallace Charpente. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
