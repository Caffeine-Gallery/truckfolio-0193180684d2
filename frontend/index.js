import { backend } from "declarations/backend";

async function loadBio() {
    try {
        const bio = await backend.getBio();
        document.getElementById('bio-content').innerHTML = bio;
    } catch (error) {
        console.error('Error loading bio:', error);
        document.getElementById('bio-content').innerHTML = 'Error loading bio content.';
    }
}

async function updateVisitCount() {
    try {
        const count = await backend.incrementVisits();
        document.getElementById('visit-count').textContent = count.toString();
    } catch (error) {
        console.error('Error updating visit count:', error);
        document.getElementById('visit-count').textContent = 'Error';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadBio();
    updateVisitCount();
});
