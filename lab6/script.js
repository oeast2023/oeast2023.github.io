/**
 * RISE AND GRIND - Router & Active State Manager
 * Handles multi-page routing and button highlighting states across separate files.
 */

function navigateToPage(pageName) {
    // Explicit routing logic to take you directly to the corresponding web page file
    window.location.href = pageName;
}

// Automatically highlight the matching button once the corresponding page loads
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;

    // Cache the sidebar button elements from the DOM
    const btnMission = document.getElementById("btn-mission");
    const btnBread = document.getElementById("btn-bread");
    const btnReviews = document.getElementById("btn-reviews");

    // Clear active highlight styling classes across all buttons first
    const buttons = [btnMission, btnBread, btnReviews];
    buttons.forEach(btn => {
        if (btn) btn.classList.remove("active");
    });

    // Check the active window pathname and match the highlighted styling state
    if (currentPath.includes("mission.html") && btnMission) {
        btnMission.classList.add("active");
    } else if (currentPath.includes("bread.html") && btnBread) {
        btnBread.classList.add("active");
    } else if (currentPath.includes("reviews.html") && btnReviews) {
        btnReviews.classList.add("active");
    }
    // Note: If on index.html, no buttons are highlighted, preserving the primary story layout state.
});
