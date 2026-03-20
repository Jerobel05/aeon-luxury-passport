import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Scan, Cpu, ShieldCheck, User, Building, BookOpen } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'wouter';

export default function Home() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const steps = [
    {
      icon: <Scan className="w-8 h-8 text-accent" strokeWidth={1} />,
      title: t('how_step1_title'),
      desc: t('how_step1_desc')
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" strokeWidth={1} />,
      title: t('how_step2_title'),
      desc: t('how_step2_desc')
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" strokeWidth={1} />,
      title: t('how_step3_title'),
      desc: t('how_step3_desc')
    }
  ];

  return (
    <main className="w-full bg-background min-h-screen selection:bg-accent/30">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden pt-32 pb-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background z-10" />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <AnimatedReveal direction="up" delay={0.2}>
              <span className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block">
                {t('hero_subtitle')}
              </span>
            </AnimatedReveal>
            
            <AnimatedReveal direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.1] mb-10 drop-shadow-2xl text-balance">
                {t('hero_title')}
              </h1>
            </AnimatedReveal>
            
            <AnimatedReveal direction="up" delay={0.6}>
              <Link href="/scan" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 text-white tracking-widest text-sm uppercase transition-all duration-500 group rounded-sm backdrop-blur-sm cursor-pointer">
                <span>{t('hero_cta')}</span>
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300 -rotate-90" />
              </Link>
            </AnimatedReveal>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none relative mt-12 lg:mt-0">
            <AnimatedReveal direction="left" delay={0.8} className="relative">
              {/* Abstract decorative element representing watch/time */}
              <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
                 <motion.div 
                    className="absolute inset-0 rounded-full border border-accent/20"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-4 rounded-full border border-accent/10 border-t-accent/50"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/watch-isolated.png`}
                      className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                      alt="Luxury Watch"
                    />
                  </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP SECTION */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {steps.map((step, idx) => (
              <AnimatedReveal key={idx} delay={idx * 0.2} direction="up">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full border border-white/10 bg-background flex items-center justify-center mb-8 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-black">
                    {step.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-4">{step.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-balance">
                    {step.desc}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
