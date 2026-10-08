/**
 * RISE AND GRIND - Website Application Logic
 * Manages view-state configurations for the dynamic main content area.
 */

// Centralized content database for layout updates
const contentDatabase = {
    mission: {
        header: "RISE AND GRIND",
        title: "Our Mission",
        text: "At Rise and Grind, we believe great mornings begin with great fermentation. Our mission is to preserve the historic art of slow-leavened sourdough baking while energizing our local community. We source 100% organic, stone-ground grains to ensure every loaf has optimal flavor, texture, and nutritional value. No shortcuts, no artificial additives—just passion, water, flour, and time.",
        imageSrc: "https://tasteofhome.com",
        imageAlt: "Smooth artisan bread dough slowly rising in a rustic wooden bowl."
    },
    bread: {
        header: "CRUST & CRUMB",
        title: "Our Bread Collection",
        text: "Every loaf we pull from our stone hearth carries a deeply caramelized crust and an open, airy crumb architecture. From our flagship Country Wild Sourdough to our dense German-style Rye and honey-infused Whole Wheat, our breads are naturally fermented for 36 hours. This slow process breaks down complex starches, resulting in unmatched depth of flavor and easy digestion.",
        imageSrc: "https://stockcake.com",
        imageAlt: "Macro close-up view of rising sourdough starter dough with visible gas bubbles."
    },
    reviews: {
        header: "BAKED TO PERFECTION",
        title: "What Our Community Says",
        text: "“The Country Sourdough here has ruined all other store-bought bread for me. The crunch on the crust is unreal!” – Sarah K. \n\n “True artisan baking. You can actually taste the craftsmanship and quality of the local grains they use. Getting up early for their morning bake is worth it every single time.” – David M.",
        imageSrc: "https://dreamstime.com",
        imageAlt: "A beautifully scored artisan sourdough bread loaf expanding and baking inside a hot woodfired oven."
    }
};

/**
 * Updates the web page layout states, imagery, and copywriting dynamically.
 * @param {string} contentKey - Targeted dataset identity block ('mission' | 'bread' | 'reviews')
 */
function showContent(contentKey) {
    const data = contentDatabase[contentKey];
    if (!data) return;

    // Cache targeted DOM elements
    const headerElement = document.getElementById("page-header");
    const imageElement = document.getElementById("dynamic-img");
    const textContainer = document.getElementById("dynamic-text");

    // Seamlessly transition the content assets
    headerElement.textContent = data.header;
    imageElement.src = data.imageSrc;
    imageElement.alt = data.imageAlt;

    // Structure the inner body text block using updated heading and copy tokens
    textContainer.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.text.replace(/\n\n/g, '<br><br>')}</p>
    `;

    // Manage Sidebar active navigation class stylings
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Query active layout trigger button to attach focus styling rules
    const clickedButton = document.querySelector(`button[onclick="showContent('${contentKey}')"]`);
    if (clickedButton) {
        clickedButton.classList.add("active");
    }
}
