import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project.title} | Elite Digital Studio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Elite Digital Studio`,
      description: project.description,
      images: [
        {
          url: project.imageUrl, // This is what Discord will fetch!
          width: 1200,
          height: 630,
          alt: project.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <main className="min-h-screen relative bg-background pb-20">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Content */}
      <article className="relative z-10 max-w-5xl mx-auto px-6 mt-8">
        
        {/* Header Section */}
        <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {project.description}
            </p>
          </div>
          
          <a 
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex-shrink-0"
          >
            Visit Live Project <ExternalLink size={20} />
          </a>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden glass shadow-2xl">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

      </article>
    </main>
  );
}
