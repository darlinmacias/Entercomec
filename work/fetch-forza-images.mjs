const ids = ['FVP-1201N', 'RHT-06NC', 'FVP-3302B', 'FVP-6630B', 'PS-001W'];
for (const id of ids) {
  const url = `https://www.forzaups.com/es/productos/interna/${id}-esp/`;
  const html = await (await fetch(url)).text();
  const snippets = [...html.matchAll(/.{0,180}(?:api|graphql|json|s3|image).{0,260}/gi)].map(m => m[0]);
  console.log(id, snippets.slice(0,12).join('\n  '));
}
