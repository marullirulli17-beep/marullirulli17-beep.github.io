const services = [
  "Identitas Visual",
  "Poster & Cetak",
  "Konten Sosial",
  "Kemasan & Label",
  "Desain Web",
  "Merchandise",
];

export function ServiceMarquee() {
  const track = [...services, ...services];

  return (
    <div className="marquee border-b border-line bg-ink py-3 text-paper" aria-hidden>
      <div className="marquee-track">
        {track.map((service, index) => (
          <span
            key={`${service}-${index}`}
            className="flex items-center gap-5 px-5 font-mono text-[10px] whitespace-nowrap uppercase tracking-[0.18em]"
          >
            {service}
            <span className="h-1 w-1 rotate-45 bg-sosial" />
          </span>
        ))}
      </div>
    </div>
  );
}
