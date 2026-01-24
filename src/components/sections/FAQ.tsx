"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer financing or payment plans?",
    answer: "Yes, for larger projects, I offer flexible payment schedules. Typically, this involves an upfront deposit followed by milestone-based payments."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A simple brochure site might take 2-3 weeks, while a complex web application could take 2-3 months."
  },
  {
    question: "Do you handle website maintenance?",
    answer: "Absolutely. I offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performs optimally."
  },
  {
    question: "Can you help with SEO?",
    answer: "Yes, I implement SEO best practices during development, including semantic HTML, meta tag optimization, and performance tuning."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border border-border rounded-2xl overflow-hidden bg-background"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/5 transition-colors"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {activeIndex === idx ? (
                <Minus className="w-5 h-5 text-secondary shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-secondary shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
