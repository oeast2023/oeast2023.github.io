// Clean text dataset configuration mapping out button targets
const pageData = {
    mission: {
        header: "RISE AND GRIND",
        title: "Our Mission",
        text: "<p>At Rise and Grind, we believe great mornings begin with great fermentation. Our mission is to preserve the historic art of slow-leavened sourdough baking while energizing our local community. We source 100% organic, stone-ground grains to ensure every loaf has optimal flavor, texture, and nutritional value. No shortcuts, no artificial additives—just passion, water, flour, and time.</p>"
    },
    bread: {
        header: "CRUST & CRUMB",
        title: "Our Bread Collection",
        text: "<p>Every loaf we pull from our stone hearth carries a deeply caramelized crust and an open, airy crumb architecture. From our flagship Country Wild Sourdough to our dense German-style Rye and honey-infused Whole Wheat, our breads are naturally fermented for 36 hours. This slow process breaks down complex starches, resulting in unmatched depth of flavor and easy digestion.</p>"
    },
    reviews: {
        header: "BAKED TO PERFECTION",
        title: "What Our Community Says",
        text: "<p><em>“The Country Sourdough here has ruined all other store-bought bread for me. Knowing it all comes from an old family starter named Andrew Barth-Feldman makes it taste even more special!”</em> – Sarah K.</p><p style='margin-top: 15px;'><em>“True artisan baking. You can actually taste the craftsmanship, time, and quality of the local heirloom grains they use. Getting up early for their morning bake is worth it every single time.”</em> – David M.</p>"
    }
};

/**
 * Sweeps layout fields to transition text values and picture locations locally
 * @param {string} pageKey - Target identifier
 */
function updatePageContent(pageKey) {
    const selectedContent = pageData[pageKey];
    if (!selectedContent) return;

    // 1. Swap layout properties directly from internal memories safely
    document.getElementById("page-header").textContent = selectedContent.header;
    document.getElementById("dynamic-img").src = selectedContent.imageSrc;
    document.getElementById("dynamic-img").alt = selectedContent.imageAlt;
    
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
    document.getElementById("dynamic-img").alt = "Heirloom bread dough rising closely inside a baker's bowl";
    
    document.getElementById("dynamic-text").innerHTML = `
        <h2>The Legend of Meemaw & Andrew Barth-Feldman</h2>
        <p>Every single loaf of bread pulled from the blazing hearths here at Rise and Grind shares a single ancestral heartbeat. Our baking lineage traces all the way back to my great-great-great-great-great Meemaw, who cultivated an extraordinary, resilient wild yeast culture generations ago.</p>
        <p style="margin-top: 15px;">She named this living sourdough starter <strong>Andrew Barth-Feldman</strong>. Through cross-country travels, challenging winters, historic migration, and the passing of over a century, Andrew Barth-Feldman has been carefully kept alive—fed meticulously every single day like a cherished family member. Today, all of our bread is derived entirely from this ancient starter. When you taste our bread, you are experiencing pure living history.</p>
    `;

    // Strip out active focuses across buttons
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
}
