import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <span className="font-serif text-2xl tracking-widest text-foreground uppercase block mb-2">
            AEON
          </span>
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            {t('footer_address')}
          </span>
        </div>

        <div className="flex space-x-8 mb-8 md:mb-0">
          {/* Social Links placeholders */}
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Journal</a>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60 tracking-wider">
        <p>{t('footer_rights')}</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
