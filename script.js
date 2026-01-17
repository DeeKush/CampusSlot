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

// Global variable to store the resource ID being booked
let currentResourceId = null;

// Global variables for slot-based booking
let startSlot = null;
let endSlot = null;

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

    // Event delegation for booking buttons
    const resourcesView = document.getElementById('resources-view');
    if (resourcesView) {
        resourcesView.addEventListener('click', function(event) {
            const bookBtn = event.target.closest('.book-btn');
            if (bookBtn && !bookBtn.disabled) {
                currentResourceId = parseInt(bookBtn.dataset.id);
                openBookingModal();
            }
        });
    }

    // Modal close handlers
    const closeModalBtn = document.getElementById('close-modal');
    const cancelBtn = document.getElementById('cancel-booking');
    const modal = document.getElementById('booking-modal');

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeBookingModal);
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeBookingModal);
    }

    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeBookingModal();
            }
        });
    }

    // Form submission handler
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
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

// Open booking modal
function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        startSlot = null;
        endSlot = null;
        modal.classList.remove('hidden');
        document.getElementById('error-message').classList.add('hidden');
        renderSlots();
    }
}

// Close booking modal
function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    const form = document.getElementById('booking-form');
    if (modal) {
        modal.classList.add('hidden');
    }
    if (form) {
        form.reset();
    }
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('slots-container').innerHTML = '';
    currentResourceId = null;
    startSlot = null;
    endSlot = null;
}

// Generate time slots from 9:00 AM to 8:00 PM (30-min intervals)
function generateSlots() {
    const slots = [];
    const startHour = 9;
    const endHour = 20;
    
    for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            if (hour === endHour && minute > 0) break;
            
            const period = hour >= 12 ? 'PM' : 'AM';
            const displayHour = hour > 12 ? hour - 12 : hour;
            const displayMinute = minute.toString().padStart(2, '0');
            slots.push(`${displayHour.toString().padStart(2, '0')}:${displayMinute} ${period}`);
        }
    }
    
    return slots;
}

// Render slots in the modal
function renderSlots() {
    const container = document.getElementById('slots-container');
    container.innerHTML = '';
    
    const slots = generateSlots();
    
    slots.forEach(function(slot) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'slot-btn';
        button.textContent = slot;
        button.dataset.slot = slot;
        
        button.addEventListener('click', function() {
            handleSlotClick(slot);
        });
        
        container.appendChild(button);
    });
}

// Handle slot button clicks
function handleSlotClick(slot) {
    if (startSlot === null) {
        startSlot = slot;
        updateSlotSelection();
    } else if (endSlot === null) {
        endSlot = slot;
        updateSlotSelection();
    } else {
        startSlot = slot;
        endSlot = null;
        updateSlotSelection();
    }
}

// Update visual selection of slots
function updateSlotSelection() {
    const allSlots = generateSlots();
    const slotButtons = document.querySelectorAll('.slot-btn');
    
    slotButtons.forEach(function(btn) {
        btn.classList.remove('selected', 'in-range');
    });
    
    if (startSlot === null) return;
    
    const startIndex = allSlots.indexOf(startSlot);
    
    if (endSlot === null) {
        slotButtons[startIndex].classList.add('selected');
    } else {
        const endIndex = allSlots.indexOf(endSlot);
        const minIndex = Math.min(startIndex, endIndex);
        const maxIndex = Math.max(startIndex, endIndex);
        
        for (let i = minIndex; i <= maxIndex; i++) {
            if (i === minIndex || i === maxIndex) {
                slotButtons[i].classList.add('selected');
            } else {
                slotButtons[i].classList.add('in-range');
            }
        }
    }
}

// Get selected slots as array
function getSelectedSlots() {
    if (startSlot === null) return [];
    
    const allSlots = generateSlots();
    const startIndex = allSlots.indexOf(startSlot);
    
    if (endSlot === null) {
        return [startSlot];
    }
    
    const endIndex = allSlots.indexOf(endSlot);
    const minIndex = Math.min(startIndex, endIndex);
    const maxIndex = Math.max(startIndex, endIndex);
    
    return allSlots.slice(minIndex, maxIndex + 1);
}

// Handle booking form submission
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const dateInput = document.getElementById('booking-date').value;
    const errorMsg = document.getElementById('error-message');
    
    if (!dateInput) {
        errorMsg.textContent = 'Please select a date';
        errorMsg.classList.remove('hidden');
        return;
    }
    
    const selectedSlots = getSelectedSlots();
    
    if (selectedSlots.length === 0) {
        errorMsg.textContent = 'Please select at least one time slot';
        errorMsg.classList.remove('hidden');
        return;
    }
    
    // Create booking object
    const newBooking = {
        user: 'Student',
        date: dateInput,
        slots: selectedSlots
    };
    
    // Load resources
    const resources = loadResources();
    const resource = resources.find(r => r.id === currentResourceId);
    
    if (!resource) {
        errorMsg.textContent = 'Resource not found';
        errorMsg.classList.remove('hidden');
        return;
    }
    
    // Check for conflicts
    for (let booking of resource.bookings) {
        if (booking.date === dateInput) {
            for (let slot of selectedSlots) {
                if (booking.slots && booking.slots.includes(slot)) {
                    errorMsg.textContent = 'One or more selected slots are already booked';
                    errorMsg.classList.remove('hidden');
                    return;
                }
            }
        }
    }
    
    // Save booking
    resource.bookings.push(newBooking);
    resource.status = 'booked';
    
    // Update localStorage
    localStorage.setItem('campus_resources', JSON.stringify(resources));
    
    // Close modal and refresh view
    closeBookingModal();
    renderResources();
}
