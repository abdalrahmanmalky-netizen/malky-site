

import { NavLink, PortfolioItem, SocialLink } from './types';

/**
 * ==========================================
 *  CONFIGURATION ZONE: CONTENT DATA
 *  Edit the data below to update the website.
 * ==========================================
 */

// 1. SITE INFO
export const SITE_NAME = "Malky Port";
export const HERO_TITLE = "VISUAL EXPERIENCE DESIGNER";
export const HERO_SUBTITLE = "Crafting digital realities through neon, glass, and code.";

// 2. PORTFOLIO ITEMS
// Add, remove, or edit items here. The 'category' field is used for filtering.
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Neon Nights Branding",
    category: "Branding",
    imageURL: "https://picsum.photos/id/132/800/1000",
    description: "A complete identity overhaul for Tokyo's premier cyberpunk nightclub. The project involved creating a dynamic logo system that reacts to music beats, holographic entry passes, and a neon-soaked wayfinding system throughout the venue."
  },
  {
    id: 2,
    title: "Cyberpunk UI Kit",
    category: "Social Media",
    imageURL: "https://picsum.photos/id/111/800/600",
    description: "An extensive user interface library designed for next-gen AR applications. Features include glassmorphic panels, glitched typography elements, and high-contrast data visualization components optimized for heads-up displays."
  },
  {
    id: 3,
    title: "Eco-Future Packaging",
    category: "Packaging",
    imageURL: "https://picsum.photos/id/21/800/1200",
    description: "Sustainable luxury packaging design for a high-end botanical skincare line. We utilized biodegradable materials while maintaining a futuristic aesthetic through embossed holographic textures and minimalist typography."
  },
  {
    id: 4,
    title: "Abstract 3D Render",
    category: "3D Models",
    imageURL: "https://picsum.photos/id/10/800/800",
    description: "An exploration of procedural generation and volumetric lighting. This series investigates the intersection of organic forms and digital noise, created using Blender and Houdini for a digital art exhibition."
  },
  {
    id: 5,
    title: "Vaporwave Album Art",
    category: "Print",
    imageURL: "https://picsum.photos/id/54/800/1000",
    description: "Vinyl and cassette cover art for the latest synthwave compilation. The artwork pays homage to 80s nostalgia while injecting modern glitch aesthetics, printed on metallic stock for a shimmering finish."
  },
  {
    id: 6,
    title: "Tech Conference Poster",
    category: "Print",
    imageURL: "https://picsum.photos/id/76/800/1100",
    description: "Key visual identity for the global 'Future Tech 2025' summit. The poster utilizes augmented reality markers that, when scanned, reveal the schedule and speaker bios in floating 3D space."
  },
  {
    id: 7,
    title: "Holographic Soda Can",
    category: "Packaging",
    imageURL: "https://picsum.photos/id/106/800/900",
    description: "Concept design for a limited edition energy drink. The can features a thermochromic layer that changes color based on temperature, revealing hidden messages when cold."
  },
  {
    id: 8,
    title: "Instagram Grid Layouts",
    category: "Social Media",
    imageURL: "https://picsum.photos/id/91/800/800",
    description: "A cohesive social media strategy template designed for fashion influencers. The grid layout focuses on seamless transitions between posts, creating a continuous visual narrative when viewed on a profile."
  },
   {
    id: 9,
    title: "Future Mech Concept",
    category: "3D Models",
    imageURL: "https://picsum.photos/id/160/800/600",
    description: "Character and vehicle design for an upcoming sci-fi RPG. This mech unit focuses on agility and stealth, featuring hard-surface modeling techniques and realistic texture wear."
  },
  // NEW PROJECTS START
  {
    id: 10,
    title: "Tiger - Visual Dominance",
    category: "Packaging",
    imageURL: "https://via.placeholder.com/800x1000/FF4500/FFFFFF?text=Tiger+Chips+Visual", 
    description: "A bold, high-energy packaging concept for Tiger Chips. The design uses aggressive typography and shattered elements to convey the intense 'dominating' flavor profile."
  },
  {
    id: 11,
    title: "Port Said: Sky Voyage",
    category: "Manipulation",
    imageURL: "https://via.placeholder.com/800x1000/87CEEB/FFFFFF?text=Port+Said+Surrealism", 
    description: "A surreal digital composite capturing the essence of a Port Said trip. Floating islands, spiraling roads, and iconic landmarks like the lighthouse create a dreamlike travel poster."
  },
  {
    id: 12,
    title: "Tiger - Nature's Crunch",
    category: "Advertising",
    imageURL: "https://via.placeholder.com/800x800/228B22/FFFFFF?text=Tiger+Nature+Blend", 
    description: "Creative advertising visual where the product transforms into its natural origin. A potato chip morphing into a lush green potato field, highlighting natural ingredients."
  },
  {
    id: 13,
    title: "Shell - Reignition",
    category: "Advertising",
    imageURL: "https://via.placeholder.com/800x600/000000/FFFFFF?text=Shell+Helix+Power", 
    description: "High-octane visual manipulation turning a Shell Helix oil bottle into a jet-powered vehicle. Represents the restoration of raw engine power and performance."
  },
  {
    id: 14,
    title: "BN Malky - Royal Elixir",
    category: "Branding",
    imageURL: "https://via.placeholder.com/800x1000/DAA520/000000?text=BN+Malky+Royal", 
    description: "Luxury beverage branding concept. A golden can crowned in glory, flanked by medieval armor, establishing a 'ruler of taste' brand identity."
  }
  // NEW PROJECTS END
];

// 3. NAVIGATION LINKS
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// 4. CONTACT INFO
export const CONTACT_PHONE = "+125 456 7900";
export const CONTACT_WHATSAPP = "+123 456 7900";
export const CONTACT_EMAIL = "hello@malkyport.com";

// 5. CATEGORIES (Automatically derived or manual override)
export const ALL_CATEGORY = "All";