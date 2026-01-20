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

// Global variable for selected booking date
let selectedDate = getTodayDate();

// Global variables for calendar navigation
let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();

// Update theme icon based on current theme
function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        const isDark = document.body.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
}

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {

    // Load and apply saved theme
    const savedTheme = localStorage.getItem('campus_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon();
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('campus_theme', isDark ? 'dark' : 'light');
            
            updateThemeIcon();
        });
    }

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
    renderDashboard();

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

        // If Dashboard is clicked, render dashboard
        if (viewName === 'dashboard') {
            renderDashboard();
        }

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

    // Export bookings button handler
    const exportBtn = document.getElementById('export-bookings-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportBookings);
    }

    // Date picker handler for resource view
    const resourceDatePicker = document.getElementById('resource-date');
    if (resourceDatePicker) {
        resourceDatePicker.value = getTodayDate();
        resourceDatePicker.min = getTodayDate();
        resourceDatePicker.addEventListener('change', function() {
            selectedDate = this.value;
            renderResources();
        });
    }

    // Navbar links functionality
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.addEventListener('click', function(event) {
            const clickedLink = event.target.closest('[data-view]');
            if (!clickedLink) return;
            
            event.preventDefault();
            const viewName = clickedLink.getAttribute('data-view');
            
            if (!viewName) return;
            
            currentView = viewName;
            hideAllViews();
            showView(viewName);
            
            if (viewName === 'dashboard') renderDashboard();
            if (viewName === 'resources') renderResources();
            if (viewName === 'bookings') renderBookings();
            if (viewName === 'analytics') renderAnalytics();
            
            const sidebarLink = document.querySelector(`#sidebar [data-view="${viewName}"]`);
            if (sidebarLink) updateActiveSidebarLink(sidebarLink);
        });
    }

    // Terms and conditions modal handlers
    const termsLink = document.getElementById('terms-link');
    const termsModal = document.getElementById('terms-modal');
    const closeTermsBtn = document.getElementById('close-terms');

    if (termsLink) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (termsModal) {
                termsModal.classList.remove('hidden');
            }
        });
    }

    if (closeTermsBtn) {
        closeTermsBtn.addEventListener('click', function() {
            if (termsModal) {
                termsModal.classList.add('hidden');
            }
        });
    }

    if (termsModal) {
        termsModal.addEventListener('click', function(event) {
            if (event.target === termsModal) {
                termsModal.classList.add('hidden');
            }
        });
    }
});

// Export bookings to CSV file
function exportBookings() {
    const resources = loadResources();
    const userBookings = [];
    
    resources.forEach(function(resource) {
        if (resource.bookings && resource.bookings.length > 0) {
            resource.bookings.forEach(function(booking) {
                if (booking.user === 'Student') {
                    userBookings.push({
                        resourceName: resource.name,
                        date: booking.date,
                        slots: booking.slots ? booking.slots.join(', ') : 'N/A'
                    });
                }
            });
        }
    });
    
    if (userBookings.length === 0) {
        const container = document.getElementById('bookings-view');
        showMessage(container, 'No bookings to export.', 'info');
        return;
    }
    
    let csvContent = 'Resource,Date,Slots\n';
    
    userBookings.forEach(function(booking) {
        const row = `"${booking.resourceName}","${booking.date}","${booking.slots}"`;
        csvContent += row + '\n';
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const filename = `campuslot_bookings_${year}-${month}-${day}.csv`;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    
    URL.revokeObjectURL(url);
    
    const container = document.getElementById('bookings-view');
    showMessage(container, `Successfully exported ${userBookings.length} booking(s)!`, 'success');
}

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

// Save resources to localStorage
function saveResources(resources) {
    localStorage.setItem('campus_resources', JSON.stringify(resources));
}

// Create a resource card element
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    const status = calculateResourceStatus(resource);
    
    card.innerHTML = `
        <h3 class="resource-name">${resource.name}</h3>
        <p class="resource-type"><strong>Type:</strong> ${resource.type}</p>
        <p class="resource-location"><strong>Location:</strong> ${resource.location}</p>
        <p class="resource-status">
            <strong>Status:</strong> 
            <span class="${status.className}">${status.text}</span>
        </p>
        <button class="book-btn" data-id="${resource.id}">
            Book Now
        </button>
    `;
    
    return card;
}

// Calculate resource status for selected date
function calculateResourceStatus(resource) {
    const totalSlots = 22;
    
    let bookedSlots = 0;
    
    if (resource.bookings) {
        resource.bookings.forEach(function(booking) {
            if (booking.date === selectedDate && booking.slots) {
                bookedSlots += booking.slots.length;
            }
        });
    }
    
    if (bookedSlots === 0) {
        return { text: 'Available', className: 'status-available' };
    } else if (bookedSlots < totalSlots) {
        return { text: 'Partially Booked', className: 'status-partial' };
    } else {
        return { text: 'Fully Booked', className: 'status-full' };
    }
}

// Render all resources to the view
function renderResources() {
    const container = document.getElementById('resources-view');
    
    if (!container) return;
    
    // Clear existing content except heading and date picker
    const heading = container.querySelector('h2');
    const dateSelector = container.querySelector('.date-selector');
    container.innerHTML = '';
    if (heading) {
        container.appendChild(heading);
    }
    if (dateSelector) {
        container.appendChild(dateSelector);
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
    
    // Clear existing content except heading and export button
    const heading = container.querySelector('h2');
    const exportBtn = container.querySelector('#export-bookings-btn');
    container.innerHTML = '';
    if (heading) {
        container.appendChild(heading);
    }
    if (exportBtn) {
        container.appendChild(exportBtn);
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
    
    // Add actions container with cancel button
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'booking-actions';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-booking-btn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.onclick = function() {
        cancelBooking(booking.resourceId, booking.date, booking.slots);
    };
    
    actionsContainer.appendChild(cancelBtn);
    
    card.appendChild(header);
    card.appendChild(slotsContainer);
    card.appendChild(actionsContainer);
    
    return card;
}

// Cancel a booking
function cancelBooking(resourceId, date, slots) {
    if (!confirm('Are you sure you want to cancel this booking?')) {
        return;
    }
    
    const resources = loadResources();
    const resource = resources.find(r => r.id === resourceId);
    
    if (!resource || !resource.bookings) {
        alert('Booking not found.');
        return;
    }
    
    // Find and remove the booking
    const bookingIndex = resource.bookings.findIndex(b => 
        b.user === 'Student' && 
        b.date === date && 
        JSON.stringify(b.slots) === JSON.stringify(slots)
    );
    
    if (bookingIndex !== -1) {
        resource.bookings.splice(bookingIndex, 1);
        saveResources(resources);
        renderBookings();
        alert('Booking cancelled successfully!');
        
        // Refresh other views if needed
        if (currentView === 'dashboard') {
            renderDashboard();
        } else if (currentView === 'resources') {
            renderResources();
        }
    } else {
        alert('Booking not found.');
    }
}

// Open booking modal
function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        startSlot = null;
        endSlot = null;
        modal.classList.remove('hidden');
        document.getElementById('error-message').classList.add('hidden');
        
        // Update modal header with selected date
        const modalTitle = modal.querySelector('.modal-header h3');
        if (modalTitle) {
            const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
            modalTitle.textContent = `Book Resource - ${formattedDate}`;
        }
        
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
    
    // Get already booked slots for the selected date
    const bookedSlots = getBookedSlots(selectedDate);
    
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
    
    const errorMsg = document.getElementById('error-message');
    const termsCheckbox = document.getElementById('terms-checkbox');
    
    if (!termsCheckbox.checked) {
        errorMsg.textContent = 'Please agree to the terms and conditions';
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
        date: selectedDate,
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
        if (booking.date === selectedDate) {
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

// Render Dashboard
function renderDashboard() {
    const container = document.getElementById('dashboard-view');
    if (!container) return;
    
    const heading = container.querySelector('h2');
    container.innerHTML = '';
    if (heading) {
        container.appendChild(heading);
    }
    
    const resources = loadResources();
    const allBookings = [];
    
    resources.forEach(function(resource) {
        if (resource.bookings) {
            resource.bookings.forEach(function(booking) {
                allBookings.push({
                    ...booking,
                    resourceId: resource.id,
                    resourceName: resource.name,
                    resourceType: resource.type
                });
            });
        }
    });
    
    const todayDate = getTodayDate();
    
    // 1. Quick Stats Cards
    renderQuickStats(container, allBookings, resources, todayDate);
    
    // 2. Quick Action Buttons
    renderQuickActions(container);
    
    // 3. Notifications/Alerts
    renderNotifications(container, allBookings, todayDate);
    
    // 4. Today's Schedule
    renderTodaySchedule(container, allBookings, todayDate);
    
    // 5. Recent Activity Feed
    renderRecentActivity(container, allBookings);
    
    // 6. Resource Availability Summary
    renderResourceSummary(container, resources, allBookings, todayDate);
    
    // 7. Calendar Widget
    renderCalendarWidget(container, allBookings);
}

// Render Quick Stats
function renderQuickStats(container, allBookings, resources, todayDate) {
    const section = document.createElement('div');
    section.className = 'dashboard-section';
    
    const title = document.createElement('h3');
    title.textContent = 'Quick Stats';
    title.className = 'section-title';
    section.appendChild(title);
    
    const grid = document.createElement('div');
    grid.className = 'dashboard-grid';
    
    const totalBookings = allBookings.length;
    
    const upcomingBookings = allBookings.filter(function(b) {
        return b.date >= todayDate;
    }).length;
    
    const todayBookings = allBookings.filter(function(b) {
        return b.date === todayDate;
    }).length;
    
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
        if (totalSlots > 0) {
            resourceSlotCounts[resource.name] = totalSlots;
        }
    });
    
    let favoriteResource = 'None';
    let maxSlots = 0;
    Object.keys(resourceSlotCounts).forEach(function(name) {
        if (resourceSlotCounts[name] > maxSlots) {
            maxSlots = resourceSlotCounts[name];
            favoriteResource = name;
        }
    });
    
    grid.appendChild(createStatCard('Total Bookings', totalBookings, '📊'));
    grid.appendChild(createStatCard('Upcoming', upcomingBookings, '🔜'));
    grid.appendChild(createStatCard('Today', todayBookings, '📅'));
    grid.appendChild(createStatCard('Favorite', favoriteResource, '⭐'));
    
    section.appendChild(grid);
    container.appendChild(section);
}

// Create stat card
function createStatCard(label, value, icon) {
    const card = document.createElement('div');
    card.className = 'stat-card';
    
    const iconEl = document.createElement('div');
    iconEl.className = 'stat-icon';
    iconEl.textContent = icon;
    
    const labelEl = document.createElement('div');
    labelEl.className = 'stat-label';
    labelEl.textContent = label;
    
    const valueEl = document.createElement('div');
    valueEl.className = 'stat-value';
    valueEl.textContent = value;
    
    card.appendChild(iconEl);
    card.appendChild(labelEl);
    card.appendChild(valueEl);
    
    return card;
}

// Render Quick Actions
function renderQuickActions(container) {
    const section = document.createElement('div');
    section.className = 'dashboard-section';
    
    const title = document.createElement('h3');
    title.textContent = 'Quick Actions';
    title.className = 'section-title';
    section.appendChild(title);
    
    const actionsGrid = document.createElement('div');
    actionsGrid.className = 'actions-grid';
    
    const bookNowBtn = document.createElement('button');
    bookNowBtn.className = 'action-card';
    bookNowBtn.innerHTML = '<span class="action-icon">🔍</span><span>Book Now</span>';
    bookNowBtn.addEventListener('click', function() {
        document.querySelector('[data-view="resources"]').click();
    });
    
    const scheduleBtn = document.createElement('button');
    scheduleBtn.className = 'action-card';
    scheduleBtn.innerHTML = '<span class="action-icon">📅</span><span>View My Schedule</span>';
    scheduleBtn.addEventListener('click', function() {
        document.querySelector('[data-view="bookings"]').click();
    });
    
    actionsGrid.appendChild(bookNowBtn);
    actionsGrid.appendChild(scheduleBtn);
    
    section.appendChild(actionsGrid);
    container.appendChild(section);
}

// Render Notifications
function renderNotifications(container, allBookings, todayDate) {
    const todayBookings = allBookings.filter(function(b) {
        return b.date === todayDate && b.user === 'Student';
    });
    
    if (todayBookings.length === 0) return;
    
    const section = document.createElement('div');
    section.className = 'dashboard-section';
    
    const notification = document.createElement('div');
    notification.className = 'notification-banner';
    notification.innerHTML = `
        <span class="notif-icon">🔔</span>
        <span>You have ${todayBookings.length} booking${todayBookings.length > 1 ? 's' : ''} scheduled for today!</span>
    `;
    
    section.appendChild(notification);
    container.appendChild(section);
}

// Render Today's Schedule
function renderTodaySchedule(container, allBookings, todayDate) {
    const section = document.createElement('div');
    section.className = 'dashboard-section';
    
    const title = document.createElement('h3');
    title.textContent = "Today's Schedule";
    title.className = 'section-title';
    section.appendChild(title);
    
    const todayBookings = allBookings.filter(function(b) {
        return b.date === todayDate && b.user === 'Student';
    });
    
    if (todayBookings.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.className = 'empty-state';
        emptyMsg.textContent = 'No bookings for today. Enjoy your free time!';
        section.appendChild(emptyMsg);
    } else {
        const scheduleList = document.createElement('div');
        scheduleList.className = 'schedule-list';
        
        todayBookings.forEach(function(booking) {
            const item = document.createElement('div');
            item.className = 'schedule-item';
            
            const slotsText = booking.slots && booking.slots.length > 0 
                ? booking.slots[0] + (booking.slots.length > 1 ? ` - ${booking.slots[booking.slots.length - 1]}` : '')
                : 'Time not specified';
            
            item.innerHTML = `
                <div class="schedule-time">${slotsText}</div>
                <div class="schedule-resource">${booking.resourceName}</div>
            `;
            scheduleList.appendChild(item);
        });
        
        section.appendChild(scheduleList);
    }
    
    container.appendChild(section);
}

// Render Recent Activity
function renderRecentActivity(container, allBookings) {
    const section = document.createElement('div');
    section.className = 'dashboard-section';
    
    const title = document.createElement('h3');
    title.textContent = 'Recent Activity';
    title.className = 'section-title';
    section.appendChild(title);
    
    const userBookings = allBookings.filter(function(b) {
        return b.user === 'Student';
    });
    
    userBookings.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    
    const recentBookings = userBookings.slice(0, 5);
    
    if (recentBookings.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.className = 'empty-state';
        emptyMsg.textContent = 'No recent activity yet.';
        section.appendChild(emptyMsg);
    } else {
        const activityList = document.createElement('div');
        activityList.className = 'activity-list';
        
        recentBookings.forEach(function(booking) {
            const item = document.createElement('div');
            item.className = 'activity-item';
            
            const bookingDate = new Date(booking.date);
            const dateStr = bookingDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            
            item.innerHTML = `
                <div class="activity-icon">✓</div>
                <div class="activity-content">
                    <div class="activity-title">Booked ${booking.resourceName}</div>
                    <div class="activity-date">${dateStr} • ${booking.slots ? booking.slots.length : 0} slots</div>
                </div>
            `;
            activityList.appendChild(item);
        });
        
        section.appendChild(activityList);
    }
    
    container.appendChild(section);
}

// Render Resource Summary
function renderResourceSummary(container, resources, allBookings, todayDate) {
    const section = document.createElement('div');
    section.className = 'dashboard-section';
    
    const title = document.createElement('h3');
    title.textContent = 'Resource Availability';
    title.className = 'section-title';
    section.appendChild(title);
    
    const typeCounts = {};
    resources.forEach(function(resource) {
        if (!typeCounts[resource.type]) {
            typeCounts[resource.type] = { total: 0, availableToday: 0 };
        }
        typeCounts[resource.type].total++;
        
        const hasBookingToday = resource.bookings && resource.bookings.some(function(b) {
            return b.date === todayDate;
        });
        
        if (!hasBookingToday) {
            typeCounts[resource.type].availableToday++;
        }
    });
    
    const summaryGrid = document.createElement('div');
    summaryGrid.className = 'summary-grid';
    
    Object.keys(typeCounts).forEach(function(type) {
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.innerHTML = `
            <div class="summary-type">${type}</div>
            <div class="summary-stats">${typeCounts[type].availableToday} of ${typeCounts[type].total} available today</div>
        `;
        summaryGrid.appendChild(card);
    });
    
    section.appendChild(summaryGrid);
    container.appendChild(section);
}

// Render Calendar Widget
function renderCalendarWidget(container, allBookings) {
    const section = document.createElement('div');
    section.className = 'dashboard-section';
    
    const title = document.createElement('h3');
    title.textContent = 'Calendar';
    title.className = 'section-title';
    section.appendChild(title);
    
    const today = new Date();
    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Calendar navigation header
    const calendarNav = document.createElement('div');
    calendarNav.className = 'calendar-nav';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'calendar-nav-btn';
    prevBtn.innerHTML = '◀';
    prevBtn.title = 'Previous month';
    prevBtn.onclick = function() {
        calendarMonth--;
        if (calendarMonth < 0) {
            calendarMonth = 11;
            calendarYear--;
        }
        renderDashboard();
    };
    
    const calendarHeader = document.createElement('div');
    calendarHeader.className = 'calendar-header';
    calendarHeader.textContent = monthNames[calendarMonth] + ' ' + calendarYear;
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'calendar-nav-btn';
    nextBtn.innerHTML = '▶';
    nextBtn.title = 'Next month';
    nextBtn.onclick = function() {
        calendarMonth++;
        if (calendarMonth > 11) {
            calendarMonth = 0;
            calendarYear++;
        }
        renderDashboard();
    };
    
    const todayBtn = document.createElement('button');
    todayBtn.className = 'calendar-today-btn';
    todayBtn.textContent = 'Today';
    todayBtn.onclick = function() {
        calendarMonth = today.getMonth();
        calendarYear = today.getFullYear();
        renderDashboard();
    };
    
    calendarNav.appendChild(prevBtn);
    calendarNav.appendChild(calendarHeader);
    calendarNav.appendChild(nextBtn);
    calendarNav.appendChild(todayBtn);
    section.appendChild(calendarNav);
    
    // Calendar grid
    const calendarGrid = document.createElement('div');
    calendarGrid.className = 'calendar-grid';
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(function(day) {
        const dayLabel = document.createElement('div');
        dayLabel.className = 'calendar-day-label';
        dayLabel.textContent = day;
        calendarGrid.appendChild(dayLabel);
    });
    
    // Count bookings per date
    const bookingsByDate = {};
    allBookings.forEach(function(b) {
        if (b.user === 'Student') {
            if (!bookingsByDate[b.date]) {
                bookingsByDate[b.date] = [];
            }
            bookingsByDate[b.date].push(b);
        }
    });
    
    // Empty days before first day of month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        
        const dayStr = String(day).padStart(2, '0');
        const monthStr = String(calendarMonth + 1).padStart(2, '0');
        const dateStr = `${calendarYear}-${monthStr}-${dayStr}`;
        const dayDate = new Date(calendarYear, calendarMonth, day);
        const isPast = dayDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        
        // Day number
        const dayNumber = document.createElement('span');
        dayNumber.className = 'calendar-day-number';
        dayNumber.textContent = day;
        dayEl.appendChild(dayNumber);
        
        // Check if this day has bookings
        const dayBookings = bookingsByDate[dateStr];
        if (dayBookings && dayBookings.length > 0) {
            dayEl.classList.add('has-booking');
            
            // Add booking count badge
            const badge = document.createElement('span');
            badge.className = 'booking-badge';
            badge.textContent = dayBookings.length;
            if (dayBookings.length > 2) {
                badge.classList.add('badge-high');
            }
            dayEl.appendChild(badge);
            
            // Create tooltip content
            const tooltip = document.createElement('div');
            tooltip.className = 'calendar-tooltip';
            tooltip.innerHTML = `<strong>${dayBookings.length} booking${dayBookings.length > 1 ? 's' : ''}</strong><br>`;
            dayBookings.forEach(function(booking) {
                const slots = booking.slots && booking.slots.length > 0 
                    ? `${booking.slots[0]} - ${booking.slots[booking.slots.length - 1]}`
                    : 'All day';
                tooltip.innerHTML += `• ${booking.resourceName}<br><span style="font-size:0.85em;color:var(--text-muted)">${slots}</span><br>`;
            });
            dayEl.appendChild(tooltip);
        }
        
        // Mark today
        if (dateStr === getTodayDate()) {
            dayEl.classList.add('today');
        }
        
        // Mark past dates
        if (isPast && dateStr !== getTodayDate()) {
            dayEl.classList.add('past');
        }
        
        // Make clickable if not in the past
        if (!isPast || dayBookings) {
            dayEl.style.cursor = 'pointer';
            dayEl.onclick = function() {
                handleCalendarDayClick(dateStr, dayBookings);
            };
        }
        
        calendarGrid.appendChild(dayEl);
    }
    
    section.appendChild(calendarGrid);
    
    // Add legend
    const legend = document.createElement('div');
    legend.className = 'calendar-legend';
    legend.innerHTML = `
        <div class="legend-item"><span class="legend-dot today-dot"></span>Today</div>
        <div class="legend-item"><span class="legend-dot booking-dot"></span>Has Bookings</div>
        <div class="legend-item"><span class="legend-dot past-dot"></span>Past Date</div>
    `;
    section.appendChild(legend);
    
    // Add stats summary
    const stats = calculateCalendarStats(bookingsByDate, calendarMonth, calendarYear);
    const statsEl = document.createElement('div');
    statsEl.className = 'calendar-stats';
    statsEl.innerHTML = `
        <div class="stat-item">
            <span class="stat-label">Bookings this month:</span>
            <span class="stat-value">${stats.monthBookings}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Next booking:</span>
            <span class="stat-value">${stats.nextBooking}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Busiest day:</span>
            <span class="stat-value">${stats.busiestDay}</span>
        </div>
    `;
    section.appendChild(statsEl);
    
    container.appendChild(section);
}

// Handle calendar day click
function handleCalendarDayClick(dateStr, dayBookings) {
    if (dayBookings && dayBookings.length > 0) {
        // Show bookings for this day
        const message = `You have ${dayBookings.length} booking${dayBookings.length > 1 ? 's' : ''} on this day. View in My Bookings?`;
        if (confirm(message)) {
            document.querySelector('[data-view="bookings"]').click();
        }
    } else {
        // Quick book for this date
        const dateObj = new Date(dateStr);
        const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        if (confirm(`Book a resource for ${formattedDate}?`)) {
            selectedDate = dateStr;
            const resourceDatePicker = document.getElementById('resource-date');
            if (resourceDatePicker) {
                resourceDatePicker.value = dateStr;
            }
            document.querySelector('[data-view="resources"]').click();
        }
    }
}

// Calculate calendar statistics
function calculateCalendarStats(bookingsByDate, month, year) {
    const stats = {
        monthBookings: 0,
        nextBooking: 'None',
        busiestDay: 'None'
    };
    
    let maxBookings = 0;
    let busiestDate = null;
    let nextBookingDate = null;
    const today = getTodayDate();
    
    Object.keys(bookingsByDate).forEach(function(date) {
        const dateObj = new Date(date);
        const bookingCount = bookingsByDate[date].length;
        
        // Count bookings in current viewing month
        if (dateObj.getMonth() === month && dateObj.getFullYear() === year) {
            stats.monthBookings += bookingCount;
            
            // Find busiest day
            if (bookingCount > maxBookings) {
                maxBookings = bookingCount;
                busiestDate = date;
            }
        }
        
        // Find next booking
        if (date >= today && (!nextBookingDate || date < nextBookingDate)) {
            nextBookingDate = date;
        }
    });
    
    if (busiestDate) {
        const busiestDateObj = new Date(busiestDate);
        stats.busiestDay = busiestDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ` (${maxBookings})`;
    }
    
    if (nextBookingDate) {
        const nextDateObj = new Date(nextBookingDate);
        if (nextBookingDate === today) {
            stats.nextBooking = 'Today';
        } else {
            stats.nextBooking = nextDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
    }
    
    return stats;
}
