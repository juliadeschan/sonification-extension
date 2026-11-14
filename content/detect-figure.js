function detectFigures() {
    const figures = document.querySelectorAll("figure");

    for (const figure of figures) {
        figure.style.border = "5px solid red";
    }
}

detectFigures();