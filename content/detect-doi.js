function detectDOI() {
    const doi = detectDOIFromMeta();
    if (doi ) {
        document.body.style.border = "5px solid red";
        detectFigures();
    }
}

detectDOI();