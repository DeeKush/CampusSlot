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

        // If My Bookings is clicked, render bookings
        if (viewName === 'bookings') {
            renderBookings();
        }

        // If Analytics is clicked, render analytics
        if (viewName === 'analytics') {
            renderAnalytics();
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

// Show message in a container
function showMessage(container, text, type) {
    // Remove any existing messages
    const existingMsg = container.querySelector('.message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    // Create new message element
    const message = document.createElement('div');
    message.className = `message msg-${type}`;
    message.textContent = text;
    
    // Insert at the beginning of container
    container.insertBefore(message, container.firstChild.nextSibling);
}

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
    
    // Always show as available for booking
    card.innerHTML = `
        <h3 class="resource-name">${resource.name}</h3>
        <p class="resource-type"><strong>Type:</strong> ${resource.type}</p>
        <p class="resource-location"><strong>Location:</strong> ${resource.location}</p>
        <p class="resource-bookings">
            <strong>Total Bookings:</strong> ${resource.bookings ? resource.bookings.length : 0}
        </p>
        <button class="book-btn" data-id="${resource.id}">
            Book Now
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
    
    if (resources.length === 0) {
        showMessage(container, 'No resources available right now.', 'info');
        return;
    }
    
    resources.forEach(function(resource) {
        const card = createResourceCard(resource);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
}

// Render bookings view
function renderBookings() {
    const container = document.getElementById('bookings-view');
    if (!container) return;
    
    // Clear existing content except heading
    const heading = container.querySelector('h2');
    container.innerHTML = '';
    if (heading) {
        container.appendChild(heading);
    }
    
    // Load resources and get user bookings
    const resources = loadResources();
    const userBookings = [];
    
    resources.forEach(function(resource) {
        if (resource.bookings && resource.bookings.length > 0) {
            resource.bookings.forEach(function(booking) {
                if (booking.user === 'Student') {
                    userBookings.push({
                        ...booking,
                        resourceName: resource.name,
                        resourceId: resource.id
                    });
                }
            });
        }
    });
    
    if (userBookings.length === 0) {
        showMessage(container, 'You have no bookings yet.', 'info');
        return;
    }
    
    // Sort by date (newest first)
    userBookings.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    
    // Create bookings list
    const bookingsList = document.createElement('div');
    bookingsList.className = 'bookings-list';
    
    userBookings.forEach(function(booking) {
        const bookingCard = createBookingCard(booking);
        bookingsList.appendChild(bookingCard);
    });
    
    container.appendChild(bookingsList);
}

// Create a booking card
function createBookingCard(booking) {
    const card = document.createElement('div');
    card.className = 'booking-card';
    
    const header = document.createElement('div');
    header.className = 'booking-header';
    
    const resourceName = document.createElement('h3');
    resourceName.textContent = booking.resourceName;
    
    const date = document.createElement('div');
    date.className = 'booking-date';
    const bookingDate = new Date(booking.date);
    date.textContent = bookingDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
    
    header.appendChild(resourceName);
    header.appendChild(date);
    
    const slotsContainer = document.createElement('div');
    slotsContainer.className = 'booking-slots';
    
    if (booking.slots && booking.slots.length > 0) {
        const slotsLabel = document.createElement('strong');
        slotsLabel.textContent = 'Time Slots: ';
        slotsContainer.appendChild(slotsLabel);
        
        const slotsText = document.createElement('span');
        slotsText.textContent = booking.slots.join(', ');
        slotsContainer.appendChild(slotsText);
    }
    
    card.appendChild(header);
    card.appendChild(slotsContainer);
    
    return card;
}

// Open booking modal
function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        startSlot = null;
        endSlot = null;
        modal.classList.remove('hidden');
        document.getElementById('error-message').classList.add('hidden');
        
        // Add event listener to date input to re-render slots when date changes
        const dateInput = document.getElementById('booking-date');
        if (dateInput) {
            dateInput.addEventListener('change', function() {
                renderSlots();
            });
        }
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

// Get booked slots for a specific date and resource
function getBookedSlots(date) {
    if (!date || !currentResourceId) return [];
    
    const resources = loadResources();
    const resource = resources.find(r => r.id === currentResourceId);
    
    if (!resource || !resource.bookings) return [];
    
    const bookedSlots = [];
    resource.bookings.forEach(function(booking) {
        if (booking.date === date && booking.slots) {
            bookedSlots.push(...booking.slots);
        }
    });
    
    return bookedSlots;
}

// Render slots in the modal
function renderSlots() {
    const container = document.getElementById('slots-container');
    container.innerHTML = '';
    
    const slots = generateSlots();
    const dateInput = document.getElementById('booking-date').value;
    
    // Get already booked slots for the selected date
    const bookedSlots = getBookedSlots(dateInput);
    
    slots.forEach(function(slot) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'slot-btn';
        button.textContent = slot;
        button.dataset.slot = slot;
        
        // Disable already booked slots
        if (bookedSlots.includes(slot)) {
            button.disabled = true;
            button.classList.add('slot-booked');
        } else {
            button.addEventListener('click', function() {
                handleSlotClick(slot);
            });
        }
        
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
        errorMsg.textContent = 'Please select a start and end slot';
        errorMsg.classList.remove('hidden');
        return;
    }
    
    // Validate slot range
    if (startSlot && endSlot) {
        const allSlots = generateSlots();
        const startIndex = allSlots.indexOf(startSlot);
        const endIndex = allSlots.indexOf(endSlot);
        
        if (startIndex > endIndex) {
            errorMsg.textContent = 'Please select a valid time range';
            errorMsg.classList.remove('hidden');
            return;
        }
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
    
    // Update localStorage
    localStorage.setItem('campus_resources', JSON.stringify(resources));
    
    // Close modal and refresh view
    closeBookingModal();
    renderResources();
}

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Render analytics view
function renderAnalytics() {
    const container = document.getElementById('analytics-view');
    if (!container) return;
    
    // Clear existing content except heading
    const heading = container.querySelector('h2');
    container.innerHTML = '';
    if (heading) {
        container.appendChild(heading);
    }
    
    // Load resources
    const resources = loadResources();
    
    // Collect all bookings
    let allBookings = [];
    resources.forEach(function(resource) {
        if (resource.bookings && resource.bookings.length > 0) {
            resource.bookings.forEach(function(booking) {
                allBookings.push({
                    ...booking,
                    resourceId: resource.id,
                    resourceName: resource.name
                });
            });
        }
    });
    
    // Check if there are any bookings
    if (allBookings.length === 0) {
        showMessage(container, 'No analytics data available yet.', 'info');
        return;
    }
    
    // Calculate metrics
    const todayDate = getTodayDate();
    
    // 1. Total bookings today
    const todayBookings = allBookings.filter(b => b.date === todayDate);
    const totalToday = todayBookings.length;
    
    // 2. Most booked resource
    const resourceSlotCounts = {};
    resources.forEach(function(resource) {
        let totalSlots = 0;
        if (resource.bookings) {
            resource.bookings.forEach(function(booking) {
                if (booking.slots) {
                    totalSlots += booking.slots.length;
                }
            });
        }
        resourceSlotCounts[resource.id] = {
            name: resource.name,
            slots: totalSlots
        };
    });
    
    let mostBooked = { name: 'None', slots: 0 };
    Object.values(resourceSlotCounts).forEach(function(resource) {
        if (resource.slots > mostBooked.slots) {
            mostBooked = resource;
        }
    });
    
    // 3. Peak slot
    const slotCounts = {};
    allBookings.forEach(function(booking) {
        if (booking.slots) {
            booking.slots.forEach(function(slot) {
                slotCounts[slot] = (slotCounts[slot] || 0) + 1;
            });
        }
    });
    
    let peakSlot = { time: 'None', count: 0 };
    Object.keys(slotCounts).forEach(function(slot) {
        if (slotCounts[slot] > peakSlot.count) {
            peakSlot = { time: slot, count: slotCounts[slot] };
        }
    });
    
    // Create metrics grid
    const metricsGrid = document.createElement('div');
    metricsGrid.className = 'metrics-grid';
    
    // Metric 1: Bookings Today
    const card1 = createMetricCard('Bookings Today', totalToday, '📅');
    
    // Metric 2: Most Booked Resource
    const card2 = createMetricCard('Most Booked Resource', `${mostBooked.name} (${mostBooked.slots} slots)`, '🏆');
    
    // Metric 3: Peak Slot
    const card3 = createMetricCard('Peak Time Slot', `${peakSlot.time} (${peakSlot.count} bookings)`, '⏰');
    
    metricsGrid.appendChild(card1);
    metricsGrid.appendChild(card2);
    metricsGrid.appendChild(card3);
    
    container.appendChild(metricsGrid);
    
    // Add booking history section
    const historySection = document.createElement('div');
    historySection.className = 'history-section';
    
    const historyTitle = document.createElement('h3');
    historyTitle.textContent = 'Booking History';
    historyTitle.className = 'history-title';
    historySection.appendChild(historyTitle);
    
    // Sort bookings by date (newest first)
    allBookings.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    
    // Create history list
    const historyList = document.createElement('div');
    historyList.className = 'history-list';
    
    allBookings.forEach(function(booking) {
        const historyItem = createHistoryItem(booking);
        historyList.appendChild(historyItem);
    });
    
    historySection.appendChild(historyList);
    container.appendChild(historySection);
}

// Create a booking history item
function createHistoryItem(booking) {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    const header = document.createElement('div');
    header.className = 'history-header';
    
    const resourceName = document.createElement('div');
    resourceName.className = 'history-resource';
    resourceName.textContent = booking.resourceName;
    
    const date = document.createElement('div');
    date.className = 'history-date';
    const bookingDate = new Date(booking.date);
    date.textContent = bookingDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
    
    header.appendChild(resourceName);
    header.appendChild(date);
    
    const details = document.createElement('div');
    details.className = 'history-details';
    
    const user = document.createElement('div');
    user.className = 'history-user';
    user.innerHTML = `<strong>User:</strong> ${booking.user}`;
    
    const slots = document.createElement('div');
    slots.className = 'history-slots';
    if (booking.slots && booking.slots.length > 0) {
        const slotsText = booking.slots.length > 3 
            ? `${booking.slots.slice(0, 3).join(', ')}... (+${booking.slots.length - 3} more)` 
            : booking.slots.join(', ');
        slots.innerHTML = `<strong>Slots:</strong> ${slotsText}`;
    }
    
    details.appendChild(user);
    details.appendChild(slots);
    
    item.appendChild(header);
    item.appendChild(details);
    
    return item;
}

// Create a metric card
function createMetricCard(label, value, icon) {
    const card = document.createElement('div');
    card.className = 'metric-card';
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'metric-icon';
    iconDiv.textContent = icon;
    
    const content = document.createElement('div');
    content.className = 'metric-content';
    
    const labelEl = document.createElement('div');
    labelEl.className = 'metric-label';
    labelEl.textContent = label;
    
    const valueEl = document.createElement('div');
    valueEl.className = 'metric-value';
    valueEl.textContent = value;
    
    content.appendChild(labelEl);
    content.appendChild(valueEl);
    
    card.appendChild(iconDiv);
    card.appendChild(content);
    
    return card;
}
