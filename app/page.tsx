'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    const mailtoLink = `mailto:rootwebworks@gmail.com?subject=Portfolio Contact from ${data.name}&body=From: ${data.name}%0D%0AEmail: ${data.email}%0D%0A%0D%0A${data.message}`

    setTimeout(() => {
      window.location.href = mailtoLink
      setFormStatus('success')
      form.reset()
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-[#0A1929] text-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#00D9FF]">
            Root Webworks
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
            Carrie Farr - Software Engineer
          </h2>
          <p className="text-xl text-[#B0BEC5] mb-10 max-w-2xl mx-auto">
            Building scalable web applications with React and modern technologies
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 font-semibold transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-[#00D9FF] text-[#00D9FF] rounded-lg hover:bg-[#00D9FF]/10 transition-all duration-300 font-semibold transform hover:-translate-y-1"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/carrielfarr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B0BEC5] hover:text-[#00D9FF] transition-colors duration-300 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/clfarr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B0BEC5] hover:text-[#00D9FF] transition-colors duration-300 font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Engineering Projects Section */}
      <section id="projects" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00D9FF]">
            Engineering Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* HomesteadHub */}
            <div className="bg-[#1A2332] rounded-xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                HomesteadHub
              </h3>
              <p className="text-[#B0BEC5] mb-4 leading-relaxed">
                Community-driven Q&A platform for homesteaders. Features user authentication, voting system, and threaded discussions. Completed 7 weeks ahead of bootcamp schedule.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">React</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">PostgreSQL</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">Node.js</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">RESTful API</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://homesteadhub-cf.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all font-semibold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/clfarr/homesteadhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-[#00D9FF]/50 text-[#00D9FF] rounded-lg hover:bg-[#00D9FF]/10 transition-all font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Root & Ledger */}
            <div className="bg-[#1A2332] rounded-xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Root & Ledger
              </h3>
              <p className="text-[#B0BEC5] mb-4 leading-relaxed">
                Comprehensive farm management system with inventory tracking, financial reporting, and data analytics. Features breeding calendars, health records, and Schedule F tax reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">React</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">PostgreSQL</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">Supabase</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">Chart.js</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://rootandledger.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all font-semibold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/clfarr/root-and-ledger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-[#00D9FF]/50 text-[#00D9FF] rounded-lg hover:bg-[#00D9FF]/10 transition-all font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Sweet Delights Bakery */}
            <div className="bg-[#1A2332] rounded-xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Sweet Delights Bakery
              </h3>
              <p className="text-[#B0BEC5] mb-4 leading-relaxed">
                Full-stack e-commerce platform for boutique bakery. Features product catalog, shopping cart, order management, and admin dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">React</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">Node.js</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">PostgreSQL</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">Prisma</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/clfarr/sweet-delights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Bricks Pizza */}
            <div className="bg-[#1A2332] rounded-xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Bricks Pizza Ordering System
              </h3>
              <p className="text-[#B0BEC5] mb-4 leading-relaxed">
                Online ordering platform for pizza restaurant. Features menu management, cart functionality, and order processing with WCAG 2.1 accessibility.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">React</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">TypeScript</span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">Firebase</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://bricks-pizza.web.app/demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all font-semibold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/clfarr/bricks-pizza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-[#00D9FF]/50 text-[#00D9FF] rounded-lg hover:bg-[#00D9FF]/10 transition-all font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Projects Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00D9FF]">
            Website Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Redwood Creek Reserve */}
            <div className="bg-[#1A2332] rounded-xl p-5 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Redwood Creek Reserve
              </h3>
              <p className="text-[#B0BEC5] text-sm mb-4">
                Cannabis cultivator website with strain catalog and sustainable practices.
              </p>
              <a
                href="https://redwood-creek-reserve-zw5t.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all font-semibold text-sm"
              >
                View Site
              </a>
            </div>

            {/* Luna & Clover */}
            <div className="bg-[#1A2332] rounded-xl p-5 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Luna & Clover Boutique
              </h3>
              <p className="text-[#B0BEC5] text-sm mb-4">
                E-commerce site with animated UX, wishlist, and responsive design.
              </p>
              <a
                href="https://small-town-boutique.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all font-semibold text-sm"
              >
                View Site
              </a>
            </div>

            {/* Trinity County Animal Shelter */}
            <div className="bg-[#1A2332] rounded-xl p-5 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Trinity County Animal Shelter
              </h3>
              <p className="text-[#B0BEC5] text-sm mb-4">
                Rural shelter site with lost/found section and Petfinder integration.
              </p>
              <a
                href="https://clfarr.github.io/animal-shelter/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all font-semibold text-sm"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A2332] rounded-xl p-8 md:p-12 border border-[#00D9FF]/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00D9FF]">
              About
            </h2>
            <p className="text-lg text-[#B0BEC5] mb-8 leading-relaxed">
              Software engineer combining technical expertise with 14 years of operational problem-solving experience.
              Recently graduated from software engineering bootcamp at California State University San Marcos.
              Specialized in building full-stack applications with React and PostgreSQL.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'TypeScript', 'Node.js', 'PostgreSQL', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'GitHub'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[#00D9FF] font-semibold">
              Currently seeking full-time remote software engineering roles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A2332] rounded-xl p-8 md:p-12 border border-[#00D9FF]/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00D9FF]">
              Contact
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={formStatus === 'sending'}
                  className="w-full px-4 py-3 bg-[#0A1929] border border-[#00D9FF]/30 rounded-lg text-white placeholder-[#B0BEC5]/50 focus:border-[#00D9FF] focus:outline-none focus:ring-1 focus:ring-[#00D9FF] transition-all disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={formStatus === 'sending'}
                  className="w-full px-4 py-3 bg-[#0A1929] border border-[#00D9FF]/30 rounded-lg text-white placeholder-[#B0BEC5]/50 focus:border-[#00D9FF] focus:outline-none focus:ring-1 focus:ring-[#00D9FF] transition-all disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={formStatus === 'sending'}
                  className="w-full px-4 py-3 bg-[#0A1929] border border-[#00D9FF]/30 rounded-lg text-white placeholder-[#B0BEC5]/50 focus:border-[#00D9FF] focus:outline-none focus:ring-1 focus:ring-[#00D9FF] transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="p-4 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-lg text-[#00D9FF] text-center">
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-8 py-4 bg-[#00D9FF] text-[#0A1929] rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 disabled:hover:translate-y-0"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="pt-8 border-t border-[#00D9FF]/20">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:rootwebworks@gmail.com"
                  className="text-[#B0BEC5] hover:text-[#00D9FF] transition-colors font-medium"
                >
                  rootwebworks@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/carrielfarr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B0BEC5] hover:text-[#00D9FF] transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/clfarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B0BEC5] hover:text-[#00D9FF] transition-colors font-medium"
                >
                  GitHub
                </a>
              </div>
              <p className="text-center text-[#B0BEC5] mt-4">
                Available for remote work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center text-[#B0BEC5]/60">
        <p>&copy; 2025 Root Webworks</p>
      </footer>
    </div>
  )
}
