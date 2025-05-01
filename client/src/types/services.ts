export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  features: string[];
}

export interface Services {
  [key: string]: Service;
} 