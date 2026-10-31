import React, { useState } from 'react';
import { Container, Section, SectionHeading, Button } from '@/components/ui';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only — no backend. Show confirmation.
    setSent(true);
  };

  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="CONTACT"
            title="Say hello."
            description="Wholesale, wholesale, or just a question about a bag. We read everything."
          />
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-serif text-[#F3EDE2] mb-6">Get in touch</h3>
              <div className="space-y-4 text-[#D7C6A8] text-sm">
                <p>
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#D7C6A8]/60 mb-1">Roastery</span>
                  14B Lantern Lane, Docklands<br />
                  Melbourne, VIC 3000
                </p>
                <p>
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#D7C6A8]/60 mb-1">Email</span>
                  <a href="mailto:hello@aurel.coffee" className="hover:text-[#FFFCF7] transition-colors">
                    hello@aurel.coffee
                  </a>
                </p>
                <p>
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#D7C6A8]/60 mb-1">Hours</span>
                  Mon–Sat, 8am–4pm
                </p>
                <p>
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#D7C6A8]/60 mb-1">Social</span>
                  <span className="opacity-60">Instagram @aurelroastery (demo)</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#F3EDE2] rounded-2xl p-8 sm:p-10">
                {sent ? (
                  <div className="text-center py-12">
                    <p className="text-4xl mb-4">✦</p>
                    <h3 className="text-2xl font-serif text-ink mb-2">Thank you.</h3>
                    <p className="text-muted-ink text-sm">We will reply within one business day. This is a demo — no message was actually sent.</p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                      className="mt-6 text-sm text-ink underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-ink mb-1.5">Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-md border border-[#D9D0C4] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D7C6A8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink mb-1.5">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-md border border-[#D9D0C4] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D7C6A8]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-ink mb-1.5">Message</label>
                      <textarea
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-[#D9D0C4] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D7C6A8] resize-none"
                        placeholder="Ask about a bag, a wholesale account, or just say hi."
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <Button type="submit" className="px-6">Send message</Button>
                      <span className="text-xs text-muted-ink">Demo form — nothing is transmitted.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}