import Link from 'next/link'

export default function TrinityFallsFarmCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Navigation */}
      <nav className="border-b border-purple-500/30 backdrop-blur-md bg-purple-950/40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
            Trinity Falls Farm Manager
          </h1>
          <p className="text-2xl text-cyan-100 mb-8">
            A comprehensive farm management system for tracking livestock, breeding, and finances
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://trinity-falls-farm-manager.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all font-semibold shadow-lg shadow-green-500/50"
            >
              View Live App
            </a>
            <a 
              href="https://github.com/clfarr/trinity-falls-farm-manager" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold border border-purple-400/30"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">React</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">Vite</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Tailwind CSS</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-green-500/20 text-green-300 border border-green-400/30">Supabase</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">PostgreSQL</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">Supabase Storage</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30">TypeScript</span>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-16 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
          <p className="text-cyan-100 leading-relaxed mb-4">
            Trinity Falls Farm needed a digital solution to replace their paper-based tracking system for managing rabbits, chickens, breeding programs, and farm finances. The farm required:
          </p>
          <ul className="list-disc list-inside text-cyan-100 space-y-2 ml-4">
            <li>Detailed rabbit pedigree tracking with photo documentation</li>
            <li>Breeding record management with automatic kindle date calculations</li>
            <li>Daily egg production logging organized by egg color</li>
            <li>Financial tracking for income and expenses with date filtering</li>
            <li>IRS Schedule F tax report generation</li>
            <li>Real-time dashboard with key metrics and insights</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
          <p className="text-cyan-100 leading-relaxed mb-8">
            I built a full-stack web application using React and Supabase that provides a complete farm management solution accessible from any device. The app features an intuitive interface designed specifically for farm operations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">🐰</div>
              <h3 className="text-xl font-bold text-white mb-2">Rabbit Management</h3>
              <p className="text-cyan-100">
                Complete pedigree tracking with photo uploads, lineage information, and detailed rabbit profiles including weight, color, and breed data.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">💕</div>
              <h3 className="text-xl font-bold text-white mb-2">Breeding Records</h3>
              <p className="text-cyan-100">
                Track breeding pairs with automatic kindle date calculation (31 days from breeding date) and comprehensive breeding history.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">🥚</div>
              <h3 className="text-xl font-bold text-white mb-2">Egg Production</h3>
              <p className="text-cyan-100">
                Daily egg logging organized by color (white, brown, blue, green, pink) with running totals and production trends.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Financial Tracking</h3>
              <p className="text-cyan-100">
                Comprehensive income and expense tracking with date range filtering and IRS Schedule F tax report generation.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Technical Highlights</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-3">Database Design</h3>
              <p className="text-cyan-100 leading-relaxed">
                Designed and implemented a normalized PostgreSQL database schema with tables for rabbits, breeding records, eggs, and financial transactions. Used Supabase for real-time data synchronization and Row Level Security for data protection.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">File Upload System</h3>
              <p className="text-cyan-100 leading-relaxed">
                Implemented Supabase Storage integration for rabbit photo uploads with proper bucket configuration, public URL generation, and image display. Handles file selection, upload progress, and error handling gracefully.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-teal-400 mb-3">Date Calculations</h3>
              <p className="text-cyan-100 leading-relaxed">
                Built custom date calculation logic for breeding records, automatically computing expected kindle dates (31 days from breeding) and handling date formatting for user-friendly display throughout the application.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Custom UI Components</h3>
              <p className="text-cyan-100 leading-relaxed">
                Developed reusable React components with Tailwind CSS for consistent styling, including modal forms, data tables, stat cards, and navigation. Implemented responsive design for mobile and desktop use.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Complete rabbit pedigree management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Photo upload and storage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Breeding record tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Automatic kindle date calculation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Color-coded egg production logging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Financial income/expense tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Date range filtering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">IRS Schedule F tax reports</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Real-time dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-cyan-100">Responsive mobile design</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What I Learned */}
        <div className="mb-16 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">What I Learned</h2>
          <div className="space-y-4 text-cyan-100">
            <p className="leading-relaxed">
              <strong className="text-emerald-400">Database Schema Design:</strong> Learned to design normalized database schemas that balance data integrity with query performance, particularly for relational data like rabbit pedigrees and breeding records.
            </p>
            <p className="leading-relaxed">
              <strong className="text-emerald-400">File Storage Integration:</strong> Gained hands-on experience with Supabase Storage, including bucket configuration, file uploads, public URL generation, and serving images in a React application.
            </p>
            <p className="leading-relaxed">
              <strong className="text-emerald-400">Real-World Business Logic:</strong> Implemented domain-specific calculations (kindle dates, tax reports) and learned to translate real farm management needs into technical requirements.
            </p>
            <p className="leading-relaxed">
              <strong className="text-emerald-400">Full-Stack Development:</strong> Built a complete application from database design through frontend implementation, handling authentication, CRUD operations, and file uploads.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-xl p-6 border border-green-400/30">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-cyan-100">Digital Record Keeping</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-cyan-100">Integrated Modules</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl font-bold text-cyan-400 mb-2">⚡</div>
              <div className="text-cyan-100">Real-Time Updates</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-green-400/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See It in Action?</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Explore the live application to see how it helps Trinity Falls Farm manage their operations efficiently.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://trinity-falls-farm-manager.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all font-semibold shadow-lg shadow-green-500/50 text-lg"
            >
              View Live App
            </a>
            <a 
              href="https://github.com/clfarr/trinity-falls-farm-manager" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-600/50 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all font-semibold border border-purple-400/30 text-lg"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
