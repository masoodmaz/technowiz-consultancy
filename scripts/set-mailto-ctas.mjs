import { readFile, writeFile } from "node:fs/promises";

const mailto = "mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry";

const changes = {
  "client/src/components/SiteChrome.tsx": [
    [
      'const logoSrc = "/manus-storage/technowiz_anim_90x122_c128_d100_alphaon_1e11b65e.gif";',
      'const logoSrc = "/manus-storage/technowiz_anim_90x122_c128_d100_alphaon_1e11b65e.gif";\nconst mailto = "mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry";',
    ],
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint tw-btn--sm">Start a conversation <ArrowUpRight /></Link>',
      '<a href={mailto} className="tw-btn tw-btn--mint tw-btn--sm">Start a conversation <ArrowUpRight /></a>',
    ],
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight /></Link>',
      '<a href={mailto} className="tw-btn tw-btn--mint" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight /></a>',
    ],
  ],
  "client/src/pages/Home.tsx": [
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint">Talk to an expert <ArrowRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--mint">Talk to an expert <ArrowRight /></a>`,
    ],
    [
      '<Link href="/contact" className="tw-btn tw-btn--dark">Book a discovery call <ArrowRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--dark">Book a discovery call <ArrowRight /></a>`,
    ],
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint">Start a conversation <ArrowRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--mint">Start a conversation <ArrowRight /></a>`,
    ],
  ],
  "client/src/pages/Services.tsx": [
    [
      '<Link href="/contact" className="tw-btn tw-btn--dark">Book a discovery call <ArrowRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--dark">Book a discovery call <ArrowRight /></a>`,
    ],
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint">Talk to Technowiz <ArrowUpRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--mint">Talk to Technowiz <ArrowUpRight /></a>`,
    ],
  ],
  "client/src/pages/AITestAutomation.tsx": [
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint">Discuss your test estate <ArrowRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--mint">Discuss your test estate <ArrowRight /></a>`,
    ],
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint">Start a conversation <ArrowUpRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--mint">Start a conversation <ArrowUpRight /></a>`,
    ],
  ],
  "client/src/pages/OpenTextSuccessFactors.tsx": [
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint">Explore the integration <ArrowRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--mint">Explore the integration <ArrowRight /></a>`,
    ],
    [
      '<Link href="/contact" className="tw-link">Talk through your landscape <ArrowUpRight /></Link>',
      `<a href="${mailto}" className="tw-link">Talk through your landscape <ArrowUpRight /></a>`,
    ],
  ],
  "client/src/pages/About.tsx": [
    [
      '<Link href="/contact" className="tw-btn tw-btn--mint">Meet the team <ArrowUpRight /></Link>',
      `<a href="${mailto}" className="tw-btn tw-btn--mint">Meet the team <ArrowUpRight /></a>`,
    ],
  ],
};

for (const [path, replacements] of Object.entries(changes)) {
  let source = await readFile(path, "utf8");
  for (const [from, to] of replacements) {
    if (!source.includes(from)) throw new Error(`Expected source was not found in ${path}: ${from}`);
    source = source.replace(from, to);
  }
  await writeFile(path, source);
}

console.log("Updated primary enquiry calls-to-action to mailto links.");
