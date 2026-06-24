import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Hero Section */}
        <section className="mt-12 mb-24 text-center">
          <div className="inline-block glass px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              Welcome to the Future
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-white">Elite Digital </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple neon-text">
              Studio
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            We craft premium, high-performance web experiences. Merging legendary design 
            aesthetics with cutting-edge engineering.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">
              Our Projects <span className="text-gray-500 font-normal">مشاريعنا</span>
            </h2>
          </div>
          
          <ProjectGrid />
        </section>

      </div>
    </main>
  );
}
