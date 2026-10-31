import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Container, Section } from "@/components/ui";

export const CoffeeNotFound: React.FC = () => {
  return (
    <Section className="bg-[#F3EDE2]">
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[#77765B]">
            Collection / Not found
          </p>

          <h1 className="font-serif text-4xl text-[#332A24] sm:text-5xl">
            Coffee not found.
          </h1>

          <Link
            to="/collection"
            className="mt-8 inline-flex items-center gap-2 text-[13px] text-[#332A24] underline underline-offset-4"
          >
            <ArrowLeft size={16} />
            Return to collection
          </Link>
        </div>
      </Container>
    </Section>
  );
};
