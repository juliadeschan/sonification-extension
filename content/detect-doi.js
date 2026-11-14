function detectDOI() {
    const doi = detectDOIFromMeta();
    if (doi ) {
        console.log("DOI detected: ", doi);
        document.body.style.border = "5px solid red";
    } else {
        console.log("No DOI detected. ");
    }
}

detectDOI();