// Toggle client names on taimur.framer.website (Framer project BvCFb9br7hmesCXcUNKg).
// Run with: npx @framer/agent@latest exec -s <session> < scripts/framer/client-names.js
// Set MODE below: "hide" replaces client names with product types (backup version, made 2026-11-27),
// "show" puts the client names back (the live version as of d2e47cbfd).
// Canvas only. Review a screenshot, then publish with Taimur's OK.
const MODE = "show";

const pairs = [
 ["“This works perfect and it’s proven.” Iñigo Vazquez, founder of CheerMyRun","“This works perfect and it’s proven.” Founder of the running app"],
 ["Iñigo Vazquez, founder of CheerMyRun","Founder of the running app"],
 ["CASE STUDY / CHEERMYRUN","CASE STUDY / RUNNING APP"],
 ["For CheerMyRun, Ketro and JTX I did","For a running app, a pain relief cream and a trading app I did"],
 ["Six CheerMyRun reels with","Six reels for a running app, with"],
 ["Three CheerMyRun reels with","Three reels for a running app, with"],
 ["The CheerMyRun campaign","The running app campaign"],
 ["For CheerMyRun I made","For a running app I made"],
 ["CheerMyRun ran in","The running app campaign ran in"],
 ["Brands I’ve","Products I’ve"],
 ["CheerMyRun","Running app"],["Ketro","Pain relief cream"],["JTX","Trading app"],
 ["Lucky Growth","Business funding"],["NYMobile","Phone numbers"],
];
const P = MODE === "hide" ? pairs : pairs.map(([a,b]) => [b,a]);
const fix = s => { if (typeof s !== "string") return s; for (const [a,b] of P) s = s.split(a).join(b); return s; };
const has = s => typeof s === "string" && P.some(([a]) => s.includes(a));
const out = [];
for (const [page, path] of [["augiA20Il","/"],["YA23Egl3E","/brazil"],["zmDbl_GSD","/germany"]]) {
  const runs = await framer.agent.getDescendantsOfTypes({ id: page, types: ["TextRun"] }, { pagePath: path });
  for (const n of runs) { const t = n.attributes?.text || ""; if (!has(t)) continue;
    const id = n.id.replace(/^v:/,"").replace(/:0:\d+$/,"");
    for (const [a,b] of P) if (t.includes(a)) await framer.agent.replaceText({ id, searchText: a, replaceText: b }, { pagePath: path }).catch(()=>{});
  }
  const ci = await framer.agent.getDescendantsOfTypes({ id: page, types: ["ComponentInstanceNode"] }, { pagePath: path });
  for (const n of ci) for (const [k,v] of Object.entries(n.attributes || {}))
    if (k.startsWith("$control__") && has(v)) await framer.agent.applyChanges("SET " + n.id + " " + k + "=" + JSON.stringify(fix(v)), { pagePath: path }).catch(e => out.push("ERR " + n.id + " " + e.message));
  const runs2 = await framer.agent.getDescendantsOfTypes({ id: page, types: ["TextRun"] }, { pagePath: path });
  for (const n of runs2) if (has(n.attributes?.text)) out.push("LEFT " + path + " " + n.id + " " + n.attributes.text.slice(0,80));
}
// Videos CMS: Brand and Format fields
const v = await framer.getCollection("qgModfbit");
for (const it of await v.getItems()) { const b = it.fieldData.RI9_HBo06?.value || "", f = it.fieldData.xOiA7Bs_r?.value || "";
  if (has(b) || has(f)) await it.setAttributes({ fieldData: { RI9_HBo06: { type: "string", value: fix(b) }, xOiA7Bs_r: { type: "string", value: fix(f) } } }); }
// Brand ticker CMS ("Brand collaborations"). Names mode: CheerMyRun, Ketro, JTX only. Hide mode adds Business funding and Phone numbers.
const bc = await framer.getCollection("DOel7RfG4");
let bitems = await bc.getItems();
for (const it of bitems) { const nm = it.fieldData.CAEFCnYxR.value; if (has(nm)) await it.setAttributes({ fieldData: { CAEFCnYxR: { type: "string", value: fix(nm) } } }); }
bitems = await bc.getItems();
const names = bitems.map(i => i.fieldData.CAEFCnYxR.value);
if (MODE === "show") { const extra = bitems.filter(i => ["Lucky Growth","NYMobile","Business funding","Phone numbers"].includes(i.fieldData.CAEFCnYxR.value)); if (extra.length) await bc.removeItems(extra.map(i => i.id)); }
else { const tmpl = bitems[0].fieldData; const mk = name => { const fd = {}; for (const [k,x] of Object.entries(tmpl)) if (x.value !== undefined) fd[k] = { type: x.type, value: x.value }; fd.CAEFCnYxR = { type: "string", value: name }; return { slug: name.toLowerCase().replace(/ /g,"-"), fieldData: fd }; };
  const add = ["Business funding","Phone numbers"].filter(n => !names.includes(n)).map(mk); if (add.length) await bc.addItems(add); }
// Layer names (show up in page source)
const layer = { G9S9BY57C: ["Brands · CheerMyRun, Ketro, JTX","Products · Running app, Pain relief cream, Trading app"], Gq2M3fJiT: ["Case study · CheerMyRun","Case study · Running app"] };
for (const [id,[show,hide]] of Object.entries(layer)) { const n = await framer.getNode(id); if (n) await n.setAttributes({ name: MODE === "hide" ? hide : show }).catch(()=>{}); }
console.log(MODE, "done.", (await bc.getItems()).map(i => i.fieldData.CAEFCnYxR.value).join(", "));
console.log(out.join("\n"));
