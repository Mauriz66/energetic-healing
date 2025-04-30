export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  features: string[];
}

export interface Services {
  [key: string]: Service;
} 