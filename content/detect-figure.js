async function detectFigures() {
    const selectors = [
        "figure",
        '[role="figure"]',
        '[class*="fig" i]',
        '[id*="fig" i]'
    ];

    let figures = [];
    let figureEncoding = null;

    for (const selector of selectors) {
        figures = document.querySelectorAll(selector);

        if (figures.length > 0) {
            figureEncoding = selector;
            break;
        }
    }

    for (const figure of figures) {
        // exclude such "figures" that are only in navigation or other sections of the document
        if (
            figure.closest("nav") ||
            figure.closest("header") ||
            figure.closest("footer")
        ) {
            continue;
        }

        if (figure.querySelector(".sonify-button")) {
            continue;
        }

        figure.style.border = "5px solid red";

        const sonifyButton = document.createElement("button");
        const interactButton = document.createElement("button")
        
        sonifyButton.className = "sonify-button";
        interactButton.className = "interact-button";

        sonifyButton.textContent = "Sonify";
        interactButton.textContent = "Interact";
        
        sonifyButton.addEventListener("click", async () => {
            await Tone.start();

            const synth = new Tone.Synth().toDestination();

            const now = Tone.now();

            synth.triggerAttackRelease("C4", "8n", now);
            synth.triggerAttackRelease("E4", "8n", now + 0.2);
            synth.triggerAttackRelease("G4", "8n", now + 0.4);
        });

        interactButton.addEventListener("click", () => { interactiveSonification() });
        figure.appendChild(sonifyButton);
        figure.appendChild(interactButton);
    }
}