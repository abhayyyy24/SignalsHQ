"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate, type Variants } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

const NOISE_PATTERN =
  'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")';

const fieldVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 28 } },
};

function FloatingField({
  id,
  label,
  type = "text",
  as = "input",
}: {
  id: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  const sharedProps = {
    id,
    required: true,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className:
      "peer w-full bg-transparent pb-3 pt-6 text-foreground outline-none placeholder-transparent",
  };

  return (
    <motion.div variants={fieldVariant} className="relative border-b border-border">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 transition-all duration-200 ${
          active ? "top-1 text-xs text-accent-light" : "top-6 text-base text-muted"
        }`}
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea {...sharedProps} rows={3} className={sharedProps.className + " resize-none"} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      <div
        className={`absolute bottom-0 left-0 h-px bg-accent-light transition-all duration-300 ${
          focused ? "w-full" : "w-0"
        }`}
      />
    </motion.div>
  );
}

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section id="contact" className="relative bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
            Contact
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's talk about your firm
          </h2>
          <p className="mt-4 text-muted">
            Tell us a bit about your firm and we'll get back to you within one
            business day.
          </p>
        </div>

        <motion.div
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="group relative overflow-hidden rounded-[32px] border border-border bg-surface p-8 sm:p-10"
        >
          {/* Mouse-tracking glow */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`radial-gradient(500px at ${mouseX}px ${mouseY}px, var(--accent-muted), transparent)`,
            }}
          />

          {/* Noise texture */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: NOISE_PATTERN }}
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 flex flex-col items-center gap-3 py-10 text-center"
            >
              <CheckCircle2 size={32} className="text-accent-light" />
              <p className="font-heading text-lg font-semibold text-foreground">
                Message sent
              </p>
              <p className="text-sm text-muted">We'll be in touch shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col gap-7"
            >
              <FloatingField id="name" label="Full name" />
              <FloatingField id="email" label="Work email" type="email" />
              <FloatingField id="firm" label="Firm name" />
              <FloatingField id="message" label="Message" as="textarea" />

              <motion.div variants={fieldVariant} className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-light py-4 text-[15px] font-semibold text-accent-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}