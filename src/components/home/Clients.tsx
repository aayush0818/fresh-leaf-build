import tata from "@/assets/clients/tata.png";
import drdo from "@/assets/clients/drdo.png";
import adityaBirla from "@/assets/clients/aditya-birla.png";
import monster from "@/assets/clients/monster.png";
import meril from "@/assets/clients/meril.png";

const clients = [
  { name: "Tata", src: tata },
  { name: "Aditya Birla Group", src: adityaBirla },
  { name: "DRDO", src: drdo },
  { name: "Meril", src: meril },
  { name: "Monster", src: monster },
];

export function Clients() {
  // Duplicate the track so the marquee can loop seamlessly with a -50% translate.
  return (
    <section className="clients-strip" aria-label="Selected clients">
      <div className="clients-marquee">
        {[0, 1].map((dup) => (
          <div className="clients-marquee-track" key={dup} aria-hidden={dup === 1}>
            {clients.map((c) => (
              <img key={`${dup}-${c.name}`} src={c.src} alt={c.name} loading="lazy" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
