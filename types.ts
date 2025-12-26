
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
