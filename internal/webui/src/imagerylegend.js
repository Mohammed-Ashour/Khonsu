// Exact provider legends are bundled by the server, not downloaded by the browser.
export function imageryLegend(element, layer) {
  const legend = layer?.legend;
  if (!legend || !/^\/api\/v1\/imagery-legend\?layer=[a-z0-9-]+$/.test(legend.url ?? '')) return null;
  const details = element('details', 'imagery-legend');
  const summary = element('summary', '', `${layer.name} scale${legend.unit ? ` (${legend.unit})` : ''}`);
  const image = element('img', 'imagery-legend-image');
  image.src = legend.url;
  image.alt = String(legend.description || `${layer.name} provider colour scale`);
  const description = element('p', 'note', legend.description);
  details.append(summary, image, description);
  if (/^https:\/\/gibs\.earthdata\.nasa\.gov\/legends\/[A-Za-z0-9_-]+\.png$/.test(legend.source_url ?? '')) {
    const link = element('a', '', 'NASA GIBS original legend');
    link.href = legend.source_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    details.append(link);
  }
  return details;
}
