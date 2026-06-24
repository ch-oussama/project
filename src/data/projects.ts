export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  externalUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Neon City Concept",
    category: "Graphics",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Quantum E-Commerce",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Holographic UX UI",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Cyberpunk Landing Page",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Synthetic Identity",
    category: "Graphics",
    imageUrl: "https://images.unsplash.com/photo-1614729939124-032f0b5609ce?q=80&w=2071&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Neural Interface",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    externalUrl: "https://github.com",
  },
];
