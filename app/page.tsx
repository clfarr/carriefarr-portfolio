'use client'

import Link from 'next/link'
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

    // Mailto link as fallback
    const mailtoLink = `mailto:carrielouisefarr@gmail.com?subject=Portfolio Contact from ${data.name}&body=From: ${data.name}%0D%0AEmail: ${data.email}%0D%0A%0D%0A${data.message}`

    // Simulate sending and open mailto
    setTimeout(() => {
      window.location.href = mailtoLink
      setFormStatus('success')
      form.reset()
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 500)
  }
  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* 90's Neon Geometric Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-50"></div>

        {/* Geometric grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Animated floating triangles */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-purple-500 opacity-20 rotate-45 animate-float"></div>
        <div className="absolute top-60 right-20 w-24 h-24 border-4 border-blue-400 opacity-20 rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border-4 border-cyan-400 opacity-15 -rotate-12 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 border-4 border-pink-500 opacity-20 rotate-45 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 border-4 border-purple-400 opacity-15 rotate-90 animate-float"></div>

        {/* Neon glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Photo with neon effect */}
              <div className="relative group animate-slide-in-left">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow"></div>
                <div className="relative">
                  <Image
                    src="/carrie-farr-photo.jpg"
                    alt="Carrie Farr"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-white relative"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left animate-slide-in-right">
                <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-purple-500/50 animate-bounce-slow">
                  ✨ Open to Opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    Hi, I'm Caroline Farr
                  </span>
                  <br />
                  <span className="text-white drop-shadow-glow">(Call me Carrie!)</span>
                </h1>

                <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl">
                  I'm a bootcamp student passionate about{' '}
                  <span className="font-bold text-purple-400 drop-shadow-neon">creative front-end development</span> and building{' '}
                  <span className="font-bold text-pink-400 drop-shadow-neon">beautiful user interfaces</span>.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="https://github.com/clfarr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-400/70 border-2 border-purple-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/carrielfarr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-400/70 border-2 border-blue-400"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:carrielouisefarr@gmail.com"
                    className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-pink-500/50 hover:shadow-pink-400/70 border-2 border-pink-400"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="px-4 py-16 animate-fade-in-up">
          <div className="max-w-6xl mx-auto">
            <div className="bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-purple-500/30 shadow-2xl shadow-purple-900/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-cyan-100 leading-relaxed">
                I'm a bootcamp student passionate about turning creative ideas into beautiful, functional websites.
                I love UI design, CSS animations, and solving real-world problems with code. When I'm not coding,
                you'll find me exploring new design trends and building projects that matter.
              </p>
            </div>
          </div>
        </section>

  
        {/* Featured Projects */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Redwood Creek Reserve */}
              <div className="group bg-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/60 animate-fade-in-up">
                <div className="h-2 bg-gradient-to-r from-emerald-500 via-green-600 to-lime-500 shadow-glow-green"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    🌲 Redwood Creek Reserve
                  </h3>
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    Professional cannabis cultivator website for Trinity County's Emerald Triangle, featuring strain catalog, cultivation process, and sustainable growing practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">Next.js</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">TypeScript</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">Sanity CMS</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Tailwind</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://redwood-creek-reserve-zw5t.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg hover:from-emerald-400 hover:to-green-400 transition-all font-semibold text-sm shadow-lg shadow-emerald-500/50"
                    >
                      Live Site
                    </a>
                    <a
                      href="https://github.com/clfarr/redwood-creek-reserve"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold text-sm border border-purple-400/30"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

                    {/* Trinity County Animal Shelter - NEW */}
      <div className="group bg-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/60 animate-fade-in-up animation-delay-100">
        <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 shadow-glow-amber"></div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3">
            🐾 Trinity County Animal Shelter
          </h3>
          <p className="text-cyan-100 mb-4 leading-relaxed">
            Grassroots-style website for rural animal shelter featuring comprehensive lost/found section, Petfinder integration, and donation tracking. Zero hosting cost, volunteer-maintainable.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30">HTML5</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">CSS3</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">JavaScript</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">GitHub Pages</span>
          </div>
          <div className="flex gap-3">
            <a
              href="https://clfarr.github.io/animal-shelter/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all font-semibold text-sm shadow-lg shadow-amber-500/50"
            >
              Live Site
            </a>
            <a
              href="https://github.com/clfarr/animal-shelter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold text-sm border border-purple-400/30"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

              {/* Luna & Clover */}
              <div className="group bg-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:-translate-y-2 hover:border-rose-400/60 animate-fade-in-up animation-delay-200">
                <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 shadow-glow-pink"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    🌙 Luna & Clover - Boho Kids Boutique
                  </h3>
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    Modern e-commerce website with animated UX, wishlist functionality, skeleton loading states, and fully responsive mobile design. Features page transitions, interactive hover effects, and localStorage persistence.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">React</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">Vite</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Tailwind</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30">Framer Motion</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://small-town-boutique.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-lg hover:from-rose-400 hover:to-purple-400 transition-all font-semibold text-sm shadow-lg shadow-rose-500/50"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/clfarr/small-town-boutique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold text-sm border border-purple-400/30"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Mel's Mountain Diner */}
              <div className="group bg-pink-950/40 backdrop-blur-md rounded-2xl overflow-hidden border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 animate-fade-in-up animation-delay-400">
                <div className="h-2 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    🍔 Mel&apos;s Mountain Diner
                  </h3>
                  <p className="text-pink-100 mb-4 leading-relaxed">
                    A groovy 60&apos;s retro-themed diner website featuring unique all-circular design with no squares. Interactive jukebox, neon sign effects, and chrome finishes capture the Happy Days era perfectly.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-sm">HTML5</span>
                    <span className="px-3 py-1 bg-orange-500/30 text-orange-200 rounded-full text-sm">CSS3</span>
                    <span className="px-3 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">Retro Design</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a 
                      href="https://clfarr.github.io/mels-mountain-diner" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 hover:shadow-pink-500/50"
                    >
                      Live Demo
                    </a>
                    <a 
                      href="https://github.com/clfarr/mels-mountain-diner" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Bricks Pizza Project */}
              <div className="group bg-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/60 animate-fade-in-up animation-delay-600">
                <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-glow-orange"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    🍕 Bricks Pizza Ordering System
                  </h3>
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    Full-featured restaurant ordering system with group orders, scheduled orders, email/SMS notifications, and WCAG 2.1 accessibility.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">React</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">TypeScript</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30">Firebase</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Tailwind</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">Square API</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://bricks-pizza.web.app/demo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-400 hover:to-red-400 transition-all font-semibold text-sm shadow-lg shadow-orange-500/50"
                    >
                      Live Demo
                    </a>
                    <Link
                      href="/projects/bricks-pizza"
                      className="flex-1 text-center px-4 py-2 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold text-sm border border-purple-400/30"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>

              {/* Moon House */}
              <div className="group bg-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/60 animate-fade-in-up">
                <div className="h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 shadow-glow-teal"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    🌙 Moon House Cafe
                  </h3>
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    Modern website for a board game cafe featuring online ordering, rewards program, photo gallery, and mobile-first responsive design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">Next.js</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">React</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">TypeScript</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Tailwind</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">Cloud Run</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://moon-house-527620927407.us-central1.run.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-400 hover:to-cyan-400 transition-all font-semibold text-sm shadow-lg shadow-teal-500/50"
                    >
                      Live Site
                    </a>
                    <a
                      href="https://github.com/clfarr/moon-house-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold text-sm border border-purple-400/30"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Rabbit Breeding Manager */}
              <div className="group bg-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/60 animate-fade-in-up animation-delay-200">
                <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 shadow-glow-green"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Rabbit Breeding Manager
                  </h3>
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    Farm management application for tracking rabbit breeding, health records, and genealogy with database integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">React</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">TypeScript</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-300 border border-green-400/30">Database</span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/projects/rabbit-manager"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all font-semibold text-sm shadow-lg shadow-green-500/50"
                    >
                      Case Study
                    </Link>
                    <a
                      href="https://github.com/clfarr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold text-sm border border-purple-400/30"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Sweet Delights Bakery */}
              <div className="group bg-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/60 animate-fade-in-up animation-delay-400">
                <div className="h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 shadow-glow-pink"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Sweet Delights Bakery
                  </h3>
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    Full-stack e-commerce platform for custom cakes and desserts with online ordering and payment processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">Next.js</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">TypeScript</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">Prisma</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">PostgreSQL</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Tailwind</span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/projects/sweet-delights"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all font-semibold text-sm shadow-lg shadow-pink-500/50"
                    >
                      Case Study
                    </Link>
                    <a
                      href="https://github.com/clfarr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold text-sm border border-purple-400/30"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'JavaScript',
                'HTML/CSS',
                'Prisma',
                'PostgreSQL',
                'Firebase',
                'Git & GitHub',
                'UI/UX Design',
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="px-6 py-3 bg-purple-950/40 backdrop-blur-md border-2 border-purple-500/30 rounded-full font-semibold text-cyan-100 hover:border-pink-400 hover:text-pink-300 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 cursor-default animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-purple-500/30 shadow-2xl shadow-purple-900/50 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect!
              </h2>
              <p className="text-lg text-cyan-100 mb-8 text-center">
                I'm always excited to collaborate on new projects or discuss opportunities.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-cyan-100 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={formStatus === 'sending'}
                    className="w-full px-4 py-3 bg-purple-900/30 border-2 border-purple-500/30 rounded-lg text-cyan-100 placeholder-cyan-300/50 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-cyan-100 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={formStatus === 'sending'}
                    className="w-full px-4 py-3 bg-purple-900/30 border-2 border-purple-500/30 rounded-lg text-cyan-100 placeholder-cyan-300/50 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-cyan-100 font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    disabled={formStatus === 'sending'}
                    className="w-full px-4 py-3 bg-purple-900/30 border-2 border-purple-500/30 rounded-lg text-cyan-100 placeholder-cyan-300/50 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all resize-none disabled:opacity-50"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border-2 border-green-400/30 rounded-lg text-green-300 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-pink-500/50 border-2 border-pink-400 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* Social Links */}
              <div className="pt-8 border-t-2 border-purple-500/30">
                <p className="text-cyan-100 text-center mb-4">Or connect with me on:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://github.com/clfarr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-600/50 text-cyan-100 rounded-lg hover:bg-purple-500/50 transition-all transform hover:scale-105 font-semibold border border-purple-400/30"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/carrielfarr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600/50 text-cyan-100 rounded-lg hover:bg-blue-500/50 transition-all transform hover:scale-105 font-semibold border border-blue-400/30"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:carrielouisefarr@gmail.com"
                    className="px-6 py-3 bg-pink-600/50 text-cyan-100 rounded-lg hover:bg-pink-500/50 transition-all transform hover:scale-105 font-semibold border border-pink-400/30"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 text-center text-cyan-300/60 animate-fade-in">
          <p>© 2025 • Made with Next.js, TypeScript & Tailwind CSS</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-25px) rotate(12deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .drop-shadow-glow { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
        .drop-shadow-neon { text-shadow: 0 0 10px currentColor; }
        .shadow-glow-orange { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
        .shadow-glow-pink { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
        .shadow-glow-green { box-shadow: 0 0 20px rgba(34, 197, 94, 0.5); }
        .shadow-glow-teal { box-shadow: 0 0 20px rgba(20, 184, 166, 0.5); }
        .shadow-glow-amber { box-shadow: 0 0 20px rgba(245, 158, 11, 0.5); }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  )
}
