import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wallet } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [walletStatus, setWalletStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_home'), href: '/' },
    { name: t('nav_scan'), href: '/scan' },
    { name: t('nav_passport'), href: '/passport' },
    { name: t('nav_resale'), href: '/resale' },
    { name: t('nav_architecture'), href: '/architecture' },
  ];

  const handleWalletClick = () => {
    if (walletStatus === 'disconnected') {
      setWalletStatus('connecting');
      setTimeout(() => setWalletStatus('connected'), 2000);
    } else if (walletStatus === 'connected') {
      setWalletStatus('disconnected');
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-serif text-xl md:text-2xl tracking-widest text-foreground uppercase cursor-pointer">
          AEON
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300",
                location === link.href ? "text-accent" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-border"></div>
          
          <button 
            onClick={toggleLang}
            className="text-[11px] font-medium tracking-[0.2em] hover:text-accent transition-colors duration-300 flex items-center gap-1"
          >
            <span className={cn("transition-opacity", lang === 'EN' ? "opacity-100 text-foreground" : "opacity-40 text-muted-foreground")}>EN</span>
            <span className="opacity-40 text-muted-foreground">/</span>
            <span className={cn("transition-opacity", lang === 'FR' ? "opacity-100 text-foreground" : "opacity-40 text-muted-foreground")}>FR</span>
          </button>

          <button 
            onClick={handleWalletClick}
            className={cn(
              "text-[10px] tracking-[0.2em] uppercase px-4 py-2 border rounded-sm transition-all duration-500 flex items-center gap-2",
              walletStatus === 'connected' 
                ? "border-accent/50 text-accent bg-accent/5" 
                : "border-white/10 text-white hover:border-accent/50 hover:text-accent"
            )}
          >
            <Wallet size={12} />
            {walletStatus === 'disconnected' && "Connecter"}
            {walletStatus === 'connecting' && "Connexion..."}
            {walletStatus === 'connected' && "0x9F...2A1B"}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={handleWalletClick}
            className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-white/10 text-white rounded-sm"
          >
             {walletStatus === 'connected' ? "0x9F...2A1B" : "Connecter"}
          </button>
          <button 
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-background border-t border-border/50 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-10 pb-20">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-widest text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <button 
                onClick={toggleLang}
                className="text-sm font-sans tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mt-8"
              >
                <span className={cn(lang === 'EN' && "text-foreground font-bold")}>EN</span>
                <span>/</span>
                <span className={cn(lang === 'FR' && "text-foreground font-bold")}>FR</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
