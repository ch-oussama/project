import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative block w-full overflow-hidden rounded-2xl glass transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:-translate-y-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]" />
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-all duration-300 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-colors">
            View Project <ExternalLink size={16} />
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 text-xs font-medium tracking-wider text-accent uppercase">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
