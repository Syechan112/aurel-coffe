import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui';

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <Container>
        <div className="text-center space-y-6">
          <div className="text-6xl sm:text-8xl font-serif font-normal text-[#D7C6A8]/40 mb-4">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-ink">Page not found</h1>
          <p className="text-lg text-muted-ink max-w-md mx-auto font-light">
            The page you're looking for doesn't exist or has been moved. Let's get you back to exploring.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-[#F3EDE2] rounded-full font-medium hover:bg-[#71675D] transition-colors"
            >
              Go home
            </Link>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 px-6 py-3 border border-ink text-ink rounded-full font-medium hover:bg-ink hover:text-[#F3EDE2] transition-colors"
            >
              Browse coffees
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
