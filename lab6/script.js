/**
 * RISE AND GRIND - Router & Active State Manager
 * Ensures clicking a sidebar button routes the user to the correct page
 * and handles matching active style configurations.
 */

/**
 * Handles browser window navigation to alternative page files.
 * @param {string} pageName - The filename to target (e.g., 'index.html', 'bread.html')
 */
function navigateToPage(pageName) {
    // Standard routing logic to load independent HTML documents
    window.location.href = pageName;
}

// Automatically highlight the correct button depending on which file is open
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;

    // Cache layout navigation buttons from the DOM
    const btnMission = document.getElementById("btn-mission");
    const btnBread = document.getElementById("btn-bread");
    const btnReviews = document.getElementById("btn-reviews");

    // Remove active style classes across all elements to reset states safely
    const buttons = [btnMission, btnBread, btnReviews];
    buttons.forEach(btn => {
        if (btn) btn.classList.remove("active");
    });

    // Check the active window pathname and match the highlighted styling state
    if (currentPath.includes("reviews.html") && btnReviews) {
        btnReviews.classList.add("active");
    } else if (currentPath.includes("bread.html") && btnBread) {
        btnBread.classList.add("active");
    } else if (btnMission) {
        // Fallback default state highlights the landing index.html page
        btnMission.classList.add("active");
    }
});
