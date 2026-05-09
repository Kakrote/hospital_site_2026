"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { DepartmentFAQ } from "../lib";

type FAQAccordionProps = {
  items: DepartmentFAQ[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items.length) {
    return (
      <p className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
        FAQ content can be added in the matching department JSON file and will appear here automatically.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={`${faq.question}-${index}`} className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#1566a8]/10 to-[#d6d61d]/10 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />

            <div
              className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#1566a8] bg-white shadow-lg"
                  : "border-slate-200 bg-white hover:border-[#1566a8]/30 hover:shadow-md"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
              >
                <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center sm:gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? "bg-[#1566a8] text-white" : "bg-slate-100 text-[#1566a8]"}`}>
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h3 className={`text-base font-semibold leading-snug transition-colors duration-300 sm:text-lg ${isOpen ? "text-[#1566a8]" : "text-slate-900 group-hover:text-[#1566a8]"}`}>
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-[#1566a8] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen ? (
                <div className="border-t border-slate-100 px-4 pb-5 pt-0 sm:px-6">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
