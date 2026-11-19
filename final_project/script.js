const pageData = {
    pyramid: {
        header: "",
        title: "",
        text: "<p>.</p>"
    },
    olive: {
        header: "",
        title: "",
        text: "<p></p>"
    },
    ranch: {
        header: "",
        title: "",
        text: "<p></p>"
    },
  statue: {
        header: "",
        title: "",
        text: "<p>.</p>"
    },
    lighthouse: {
        header: "",
        title: "",
        text: "<p></p>"
    },
    pirates: {
        header: "",
        title: "",
        text: "<p></p>"
    },
    rhode: {
        header: "",
        title: "",
        text: "<p></p>"
    },
    wonder: {
        header: "",
        title: "",
        text: "<p></p>"
    }
};


function updatePageContent(pageKey) {
    const selectedContent = pageData[pageKey];
    if (!selectedContent) return;

    // 1. Swap layout properties directly from internal memories safely
    document.getElementById("page-header").textContent = selectedContent.header;
    
    document.getElementById("dynamic-text").innerHTML = `
        <h2>${selectedContent.title}</h2>
        ${selectedContent.text}
    `;

    // 2. Clear highlighting style configurations across sidebar elements
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // 3. Mount target active highlighting configuration
    const activeTargetBtn = document.getElementById(`btn-${pageKey}`);
    if (activeTargetBtn) {
        activeTargetBtn.classList.add("active");
    }
}

/**
 * Restores everything back to Meemaw's original starter history view layout
 */
function resetToHome() {
    document.getElementById("page-header").textContent = "RISE AND GRIND";
    
    document.getElementById("dynamic-text").innerHTML = `
        <h2>What is a wonder</h2>
                    <p>Wow I’m talking about a wonder..</p>
                    <p style="margin-top: 15px;">Wow you’re talking about a wonder.</p>
    `;

    // Strip out active focuses across buttons
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
