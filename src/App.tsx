/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { Background } from "./components/Background";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { IntroStrip } from "./components/IntroStrip";
import { Projects } from "./components/Projects";
import { System } from "./components/System";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <Background />
      <Navigation />
      
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <IntroStrip />
        <Projects />
        <System />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
