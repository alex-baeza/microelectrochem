export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  url?: string;
  doi?: string;
  topic?: string;
  type?: string;
  abstract?: string;
}

export interface ResearchLine {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  techniques: string[];
  keywords: string[];
  imageUrl: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  objective: string;
  participants: string;
  collaborators: string;
  status: 'Activo' | 'Finalizado';
}

export interface Course {
  id: string;
  name: string;
  level: 'Licenciatura' | 'Posgrado';
  frequency: string;
  description: string;
}

export interface LabEquipment {
  id: string;
  name: string;
  description: string;
  category: 'Instrumental' | 'Electrodos' | 'Accesorios' | 'Sistemas de Flujo';
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  videoId: string;
  duration?: string;
}
