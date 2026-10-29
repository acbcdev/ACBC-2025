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

if (failures.length) {
  for (const f of failures) console.error(`FAIL: ${f}`);
  process.exit(1);
}
console.log("check-build: all assertions passed");
