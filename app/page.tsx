'use client'

import { useState } from 'react'

const engineeringProjects = [
  {
    title: 'HomesteadHub',
    description: 'Community-driven Q&A platform for homesteaders',
    tech: ['React', 'PostgreSQL', 'Node.js', 'RESTful API'],
    features: [
      'User authentication',
      'Voting system',
      'Threaded discussions',
    ],
    note: 'Completed 7 weeks ahead of bootcamp schedule',
    github: 'https://github.com/clfarr/homestead-hub',
    live: null,
  },
  {
    title: 'Root & Ledger',
    description: 'Comprehensive farm management system',
    tech: ['React', 'PostgreSQL', 'Chart.js'],
    features: [
      'Inventory tracking',
      'Financial reporting',
      'Data analytics',
    ],
    note: null,
    github: 'https://github.com/clfarr/root-and-ledger',
    live: 'https://rootandledger.org/',
  },
  {
    title: 'Sweet Delights Bakery',
    description: 'Full-stack e-commerce platform for boutique bakery',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    features: [
      'Product catalog',
      'Shopping cart',
      'Order management',
      'Admin dashboard',
    ],
    note: null,
    github: 'https://github.com/clfarr',
    live: null,
  },
  {
    title: 'Bricks Pizza Ordering System',
    description: 'Online ordering platform for pizza restaurant',
    tech: ['React', 'Node.js'],
    features: [
      'Menu management',
      'Cart functionality',
      'Order processing',
    ],
    note: null,
    github: 'https://github.com/clfarr',
    live: 'https://bricks-pizza.web.app/demo/',
  },
]

const websiteProjects = [
  {
    title: 'Redwood Creek Reserve',
    live: 'https://redwood-creek-reserve-zw5t.vercel.app/',
  },
  {
    title: 'Luna & Clover Boutique',
    live: 'https://small-town-boutique.vercel.app/',
  },
  {
    title: 'Trinity County Animal Shelter',
    live: 'https://clfarr.github.io/animal-shelter/',
  },
]

export default function Home() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    const mailtoLink = `mailto:carrielouisefarr@gmail.com?subject=Portfolio Contact from ${data.name}&body=From: ${data.name}%0D%0AEmail: ${data.email}%0D%0A%0D%0A${data.message}`

    setTimeout(() => {
      window.location.href = mailtoLink
      setFormStatus('success')
      form.reset()
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <header className="px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-accent mb-4 tracking-tight">
            Root Webworks
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
            Carrie Farr &mdash; Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Building scalable web applications with React and modern
            technologies
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-accent text-navy font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-accent text-cyan-accent font-semibold rounded-lg hover:bg-cyan-accent/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/carrielfarr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-cyan-accent transition-colors duration-200 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/clfarr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-cyan-accent transition-colors duration-200 font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Engineering Projects */}
      <section id="projects" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-accent mb-12 text-center">
            Engineering Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {engineeringProjects.map((project) => (
              <div
                key={project.title}
                className="bg-deep-blue rounded-xl p-6 md:p-8 border border-deep-blue hover:border-cyan-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm font-medium text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/30 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="text-text-secondary text-sm mb-4 space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-cyan-accent mt-0.5">&#8226;</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {project.note && (
                  <p className="text-cyan-accent text-sm font-medium mb-4 italic">
                    {project.note}
                  </p>
                )}

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-semibold text-cyan-accent border border-cyan-accent/40 rounded-lg hover:bg-cyan-accent/10 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-sm font-semibold bg-cyan-accent text-navy rounded-lg hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Projects */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-accent mb-12 text-center">
            Website Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteProjects.map((project) => (
              <div
                key={project.title}
                className="bg-deep-blue rounded-xl p-6 border border-deep-blue hover:border-cyan-accent/40 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {project.title}
                </h3>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-sm font-semibold text-cyan-accent border border-cyan-accent/40 rounded-lg hover:bg-cyan-accent/10 transition-colors duration-200"
                >
                  View Site
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-accent mb-8 text-center">
            About
          </h2>
          <div className="bg-deep-blue rounded-xl p-8 md:p-10 border border-deep-blue">
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Software engineer combining technical expertise with 14 years of
              operational problem-solving experience. Recently graduated from
              software engineering bootcamp at California State University San
              Marcos. Specialized in building full-stack applications with React
              and PostgreSQL.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-text-primary font-semibold mb-3">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'HTML', 'CSS'].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-sm font-medium text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/30 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-3">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'PostgreSQL'].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-sm font-medium text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/30 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code'].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-sm font-medium text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/30 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-cyan-accent font-medium text-center">
              Currently seeking full-time remote software engineering roles
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-accent mb-8 text-center">
            Contact
          </h2>
          <div className="bg-deep-blue rounded-xl p-8 md:p-10 border border-deep-blue">
            <p className="text-text-secondary text-lg mb-8 text-center">
              Interested in working together? Send me a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-primary font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={formStatus === 'sending'}
                  className="w-full px-4 py-3 bg-navy border border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent/50 transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-text-primary font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={formStatus === 'sending'}
                  className="w-full px-4 py-3 bg-navy border border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent/50 transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-text-primary font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={formStatus === 'sending'}
                  className="w-full px-4 py-3 bg-navy border border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent/50 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="p-4 bg-cyan-accent/10 border border-cyan-accent/30 rounded-lg text-cyan-accent text-center">
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-8 py-3 bg-cyan-accent text-navy font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:-translate-y-0.5 transition-all duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="pt-6 border-t border-text-secondary/20">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/carrielfarr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-cyan-accent transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/clfarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-cyan-accent transition-colors font-medium"
                >
                  GitHub
                </a>
                <a
                  href="mailto:carrielouisefarr@gmail.com"
                  className="text-text-secondary hover:text-cyan-accent transition-colors font-medium"
                >
                  Email
                </a>
                <span className="text-text-secondary">
                  Available for remote work
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center text-text-secondary/60">
        <p>&copy; {new Date().getFullYear()} Root Webworks &mdash; Carrie Farr</p>
      </footer>
    </div>
  )
}
