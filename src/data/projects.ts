export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  externalUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Neon City Concept",
    description: "A breathtaking high-resolution 3D neon city artwork representing the cyberpunk aesthetic, ready for immersive digital experiences.",
    category: "Graphics",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Quantum E-Commerce",
    description: "Next-generation e-commerce platform built with React, Next.js, and framer-motion featuring lightning-fast data fetching.",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Holographic UX UI",
    description: "Innovative UI/UX design featuring glassmorphism and holographic layered components for advanced SAAS dashboards.",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Cyberpunk Landing Page",
    description: "A dark-themed promotional landing page optimized for high conversion, complete with cutting-edge CSS animations and styling.",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Synthetic Identity",
    description: "Brand identity design for a futuristic AI company. The package features dynamic logo variants and neon-lit typography rules.",
    category: "Graphics",
    imageUrl: "https://images.unsplash.com/photo-1614729939124-032f0b5609ce?q=80&w=2071&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Neural Interface",
    description: "UI/UX wireframing and high-fidelity mockups for a medical-tech neural interface visualizer app.",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
];
