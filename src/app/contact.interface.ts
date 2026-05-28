export interface Contact {
  nom: string;
  email: string;
  actif: boolean;
  score: number;
  role: 'admin' | 'user' | 'guest';
}