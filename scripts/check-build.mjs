// Plain assertions over the built site. Run after `astro build`.
import { readFileSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const failures = [];

function check(ok, message) {
  if (!ok) failures.push(message);
}

check(
  !/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<button\b/i.test(html),
  "an <a> element contains a <button>",
);

const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ");
check(
  h1.includes("I'm Camilo Blandon") && !h1.includes("I'm a Camilo"),
  'hero headline must read "I\'m Camilo Blandon"',
);

for (const hex of ["#373739", "#2d2154"]) {
  check(!html.toLowerCase().includes(hex), `markup contains hardcoded ${hex}`);
}

const cardLinks = [
  ...html.matchAll(
    /<div\b[^>]*class="([^"]*)"[^>]*>\s*<a\b[^>]*title="(?:View GitHub repository|Visit live site)"/g,
  ),
].map((m) => m[1].split(/\s+/));
check(cardLinks.length > 0, "no card link groups found");
for (const cls of cardLinks) {
  check(
    !cls.includes("opacity-0") &&
      cls.includes("md:opacity-0") &&
      cls.includes("focus-within:opacity-100"),
    "card link group must be visible by default, md-gated and focus-within visible",
  );
}

if (failures.length) {
  for (const f of failures) console.error(`FAIL: ${f}`);
  process.exit(1);
}
console.log("check-build: all assertions passed");
