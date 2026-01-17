// Default resources data
const defaultResources = [
    {
        id: 1,
        name: "Study Room A",
        type: "Study Room",
        location: "Library - 2nd Floor",
        status: "available",
        bookings: []
    },
    {
        id: 2,
        name: "Sports Turf",
        type: "Turf",
        location: "Sports Complex",
        status: "available",
        bookings: []
    },
    {
        id: 3,
        name: "MacBook Pro",
        type: "Laptop",
        location: "IT Department",
        status: "booked",
        bookings: []
    },
    {
        id: 4,
        name: "USB-C Charger",
        type: "Charger",
        location: "Student Center",
        status: "available",
        bookings: []
    },
    {
        id: 5,
        name: "Conference Room B",
        type: "Meeting Room",
        location: "Admin Block - 3rd Floor",
        status: "available",
        bookings: []
    },
    {
        id: 6,
        name: "Dell 27-inch Monitor",
        type: "Monitor",
        location: "Computer Lab 1",
        status: "available",
        bookings: []
    },
    {
        id: 7,
        name: "Basketball Set",
        type: "Sports Equipment",
        location: "Sports Complex",
        status: "booked",
        bookings: []
    }
];

// Global variable to track the currently active view
let currentView = 'dashboard';

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {

    // Get the sidebar container element
    const sidebar = document.getElementById('sidebar');

    // Safety check
    if (!sidebar) {
        console.log("Sidebar not found");
        return;
    }

    // Show default view on load
    hideAllViews();
    showView(currentView);

    // Add ONE click event listener to the sidebar (event delegation)
    sidebar.addEventListener('click', function(event) {

        // Prevent default link behavior
        event.preventDefault();

        // Find the clicked sidebar link
        let clickedLink = event.target.closest('.sidebar-link');

        // If no link was clicked, do nothing
        if (!clickedLink) return;

        // Get the view name from the data-view attribute
        const viewName = clickedLink.getAttribute('data-view');

        // If no view name found, do nothing
        if (!viewName) return;

        // Update the global currentView variable
        currentView = viewName;

        // Hide all view sections
        hideAllViews();

        // Show the selected view
        showView(viewName);

        // If Browse Resources is clicked, render the resources
        if (viewName === 'resources') {
            renderResources();
        }

        // Update active state on sidebar links
        updateActiveSidebarLink(clickedLink);
    });
});

// Function to hide all view sections
function hideAllViews() {
    const allViews = document.querySelectorAll('.view-section');

    allViews.forEach(function(view) {
        view.classList.add('hidden');
    });
}

// Function to show a specific view
function showView(viewName) {
    const viewId = viewName + '-view';
    const viewElement = document.getElementById(viewId);

    if (viewElement) {
        viewElement.classList.remove('hidden');
    }
}

// Function to update the active state on sidebar links
function updateActiveSidebarLink(clickedLink) {
    const allLinks = document.querySelectorAll('.sidebar-link');

    allLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    clickedLink.classList.add('active');
}

// Load resources from localStorage or use defaults
function loadResources() {
    const stored = localStorage.getItem('campus_resources');
    
    if (stored) {
        return JSON.parse(stored);
    } else {
        localStorage.setItem('campus_resources', JSON.stringify(defaultResources));
        return defaultResources;
    }
}

// Create a resource card element
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    const statusClass = resource.status === 'available' ? 'status-available' : 'status-booked';
    
    card.innerHTML = `
        <h3 class="resource-name">${resource.name}</h3>
        <p class="resource-type"><strong>Type:</strong> ${resource.type}</p>
        <p class="resource-location"><strong>Location:</strong> ${resource.location}</p>
        <p class="resource-status ${statusClass}">
            <strong>Status:</strong> ${resource.status}
        </p>
        <button class="book-btn" data-id="${resource.id}" ${resource.status === 'booked' ? 'disabled' : ''}>
            ${resource.status === 'available' ? 'Book Now' : 'Not Available'}
        </button>
    `;
    
    return card;
}

// Render all resources to the view
function renderResources() {
    const container = document.getElementById('resources-view');
    
    if (!container) return;
    
    // Clear existing content except the heading
    const heading = container.querySelector('h2');
    container.innerHTML = '';
    if (heading) {
        container.appendChild(heading);
    }
    
    // Create a grid container for cards
    const grid = document.createElement('div');
    grid.className = 'resources-grid';
    
    // Load and render resources
    const resources = loadResources();
    
    resources.forEach(function(resource) {
        const card = createResourceCard(resource);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
}
