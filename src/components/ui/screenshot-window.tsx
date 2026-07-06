import Image from "next/image";

export function ScreenshotWindow({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-50">
      {/* Browser-style dots */}
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top pt-6"
      />
    </div>
  );
}