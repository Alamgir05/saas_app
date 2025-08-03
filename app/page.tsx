import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (

      <main>
          <h1>Popular Companion</h1>
          <section className="home-section">
              <CompanionCard
                  id="123"
                  name="Neura the Brainy Explorer"
                  topic="Neural Network of the Brain"
                  subject="Science"
                  duration={45}
                  color="#ffda6e"

              />
              <CompanionCard
                  id="456"
                  name="Countsy the Number Wizard"
                  topic="Derivation and Integrals"
                  subject="Science"
                  duration={30}
                  color="#e5d0ff"

              />
              <CompanionCard
                  id="789"
                  name="Verba the Vocabulary Builder"
                  topic="English Literature"
                  subject="English"
                  duration={30}
                  color="#57C785"

              />
          </section>

          <section className="home-section">
              <CompanionList
              title="Recent completed sessions"
              companions={recentSessions}
              className="w-2/3 max-lg:w-full"
              />

              <Cta />
          </section>
      </main>

  )
}

export default Page