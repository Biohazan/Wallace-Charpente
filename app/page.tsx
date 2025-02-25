import { Hammer, Ruler, Shield, TreePine, Clock, Phone } from 'lucide-react'
import carpenterBg from '@/public/charpentierBackGround.webp'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7f2] font-playwrite_IT_Moderna">
      {/* Hero Section */}
      <header className="relative h-[90vh]">
        <Image
          src={carpenterBg}
          className="absolute inset-0 w-full object-cover object-bottom"
          alt="Charpentier sur un toit"
          fill
          quality={100}
        ></Image>
        <div className="absolute inset-0 bg-black/20 "></div>

        <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12 bg-secondary">
          <div className="flex items-center space-x-2 text-primary">
            <Hammer className="h-8 w-8" />
            <span className="text-2xl font-bold font-bungee">Wallace Charpente</span>
          </div>
          <div className="hidden md:flex space-x-8 text-primary">
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

        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="absolute top-[5vw]  right-[4vw] ml-[3vw] text-center text-amber-950  rounded-sm rounded-bl-3xl rounded-tr-3xl px-14 pt-4">
            <h1 className={`text-3xl md:text-5xl font-extrabold mb-6 font-bungee underline underline-offset-8 `}>
              Notre expertise au service de votre toiture
            </h1>
            <p className="text-lg md:text-2xl font-medium font-sans mb-2">
              Votre Charpentier, Couvreur, Zingueur en Isère (38), Rhone (69)
            </p>
            <p className="text-lg md:text-2xl font-medium font-sans mb-8">
              Nous intervenons partout, ici et ailleurs...
            </p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-12 px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-[#2c1810] mb-16">
          Nos Services
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              icon: <TreePine className="h-12 w-12" />,
              title: 'Sarking',
              desc: 'Isolation de votre maison par la toiture',
              image: '/saul.png',
            },
            {
              icon: <Ruler className="h-12 w-12" />,
              title: 'Zinguerie',
              desc: 'Abergement de cheminée, noues et caniveaux.',
              image: '/zinguerie.webp',
            },
            {
              icon: <Shield className="h-12 w-12" />,
              title: 'Charpente',
              desc: 'Construction ou rénovation de votre charpente',
              image: '/charpentierBackGround.webp',
            },
            {
              icon: <Shield className="h-12 w-12" />,
              title: 'Couverture',
              desc: 'Construction ou rénovation de votre toiture',
              image: '/couverture.jpg',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="relative h-56 w-full lg:w-2/5 p-8 overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              {service?.image && (
                <Image
                  src={service.image}
                  className="absolute opacity-50 object-cover group-hover:scale-110 group-hover:opacity-100 transition duration-300"
                  alt="Cover Image"
                  fill
                  quality={70}
                />
              )}

              {/* <div className="absolute inset-0 bg-white/70 z-10"></div> */}
              <div className="absolute flex flex-col w-full text-center p-6 top-24 left-0 group-hover:opacity-0 transition duration-300">
                {/* <div className="text-[#6b4423] mb-4">{service.icon}</div> */}
                <h3 className="text-2xl font-extrabold text-[#2c1810] mb-2 underline underline-offset-4">
                  {service.title}
                </h3>
                <p className="text-amber-950 font-bold bg-transparent">
                  {service.desc}
                </p>
              </div>
              <div className="hidden absolute bottom-4 left-0 w-full group-hover:flex justify-center">
                <p className="text-white bg-amber-900 rounded-lg px-4 py-2">
                  En savoir plus
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section id="portfolio" className="bg-[#e8efe5] py-20 px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-[#2c1810] mb-16">
          Nos différents projets
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
              <Image
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                width={100}
                height={100}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="bg-[#6b4423] text-white px-6 py-2 rounded">
                  Voir le projet
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
            Contactez nous
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-[#6b4423]">
                <Clock className="h-6 w-6" />
                <div>
                  <h3 className="font-bold">Horaires</h3>
                  <p>Lundi - Vendredi: 8:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-[#6b4423]">
                <Phone className="h-6 w-6" />
                <div>
                  <h3 className="font-bold">Téléphone</h3>
                  <a
                    href="tel:0612450688"
                  >
                    <p className=''>06 12 45 06 88</p>
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom - prenom"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4423]"
              />
              <input
                type="email"
                placeholder="Votre Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4423]"
              />
              <textarea
                placeholder="Votre Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4423]"
              ></textarea>
              <button className="w-full bg-[#6b4423] hover:bg-[#8b5931] text-white px-6 py-3 rounded transition duration-300">
                Envoyer
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
