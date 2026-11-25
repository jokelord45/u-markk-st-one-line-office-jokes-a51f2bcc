import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Jokes: a single line about office life. The setup is
// the classic reply-all accident; the laugh lands in the last few words,
// on the office truth that IT never answers — until you embarrass
// yourself in front of the whole company, and then they reply at once.
const ENTRY =
  "I hit reply-all by accident and apologized to the whole company, which is how I finally got a reply from IT.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
