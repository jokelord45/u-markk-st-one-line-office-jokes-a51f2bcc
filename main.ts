import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Jokes: a single line about office life. The setup is
// the classic reply-all accident; the laugh lands in the last few words,
// on the office truth that IT ignores every ticket — until your shame
// is public, and then they answer at once.
const ENTRY =
  "I hit reply-all by accident and apologized to the whole company — IT replied in seconds; turns out shame is the only ticket they answer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
