import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: race condition by letting the loser delete the database";

// Mirror the sealed gate: 1-100 chars of UTF-8 text, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
