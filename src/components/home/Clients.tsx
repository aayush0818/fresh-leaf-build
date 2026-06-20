const clients = [
  "Tata",
  "Aditya Birla Group",
  "DRDO",
  "Meril",
  "Monster",
  "Quest",
  "Maple",
  "Jean-Claude Biguine",
  "Palak Jewellers",
  "Solitaa",
  "Ratanshi Kheraj",
  "Body Goals",
  "Gold Cornet",
  "MVVPL",
];

export function Clients() {
  // Duplicate the track so the marquee can loop seamlessly with a -50% translate.
  return (
    <section className="clients-strip" aria-label="Selected clients">
      <div className="clients-marquee">
        {[0, 1].map((dup) => (
          <div className="clients-marquee-track" key={dup} aria-hidden={dup === 1}>
            {clients.map((name) => (
              <span key={`${dup}-${name}`}>{name}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
