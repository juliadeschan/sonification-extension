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
    console.log("DOI metadata detector is running");

    for (const selector of metaSelectors) {
        console.log("Testing selector:", selector);

        const element = document.querySelector(selector);
        if (element) {
            console.log("MATCH:", element);

            const content = element.getAttribute("content");

            if (content) {
                return content;
            }
        }
    }
    console.log("No DOI metadata found.");
    return null;
}