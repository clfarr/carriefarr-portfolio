import Link from 'next/link'

export default function SweetDelightsCase() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-50"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`, backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block mb-8 px-6 py-3 bg-purple-600/50 text-cyan-100 rounded-lg hover:bg-purple-500/50 transition-all border border-purple-400/30 hover:scale-105">
            ← Back to Portfolio
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Sweet Delights Bakery
            </h1>
            <p className="text-xl text-cyan-100">E-commerce platform for custom desserts and cakes</p>
          </div>

          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Project Overview</h2>
            <p className="text-cyan-100 leading-relaxed">
              A full-stack e-commerce website for a boutique bakery specializing in custom cakes and desserts.
              Features include product catalog, shopping cart, order management, and admin dashboard for inventory control.
            </p>
          </section>

          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Key Features</h2>
            <ul className="list-disc list-inside text-cyan-100 space-y-2">
              <li>Product catalog with categories and search functionality</li>
              <li>Shopping cart with real-time updates</li>
              <li>Secure payment processing</li>
              <li>Order history and tracking</li>
              <li>Admin dashboard for product and order management</li>
            </ul>
          </section>

          <section className="mb-12 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-purple-600/30 text-cyan-100 rounded-full border border-purple-400/30 text-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <Link href="/" className="inline-block px-6 py-3 bg-purple-600/50 text-cyan-100 rounded-lg hover:bg-purple-500/50 transition-all border border-purple-400/30 hover:scale-105">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
