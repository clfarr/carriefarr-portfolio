import Link from 'next/link'

export default function RootAndLedgerCaseStudy() {
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

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-600/30 border border-indigo-400/40 text-indigo-200 rounded-full text-sm font-semibold">
            🌱 SaaS Product — Live in Production
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
            Root & Ledger
          </h1>
          <p className="text-2xl text-cyan-100 mb-8">
            A comprehensive farm management SaaS platform for small-scale farmers and homesteaders
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://rootandledger.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:from-indigo-400 hover:to-violet-400 transition-all font-semibold shadow-lg shadow-indigo-500/50"
            >
              View Live App
            </a>
          </div>
        </div>

        {/* Demo Login Callout */}
        <div className="mb-16 bg-indigo-950/60 backdrop-blur-md rounded-2xl p-6 border-2 border-indigo-400/40 shadow-lg shadow-indigo-900/50">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-300 mb-2">Try the Live Demo</h3>
              <p className="text-cyan-100 mb-3">Explore the full application with a demo farm account. No signup required — just log in and explore.</p>
              <div className="bg-purple-950/60 rounded-lg p-4 inline-block">
                <p className="text-cyan-100"><span className="text-indigo-300 font-semibold">Email:</span> demo@rootandledger.org</p>
                <p className="text-cyan-100"><span className="text-indigo-300 font-semibold">Password:</span> <span className="text-indigo-200 italic">[update with demo password]</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">React 18</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">Vite</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Tailwind CSS</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-green-500/20 text-green-300 border border-green-400/30">Supabase</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">PostgreSQL</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">Supabase Storage</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30">TypeScript</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">React Router v6</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/30">jsPDF</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30">Vercel</span>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-16 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">The Problem</h2>
          <p className="text-cyan-100 leading-relaxed mb-4">
            Small-scale farmers and homesteaders lack affordable, user-friendly tools to manage their operations. Existing solutions are either too expensive, too complex, or designed for industrial-scale agriculture. Many small farmers still rely on paper records, spreadsheets, or fragmented apps to track livestock, finances, and production.
          </p>
          <ul className="list-disc list-inside text-cyan-100 space-y-2 ml-4">
            <li>Paper-based records are error-prone and hard to search</li>
            <li>Enterprise farm software is priced out of reach for small operations</li>
            <li>No single tool handles livestock, finances, AND tax reporting</li>
            <li>Breeding genealogy and kit tracking requires specialized tooling</li>
            <li>IRS Schedule F reporting is complex and time-consuming</li>
          </ul>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
          <p className="text-cyan-100 leading-relaxed mb-8">
            Root & Ledger is a production-ready SaaS platform built to replace paper records and expensive enterprise tools. It supports 13 animal types, advanced breeding tracking with genealogy, full financial management, and IRS Schedule F tax reporting — all in one intuitive interface accessible from any device.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">🐰</div>
              <h3 className="text-xl font-bold text-white mb-2">Livestock Management</h3>
              <p className="text-cyan-100">
                13 animal types with individual profiles, photos, pedigree tracking, and status management. Custom Rabbit IDs, detailed physical characteristics, and full genealogy trees.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">🐣</div>
              <h3 className="text-xl font-bold text-white mb-2">Breeding & Reproduction</h3>
              <p className="text-cyan-100">
                Advanced litter tracking with born alive, stillborn, deaths, and weaned counts. Automatic gestation calculations, breeding calendars, and offspring survival statistics.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Financial Management</h3>
              <p className="text-cyan-100">
                Income and expense tracking with categorization, purchase price documentation, and animal loss reporting. Complete IRS Schedule F integration with PDF export.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Production Tracking</h3>
              <p className="text-cyan-100">
                Milk, egg, fiber, honey, and harvest logging with analytics and trends. Color-coded egg production, flock management, and comprehensive production reports.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-bold text-white mb-2">Multi-User Teams</h3>
              <p className="text-cyan-100">
                Role-based access control with owner, manager, and viewer permissions. Team invitation system, activity logging for accountability, and complete data isolation per farm.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-bold text-white mb-2">Inventory & Operations</h3>
              <p className="text-cyan-100">
                Feed and supply inventory with purchase tracking and usage logs. Task management, calendar integration, time tracking, and mileage logging for farm operations.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Technical Highlights</h2>

          <div className="space-y-6">
            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">Database Architecture</h3>
              <p className="text-cyan-100 leading-relaxed">
                35+ database tables with a fully normalized PostgreSQL schema. 36 migrations implemented for iterative development. Includes foreign key relationships, indexes for performance, check constraints for data validation, and automated triggers for timestamps.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-violet-400 mb-3">Multi-Tenant Security</h3>
              <p className="text-cyan-100 leading-relaxed">
                Row Level Security (RLS) policies on all tables ensure complete data isolation between farms. Each user can only access their own data. Role-based permissions enforce owner, manager, and viewer access levels across the application.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">IRS Schedule F Integration</h3>
              <p className="text-cyan-100 leading-relaxed">
                Built-in tax reporting that generates IRS Schedule F-compatible summaries. Tracks income, expenses, animal losses, and purchase prices with custom date range filtering. Exports to PDF and CSV for easy filing.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Real-Time & Storage</h3>
              <p className="text-cyan-100 leading-relaxed">
                Supabase Realtime subscriptions keep the UI in sync without manual refreshes. Supabase Storage handles animal photo uploads with proper bucket configuration and public URL generation.
              </p>
            </div>

            <div className="bg-purple-950/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-pink-400 mb-3">50+ Custom Components</h3>
              <p className="text-cyan-100 leading-relaxed">
                A custom React component library with a "Garden" theme built on Tailwind CSS. Includes modal forms, data tables, stat cards, PDF generators, calendar views, and responsive mobile layouts.
              </p>
            </div>
          </div>
        </div>

        {/* By the Numbers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-gradient-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-md rounded-xl p-6 border border-indigo-400/30 text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">13</div>
              <div className="text-cyan-100 text-sm">Animal Types</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">35+</div>
              <div className="text-cyan-100 text-sm">Database Tables</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-cyan-100 text-sm">React Components</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">10K+</div>
              <div className="text-cyan-100 text-sm">Lines of Code</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-md rounded-xl p-6 border border-pink-400/30 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">36</div>
              <div className="text-cyan-100 text-sm">DB Migrations</div>
            </div>
          </div>
        </div>

        {/* Business Opportunity */}
        <div className="mb-16 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Business Opportunity</h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            Root & Ledger is positioned to serve a growing market of small-scale farmers and homesteaders seeking modern, affordable farm management tools. The platform is production-ready and architected to scale.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-indigo-400 text-xl">💎</span>
              <div>
                <span className="text-indigo-300 font-semibold">Freemium</span>
                <p className="text-cyan-100 text-sm">Core features free, premium features paid</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-violet-400 text-xl">🔄</span>
              <div>
                <span className="text-violet-300 font-semibold">Subscription</span>
                <p className="text-cyan-100 text-sm">Monthly or annual recurring revenue per farm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 text-xl">📈</span>
              <div>
                <span className="text-emerald-300 font-semibold">Tiered Pricing</span>
                <p className="text-cyan-100 text-sm">Plans based on farm size or animal count</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-400 text-xl">🏢</span>
              <div>
                <span className="text-pink-300 font-semibold">White-Label</span>
                <p className="text-cyan-100 text-sm">Custom instances for farm consultants or organizations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-indigo-500/20 to-violet-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-indigo-400/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Root & Ledger?</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Try the live application with the demo account above and see how Root & Ledger transforms farm management for small-scale operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://rootandledger.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:from-indigo-400 hover:to-violet-400 transition-all font-semibold shadow-lg shadow-indigo-500/50 text-lg"
            >
              View Live App
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
