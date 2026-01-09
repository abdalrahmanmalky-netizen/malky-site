export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageURL: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Using simple text or mapping to icons
}