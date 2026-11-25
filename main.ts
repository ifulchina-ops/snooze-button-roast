import { mkdirSync, writeFileSync } from "node:fs";

// Snooze Button Roast: one line, spoken to an alarm clock that rang
// at 6 AM on a Saturday. The alarm struts in like it pays rent in the
// house, so the roast fires it from the only job it ever had: waking
// its owner up. Fired on a Saturday, of all days — it never stood
// a chance.
// The file holds exactly the roast, no trailing newline, so the sealed
// gate reads one line of 1-200 characters and nothing else.
const LINE =
  "6 AM on a Saturday and my alarm rings like it pays rent here — mate, your only job is waking me up, and today you're fired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
