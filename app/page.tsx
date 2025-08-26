import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
          <CompanionCard id="123" name="Neura the Brainy Explorer" topics="Neural Network of the Brain" subject="Science" duration={45} color="#ffda6e"/>

          <CompanionCard id="456" name="Countsy the Number Wizard " topics="Derivates & Integrals" subject="Maths" duration={30} color="#e5d0ff"/>

          <CompanionCard id="789" name="Verba the Vocabulary Builder" topics="Language" subject="English Literature" duration={30} color="#bde7ff"/>

      </section>

      <section className="home-section">
          <CompanionsList title="Recently Completed Sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full"/>
          <CTA />
      </section>
    </main>
  )
}

export default Page