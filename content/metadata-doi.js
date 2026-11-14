const metaSelectors = [
    'meta[name="citation_doi"]',
    'meta[property="citation_doi"]',
    'meta[name="dc.identifier"][scheme="doi"]',
    'meta[name="dc.identifier.doi" i]',
    'meta[name="dc.identifier" i]',
    'meta[name="doi" i]',
    'meta[name="prism.doi"]',
    'meta[name="bepress_citation_doi"]',
    'meta[name="eprints.id_number"]'
];

function detectDOIFromMeta() {
    for (const selector of metaSelectors) {
        const element = document.querySelector(selector);
        if (element) {

            const content = element.getAttribute("content");

            if (content) {
                return content;
            }
        }
    }
    return null;
}