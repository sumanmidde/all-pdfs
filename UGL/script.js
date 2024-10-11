// Example: Toggle sidebars (optional)
// Add this to your script.js if you want to toggle sidebars using buttons

document.getElementById('last-updated').textContent = new Date().toLocaleString();
document.getElementById('utc-datetime').textContent = new Date().toLocaleString();

function createTicket() {
    alert("Create Ticket button clicked!");
    // Implement your ticket creation logic here
}
// sidebars
function activateIcon(iconId) {
    document.querySelectorAll('.material-icons').forEach(icon => {
        icon.classList.remove('icon-active');
        icon.classList.add('icon-inactive');
    });
    document.getElementById(iconId + '-icon').classList.add('icon-active');
    document.getElementById(iconId + '-icon').classList.remove('icon-inactive');
}
//Details
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".details-sidebar");
    const dropdownIcon = sidebar.querySelector(".dropdown-icon");

    dropdownIcon.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});