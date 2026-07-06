"use client";

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pb-24 pt-4 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* Ambient glow sitting behind the card */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-x-10 -inset-y-10 -z-10 opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, var(--accent-light) 0%, transparent 70%)",
            }}
          />

          {/* Video card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_0_60px_-15px_var(--accent-glow)]">
            {/* Subtle inner top highlight for glass-like edge */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <video
              className="aspect-video w-full object-cover"
              src="product.mp4"
              poster="/videos/poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
}