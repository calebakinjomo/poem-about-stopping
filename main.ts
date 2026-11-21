import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The hand that doesn't reach
is still a hand.
The door I leave unopened
is still mine to open —
I hold the key,
and hold it still.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
