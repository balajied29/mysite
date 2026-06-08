const items = [
  "OnlyBees",
  "Lum Travels",
  "PRIME DSPP",
  "Little Token",
  "CLTR",
  "Cherry Blossom",
  "Teer Quant",
];

const track = items.map((item) => `${item}  ·  `).join("").repeat(4);

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track" aria-hidden="true">
        <span>{track}</span>
        <span>{track}</span>
      </div>
    </div>
  );
}
