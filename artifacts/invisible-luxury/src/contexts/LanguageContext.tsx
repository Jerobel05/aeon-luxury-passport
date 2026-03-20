import React, { createContext, useContext, useState } from 'react';

type Language = 'EN' | 'FR';

interface Translations {
  [key: string]: {
    EN: string;
    FR: string;
  };
}

const translations: Translations = {
  // Nav
  nav_home: { EN: "Home", FR: "Accueil" },
  nav_scan: { EN: "Scan", FR: "Scanner" },
  nav_passport: { EN: "Passport", FR: "Passeport" },
  nav_resale: { EN: "Resale", FR: "Revente" },
  nav_architecture: { EN: "Architecture", FR: "Architecture" },
  
  // Hero
  hero_title: { EN: "Your Watch. Digitally Alive.", FR: "Votre Montre. Numériquement Vivante." },
  hero_subtitle: { EN: "The First Visual AI Digital Passport for Luxury Timepieces.", FR: "Le Premier Passeport Numérique par IA Visuelle pour les Montres de Luxe." },
  hero_cta: { EN: "Discover My Watch", FR: "Découvrir Ma Montre" },
  
  // How it works / Feature strip
  how_step1_title: { EN: "AI Recognition", FR: "Reconnaissance IA" },
  how_step1_desc: { EN: "Instant visual identification of your luxury timepiece without QR codes.", FR: "Identification visuelle instantanée de votre montre de luxe sans codes QR." },
  how_step2_title: { EN: "Blockchain Certificate", FR: "Certificat Blockchain" },
  how_step2_desc: { EN: "An immutable ERC-721 token representing true ownership and provenance.", FR: "Un jeton ERC-721 immuable représentant la véritable propriété et la provenance." },
  how_step3_title: { EN: "Seamless Resale", FR: "Revente Fluide" },
  how_step3_desc: { EN: "Transfer ownership instantly and securely using gasless smart accounts.", FR: "Transférez la propriété instantanément et en toute sécurité via des comptes intelligents sans frais." },

  // Passport Preview
  passport_title: { EN: "The Digital Identity", FR: "L'Identité Numérique" },
  passport_desc: { EN: "A complete, cryptographic record of your timepiece, beautifully presented and securely stored.", FR: "Un enregistrement cryptographique complet de votre garde-temps, magnifiquement présenté et stocké en toute sécurité." },
  passport_brand: { EN: "Brand", FR: "Marque" },
  passport_model: { EN: "Model", FR: "Modèle" },
  passport_ref: { EN: "Reference", FR: "Référence" },
  passport_year: { EN: "Year", FR: "Année" },
  passport_material: { EN: "Material", FR: "Matériau" },
  passport_movement: { EN: "Movement", FR: "Mouvement" },
  passport_value: { EN: "Est. Value", FR: "Valeur Est." },

  // Footer
  footer_address: { EN: "Geneva • Paris • New York", FR: "Genève • Paris • New York" },
  footer_rights: { EN: "© 2025 AEON Digital Passports. All rights reserved.", FR: "© 2025 AEON Passeports Numériques. Tous droits réservés." }
};

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: keyof typeof translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('FR');

  const toggleLang = () => {
    setLang((prev) => (prev === 'EN' ? 'FR' : 'EN'));
  };

  const t = (key: keyof typeof translations) => {
    if (!translations[key]) return key;
    return translations[key][lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
