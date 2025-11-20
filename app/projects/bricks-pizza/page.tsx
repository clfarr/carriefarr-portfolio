import Link from 'next/link'

export default function BricksPizzaCase() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-block mb-8 px-6 py-3 bg-purple-600/50 text-cyan-100 rounded-lg hover:bg-purple-500/50 transition-all border border-purple-400/30 hover:scale-105">
            ← Back to Portfolio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              🍕 Bricks Pizza Ordering System
            </h1>
            <p className="text-xl text-cyan-100">Full-stack restaurant ordering platform with advanced features</p>
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            <a href="https://bricks-pizza.web.app/demo/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-400 hover:to-red-400 transition-all shadow-lg shadow-orange-500/50">
              Live Demo
            </a>
            <a href="https://github.com/clfarr/bricks-pizza-ordering-system" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all border border-purple-400/30">
              View Code
            </a>
          </div>

          {/* Project Overview */}
          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Project Overview</h2>
            <p className="text-cyan-100 leading-relaxed">
              A comprehensive online ordering system built for Bricks Pizza & Pub, featuring group ordering capabilities,
              scheduled orders, real-time cart management, and complete accessibility compliance. The system handles
              everything from menu browsing to payment processing with Square API integration.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">The Challenge</h2>
            <p className="text-cyan-100 leading-relaxed mb-4">
              Bricks Pizza needed a modern online ordering solution that could handle complex scenarios like:
            </p>
            <ul className="list-disc list-inside text-cyan-100 space-y-2">
              <li>Group orders where multiple people order together and split payment</li>
              <li>Scheduled orders up to 7 days in advance</li>
              <li>Custom pizza building with real-time price calculations</li>
              <li>Accessibility for users with disabilities (WCAG 2.1 compliance)</li>
              <li>Mobile-responsive design for on-the-go ordering</li>
            </ul>
          </section>

          {/* Solution */}
          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">The Solution</h2>
            <p className="text-cyan-100 leading-relaxed mb-6">
              I built a full-featured ordering platform using React and TypeScript, with Firebase for backend services
              and Square for payment processing. The system includes:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Group Ordering</h3>
                <p className="text-cyan-100 text-sm">Customers can create group orders, invite friends, and split payments seamlessly</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Schedule Ahead</h3>
                <p className="text-cyan-100 text-sm">Order up to 7 days in advance with automatic scheduling</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Email & SMS</h3>
                <p className="text-cyan-100 text-sm">Automated receipts and order confirmations via email and text</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Fully Accessible</h3>
                <p className="text-cyan-100 text-sm">WCAG 2.1 Level AA compliant with keyboard navigation and screen reader support</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vite', 'Square API', 'SendGrid', 'Twilio'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-purple-600/30 text-cyan-100 rounded-full border border-purple-400/30 text-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Challenges & Learnings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-pink-400 mb-2">State Management Complexity</h3>
                <p className="text-cyan-100">Managing cart state across group orders required careful planning. I implemented a robust state management system using React Context to handle real-time updates across multiple users.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Accessibility Implementation</h3>
                <p className="text-cyan-100">Achieving WCAG 2.1 compliance taught me the importance of semantic HTML, ARIA labels, and keyboard navigation. Every interactive element is fully accessible.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Payment Integration</h3>
                <p className="text-cyan-100">Integrating Square API for secure payment processing while maintaining a smooth user experience was challenging but rewarding. I learned proper error handling and security best practices.</p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Results & Impact</h2>
            <ul className="list-disc list-inside text-cyan-100 space-y-2">
              <li>Fully functional demo ready for deployment to production</li>
              <li>100% WCAG 2.1 Level AA accessibility compliance</li>
              <li>Mobile-responsive design works seamlessly on all devices</li>
              <li>Comprehensive order management system with email/SMS notifications</li>
              <li>Ready for Square API integration for real payment processing</li>
            </ul>
          </section>

          {/* Back Button */}
          <Link href="/" className="inline-block px-6 py-3 bg-purple-600/50 text-cyan-100 rounded-lg hover:bg-purple-500/50 transition-all border border-purple-400/30 hover:scale-105">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
