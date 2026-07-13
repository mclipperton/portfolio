import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports a static homepage for GitHub Pages", async () => {
  const [html, layout, page] = await Promise.all([
    readFile(new URL("../out/index.html", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(html, /<title>Mark Clipperton \| Product Designer<\/title>/i);
  assert.match(html, /Designing products that feel clear, confident, and easy to trust\./i);
  assert.match(html, /Mark Clipperton/i);
  assert.match(html, /Product designer based in the UK/i);
  assert.match(html, /fintech onboarding/i);
  assert.match(html, /og\.png/i);
  assert.doesNotMatch(html, /headers\(\)|vinext|wrangler/i);

  assert.match(layout, /NEXT_PUBLIC_SITE_PATH/);
  assert.match(layout, /NEXT_PUBLIC_SITE_URL/);
  assert.match(page, /mark-clipperton\.jpg/);
  assert.match(page, /assetPath/);

  await assert.rejects(access(new URL("../app/_sites-preview/", root)));
});
