import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '@/components/layout/Header';
import { AnimatedElement } from '@/components/ui';
import { fadeInUp } from '@/hooks/useInViewAnimation';

const Home = lazy(() => import('@/pages/Home'));
const Collection = lazy(() => import('@/pages/Collection'));
const CoffeeDetail = lazy(() => import('@/pages/CoffeeDetail'));
const FlavorExplorer = lazy(() => import('@/pages/FlavorExplorer'));
const OurCraft = lazy(() => import('@/pages/OurCraft'));
const BrewJournal = lazy(() => import('@/pages/BrewJournal'));
const BrewStudio = lazy(() => import('@/pages/BrewStudio'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-[#F3EDE2]">
            <AnimatedElement
              animation={fadeInUp(500)}
              className="flex flex-col items-center gap-4"
            >
              <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-[#332A24] border-t-transparent" />
              <span className="font-serif text-base italic tracking-wide text-[#332A24]/65">
                Loading…
              </span>
            </AnimatedElement>
          </div>
        }
      >
        <div className="flex flex-col min-h-screen bg-[#F3EDE2] text-[#332A24] font-sans">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/coffee/:slug" element={<CoffeeDetail />} />
              <Route path="/flavor-explorer" element={<FlavorExplorer />} />
              <Route path="/craft" element={<OurCraft />} />
              <Route path="/brew" element={<BrewJournal />} />
              <Route path="/brew-studio" element={<BrewStudio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}
