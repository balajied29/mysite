export type Post = {
  slug: string;
  title: string;
  date: string;
  sections: Section[];
};

export type Section = {
  heading?: string;
  body?: string;
  stat?: { value: string; label: string; note?: string }[];
  table?: { cols: string[]; rows: (string | { text: string; highlight?: boolean })[][] };
  list?: { num: string; heading: string; body: string }[];
  note?: string;
};

export const posts: Post[] = [
  {
    slug: "teer-project",
    title: "Teer Quant: is my model better than random?",
    date: "Jun 2026",
    sections: [
      {
        body: "An 18-month build log. Five rebuilds. One breakthrough.",
      },
      {
        heading: "First, the game.",
        body: "Teer is a 200-year-old archery lottery in Meghalaya, India. Each day, two rounds are played — R1 and R2. The result is a two-digit number, 00 to 99. That's 100 possible outcomes per round. Random chance gives you a 1% hit rate. The entire modelling problem is: can you do better than that?",
      },
      {
        heading: "My first model was worse than a coin flip.",
        body: "After 18 months of walk-forward testing on version 6.0:",
        stat: [
          { value: "−1.70", label: "Sharpe ratio", note: "deeply unprofitable" },
          { value: "−1,200", label: "units lost", note: "net P&L" },
          { value: "4.5%", label: "hit rate", note: "random baseline = 5.0%" },
        ],
        note: "AN EXPENSIVE RANDOM NUMBER GENERATOR",
      },
      {
        heading: "I was measuring the wrong things.",
        body: "v6.0 used 6 features. 3 carried signal — the others just added noise.",
        stat: [
          { value: "0.04", label: "Entity frequency" },
          { value: "0.31", label: "Head-to-head" },
          { value: "0.02", label: "Recent streak" },
          { value: "0.01", label: "Target area" },
          { value: "0.41", label: "Rest days" },
          { value: "0.21", label: "Fatigue" },
        ],
        note: "HALF THE FEATURES WERE DEAD WEIGHT",
      },
      {
        heading: "Fix #1 — surgery: delete what doesn't work.",
        body: "Killed 3 dead features. Redistributed weight into the only three that actually predicted:",
        stat: [
          { value: "52%", label: "Rest days", note: "how long since the club last played" },
          { value: "38%", label: "Head-to-head", note: "what these two clubs do when they meet" },
          { value: "10%", label: "Fatigue", note: "penalty for clubs overbooked this week" },
        ],
        note: "LESS IS MORE. NOISE BURNS CAPITAL.",
      },
      {
        heading: "Fix #2 — learn when not to play.",
        body: "Some clubs are statistically unpredictable. I built a veto list and stopped betting them.",
        stat: [
          { value: "43%", label: "of capital protected", note: "by simply not betting on coin flips" },
        ],
        note: "DON'T PLAY: Jaiaw (3.1%), Kynthuplang (3.6%), Rangbiria (6.7%), Malki (veto)\nDO PLAY: Laitumkhrah (16.7%), Senglang (10.7%), Combined 12 (9.9%), Laitkor (9.7%)",
      },
      {
        heading: "Fix #3 — don't pick a single number. Pick a neighborhood.",
        body: "Old approach: top-5 standalone digits. New approach: top-4 nodes, each expanded ±1.\n\nPrimary: 27  45  63  84\n±1 Neighbors: 26  28  44  46  62  64  83\n\n37.5% of misses landed within ±2. Proof the signal was real — just not precise enough to spike.",
      },
      {
        heading: "Five iterations. Every number moved the right direction.",
        table: {
          cols: ["Version", "Sharpe", "Hit rate", "Verdict"],
          rows: [
            ["v6.0", "−1.70", "4.5%", "disaster"],
            ["v6.1", "−1.44", "4.5%", "disaster"],
            ["v6.2", "−0.61", "5.8%", "progress"],
            ["v6.4", "−0.51", { text: "8.3%", highlight: true }, { text: "edge", highlight: true }],
          ],
        },
        note: "+3.3 POINTS ABOVE RANDOM. In a 100-digit game, that's a real edge.",
      },
      {
        heading: "2026 became the first profitable year.",
        stat: [
          { value: "+110", label: "units", note: "vs. −1,200 in year one" },
          { value: "94,400", label: "live bankroll" },
          { value: "6/14", label: "rounds vetoed" },
          { value: "3/8", label: "within ±2" },
        ],
      },
      {
        heading: "What it taught me about every model.",
        list: [
          { num: "01", heading: "Measure against random.", body: "If you can't beat a coin flip, your features are noise." },
          { num: "02", heading: "Know when not to predict.", body: "A veto list beats a smarter algorithm." },
          { num: "03", heading: "Spread, don't spike.", body: "Neighborhoods beat point predictions when signal is weak." },
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
