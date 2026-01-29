// JSONbin.io API Configuration
const JSONBIN_CONFIG = {
    BIN_ID: '6973867943b1c97be9444ac1',
    API_KEY: '$2a$10$SDIeVbyMs.RMURM629OeMubYENpbKAvxPCQvb3Czy5eHFb36pvrkG',
    BASE_URL: 'https://api.jsonbin.io/v3/b/'
};

// LocalStorage Keys
const STORAGE_KEYS = {
    RESOURCES: 'campus_resources',
    THEME: 'campus_theme',
    USER_PROFILE: 'campus_user_profile'
};

// Resource Categories
const CATEGORIES = {
    STUDY_SPACE: 'study-space',
    SPORTS_FACILITY: 'sports-facility',
    MEETING_ROOM: 'meeting-room',
    TECH_EQUIPMENT: 'tech-equipment',
    SPORTS_EQUIPMENT: 'sports-equipment'
};

// Booking Types
const BOOKING_TYPES = {
    TIME_SLOT: 'time',
    QUANTITY: 'quantity'
};

// Default resources data
const defaultResources = [
    // Study Spaces - Time-based booking
    {
        id: 1,
        name: "Library Study Room",
        category: CATEGORIES.STUDY_SPACE,
        location: "Library - 1st Floor",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 30,
        bookings: []
    },
    {
        id: 2,
        name: "Study Room 2",
        category: CATEGORIES.STUDY_SPACE,
        location: "Library - 1st Floor",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 28,
        bookings: []
    },
    
    // Sports Facilities - Time-based booking (one per slot)
    {
        id: 3,
        name: "Sports Turf",
        category: CATEGORIES.SPORTS_FACILITY,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 1,
        bookings: []
    },
    {
        id: 4,
        name: "Basketball Court",
        category: CATEGORIES.SPORTS_FACILITY,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 1,
        bookings: []
    },
    {
        id: 5,
        name: "Volleyball Court",
        category: CATEGORIES.SPORTS_FACILITY,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 1,
        bookings: []
    },
    
    // Meeting Rooms - Time-based booking
    {
        id: 6,
        name: "Meeting Room 1",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    {
        id: 7,
        name: "Meeting Room 2",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 7,
        bookings: []
    },
    {
        id: 8,
        name: "Meeting Room 3",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    {
        id: 9,
        name: "Meeting Room 4",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 7,
        bookings: []
    },
    {
        id: 10,
        name: "Meeting Room 5",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    {
        id: 11,
        name: "Meeting Room 6",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 7,
        bookings: []
    },
    {
        id: 12,
        name: "Meeting Room 7",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    {
        id: 13,
        name: "Meeting Room 8",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 7,
        bookings: []
    },
    {
        id: 14,
        name: "Meeting Room 9",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    {
        id: 15,
        name: "Meeting Room 10",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 7,
        bookings: []
    },
    {
        id: 16,
        name: "Meeting Room 11",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    {
        id: 17,
        name: "Meeting Room 12",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 7,
        bookings: []
    },
    {
        id: 18,
        name: "Meeting Room 13",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    {
        id: 19,
        name: "Meeting Room 14",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 7,
        bookings: []
    },
    {
        id: 20,
        name: "Meeting Room 15",
        category: CATEGORIES.MEETING_ROOM,
        location: "Admin Block",
        bookingType: BOOKING_TYPES.TIME_SLOT,
        capacity: 5,
        bookings: []
    },
    
    // Tech Equipment - Quantity-based (issue system)
    {
        id: 21,
        name: "Dell Laptops",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 4,
        bookings: []
    },
    {
        id: 22,
        name: "HP Laptops",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 3,
        bookings: []
    },
    {
        id: 23,
        name: "Lenovo Laptops",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 3,
        bookings: []
    },
    {
        id: 24,
        name: "MacBook Pro",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 25,
        name: "MacBook Air",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 26,
        name: "USB-C Chargers",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 8,
        bookings: []
    },
    {
        id: 27,
        name: "Dell Chargers",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 4,
        bookings: []
    },
    {
        id: 28,
        name: "HP Chargers",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 3,
        bookings: []
    },
    {
        id: 29,
        name: "MacBook Chargers",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 4,
        bookings: []
    },
    {
        id: 30,
        name: "Epson Projectors",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 31,
        name: "BenQ Projectors",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 32,
        name: "Canon DSLR Cameras",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "Media Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 33,
        name: "Sony Mirrorless Cameras",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "Media Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 34,
        name: "Nikon DSLR Cameras",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "Media Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 1,
        bookings: []
    },
    {
        id: 35,
        name: "Dell 24-inch Monitors",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 5,
        bookings: []
    },
    {
        id: 36,
        name: "LG 27-inch Monitors",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 3,
        bookings: []
    },
    {
        id: 37,
        name: "Samsung Curved Monitors",
        category: CATEGORIES.TECH_EQUIPMENT,
        location: "IT Department",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    
    // Sports Equipment - Quantity-based
    {
        id: 38,
        name: "Basketballs",
        category: CATEGORIES.SPORTS_EQUIPMENT,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 39,
        name: "Footballs",
        category: CATEGORIES.SPORTS_EQUIPMENT,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 40,
        name: "Badminton Kits",
        category: CATEGORIES.SPORTS_EQUIPMENT,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 41,
        name: "Cricket Kits",
        category: CATEGORIES.SPORTS_EQUIPMENT,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    },
    {
        id: 42,
        name: "Volleyballs",
        category: CATEGORIES.SPORTS_EQUIPMENT,
        location: "Sports Complex",
        bookingType: BOOKING_TYPES.QUANTITY,
        totalQuantity: 2,
        bookings: []
    }
];

let currentView = 'dashboard';

let currentResourceId = null;

let startSlot = null;
let endSlot = null;

let selectedDate = getTodayDate();

let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();

let autoRefreshInterval = null;
let lastRefreshTime = null;
let refreshTimerInterval = null;

// Open terms modal
function openTermsModal() {
    const termsModal = document.getElementById('terms-modal');
    if (termsModal) {
        termsModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    }
}

// Update theme icon based on current theme
function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        const isDark = document.body.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // Check if user profile exists, if not show registration modal
    checkAndShowUserRegistration();

    // Load and apply saved theme
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
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
            localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
            
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

    // Profile dropdown functionality
    const userAvatar = document.getElementById('user-avatar');
    const profileDropdown = document.getElementById('profile-dropdown');
    const logoutBtn = document.getElementById('logout-btn');

    if (userAvatar && profileDropdown) {
        userAvatar.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.user-profile-wrapper')) {
                profileDropdown.classList.add('hidden');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
                location.reload();
            }
        });
    }

    // Search and filter functionality
    const searchInput = document.getElementById('resource-search');
    const categoryFilter = document.getElementById('category-filter');
    const availabilityFilter = document.getElementById('availability-filter');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterAndRenderResources();
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            filterAndRenderResources();
        });
    }

    if (availabilityFilter) {
        availabilityFilter.addEventListener('change', function() {
            filterAndRenderResources();
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
                document.body.classList.remove('modal-open');
            }
        });
    }

    if (termsModal) {
        termsModal.addEventListener('click', function(event) {
            if (event.target === termsModal) {
                termsModal.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebarElement = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    if (mobileMenuBtn && sidebarElement && sidebarBackdrop) {
        // Toggle sidebar on button click
        mobileMenuBtn.addEventListener('click', function() {
            sidebarElement.classList.toggle('mobile-open');
            sidebarBackdrop.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });

        // Close sidebar when backdrop is clicked
        sidebarBackdrop.addEventListener('click', function() {
            sidebarElement.classList.remove('mobile-open');
            sidebarBackdrop.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        });

        // Close sidebar when a link is clicked (mobile only)
        sidebarElement.addEventListener('click', function(event) {
            if (event.target.closest('.sidebar-link') && window.innerWidth <= 768) {
                sidebarElement.classList.remove('mobile-open');
                sidebarBackdrop.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
    }

    // Start auto-refresh every 10 seconds
    autoRefreshInterval = setInterval(function() {
        refreshResources(false); // false = no notifications on auto-refresh
    }, 10000);
    
    // Update timestamp display every second
    refreshTimerInterval = setInterval(updateRefreshTimestamp, 1000);
    
    // Initial refresh on load
    refreshResources(false);
});

// Export bookings to CSV file
function exportBookings() {
    const resources = loadResources();
    const userBookings = [];
    
    resources.forEach(function(resource) {
        if (resource.bookings && resource.bookings.length > 0) {
            resource.bookings.forEach(function(booking) {
                if (booking.user === userName) {
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

// JSONbin.io API Helper Functions
function fetchFromAPI() {
    return fetch(JSONBIN_CONFIG.BASE_URL + JSONBIN_CONFIG.BIN_ID + '/latest', {
        method: 'GET',
        headers: {
            'X-Master-Key': JSONBIN_CONFIG.API_KEY
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Failed to fetch data from API');
        }
        return response.json();
    })
    .then(function(data) {
        return data.record;
    })
    .catch(function(error) {
        console.error('API Fetch Error:', error);
        const stored = localStorage.getItem(STORAGE_KEYS.RESOURCES);
        if (stored) {
            return JSON.parse(stored);
        }
        return defaultResources;
    });
}

function saveToAPI(resources) {
    return fetch(JSONBIN_CONFIG.BASE_URL + JSONBIN_CONFIG.BIN_ID, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': JSONBIN_CONFIG.API_KEY
        },
        body: JSON.stringify(resources)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Failed to save data to API');
        }
        return response.json();
    })
    .then(function(data) {
        localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
        return data;
    })
    .catch(function(error) {
        console.error('API Save Error:', error);
        localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
        throw error;
    });
}

function showNotification(message, type) {
    const notification = document.getElementById('notification-message');
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = 'notification';
    
    if (type === 'success') {
        notification.classList.add('notification-success');
    } else if (type === 'error') {
        notification.classList.add('notification-error');
    }
    
    notification.classList.remove('hidden');
    
    setTimeout(function() {
        notification.classList.add('hidden');
    }, 3000);
}

// Load resources from localStorage or use defaults
function loadResources() {
    const stored = localStorage.getItem(STORAGE_KEYS.RESOURCES);
    
    if (stored) {
        try {
            const resources = JSON.parse(stored);
            // Check if resources need migration (old format with 'type' instead of 'category')
            if (resources.length > 0 && resources[0].type && !resources[0].category) {
                console.log('Migrating old resource data format...');
                // Clear old data and use new defaults
                localStorage.removeItem(STORAGE_KEYS.RESOURCES);
                localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(defaultResources));
                return defaultResources;
            }
            
            // Migrate resource names (remove seat capacity from study room names)
            let needsUpdate = false;
            resources.forEach(resource => {
                if (resource.name === "Library Study Room (25-30 seats)") {
                    resource.name = "Library Study Room";
                    needsUpdate = true;
                }
                if (resource.name === "Study Room 2 (25-30 seats)") {
                    resource.name = "Study Room 2";
                    needsUpdate = true;
                }
            });
            
            if (needsUpdate) {
                localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
            }
            
            return resources;
        } catch (error) {
            console.error('Error parsing stored resources:', error);
            localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(defaultResources));
            return defaultResources;
        }
    } else {
        localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(defaultResources));
        return defaultResources;
    }
}

// Refresh resources from JSONbin.io API
function refreshResources(showNotifications = true) {
    fetchFromAPI()
        .then(function(resources) {
            localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
            
            // Update last refresh time
            lastRefreshTime = Date.now();
            updateRefreshTimestamp();
            
            if (currentView === 'resources') {
                renderResources();
            } else if (currentView === 'dashboard') {
                renderDashboard();
            } else if (currentView === 'bookings') {
                renderBookings();
            }
            
            if (showNotifications) {
                showNotification('Bookings refreshed successfully!', 'success');
            }
        })
        .catch(function(error) {
            console.error('Refresh failed:', error);
            
            if (showNotifications) {
                showNotification('Failed to refresh. Using local data.', 'error');
            }
        });
}

// Update the refresh timestamp display
function updateRefreshTimestamp() {
    const timestampEl = document.getElementById('refresh-timestamp');
    if (!timestampEl) return;
    
    if (!lastRefreshTime) {
        timestampEl.textContent = 'Checking for updates...';
        return;
    }
    
    const secondsAgo = Math.floor((Date.now() - lastRefreshTime) / 1000);
    
    if (secondsAgo < 5) {
        timestampEl.textContent = 'Just updated';
    } else if (secondsAgo < 60) {
        timestampEl.textContent = `Updated ${secondsAgo} seconds ago`;
    } else {
        const minutesAgo = Math.floor(secondsAgo / 60);
        timestampEl.textContent = `Updated ${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    }
}

// Save resources to localStorage and JSONbin.io
function saveResources(resources) {
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
    
    saveToAPI(resources)
        .then(function() {
            console.log('Saved to API successfully');
        })
        .catch(function(error) {
            console.error('Failed to save to API:', error);
        });
}

// Create a resource card element
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    const status = calculateResourceStatus(resource);
    const categoryInfo = getCategoryInfo(resource.category);
    
    // Format category name for display
    const categoryDisplay = resource.category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    card.innerHTML = `
        <div class="resource-category-badge" style="background-color: ${categoryInfo.color}20; color: ${categoryInfo.color};">
            ${categoryInfo.icon} ${categoryDisplay}
        </div>
        <h3 class="resource-name">${resource.name}</h3>
        <p class="resource-location"><strong>Location:</strong> ${resource.location}</p>
        ${resource.bookingType === BOOKING_TYPES.TIME_SLOT ? 
            `<p class="resource-capacity"><strong>Capacity:</strong> ${resource.capacity} ${resource.category === CATEGORIES.STUDY_SPACE ? 'seats' : resource.category === CATEGORIES.SPORTS_FACILITY ? 'group' : 'person(s)'}</p>` :
            `<p class="resource-quantity"><strong>Total Quantity:</strong> ${resource.totalQuantity}</p>`
        }
        <p class="resource-status">
            <strong>Status:</strong> 
            <span class="${status.className}">${status.text}</span>
        </p>
        <button class="book-btn" data-id="${resource.id}">
            ${resource.bookingType === BOOKING_TYPES.TIME_SLOT ? 'Book Now' : 'Issue Equipment'}
        </button>
    `;
    
    return card;
}

// Calculate resource status based on booking type
function calculateResourceStatus(resource) {
    if (resource.bookingType === BOOKING_TYPES.TIME_SLOT) {
        return calculateTimeSlotStatus(resource);
    } else if (resource.bookingType === BOOKING_TYPES.QUANTITY) {
        return calculateQuantityStatus(resource);
    }
    
    return { text: 'Unknown', className: 'status-unknown' };
}

// Calculate status for time-slot based resources
function calculateTimeSlotStatus(resource) {
    const totalSlots = 22; // 9 AM - 8 PM in 30-min intervals
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
        const availableSlots = totalSlots - bookedSlots;
        return { 
            text: `${availableSlots} slots available`, 
            className: 'status-partial' 
        };
    } else {
        return { text: 'Fully Booked', className: 'status-full' };
    }
}

// Calculate status for quantity-based resources
function calculateQuantityStatus(resource) {
    const available = calculateAvailableQuantity(resource);
    const total = resource.totalQuantity;
    
    if (available === total) {
        return { 
            text: `All ${total} available`, 
            className: 'status-available' 
        };
    } else if (available > 0) {
        return { 
            text: `${available} of ${total} available`, 
            className: 'status-partial' 
        };
    } else {
        return { 
            text: 'Out of Stock', 
            className: 'status-full' 
        };
    }
}

// Render all resources to the view
function renderResources() {
    filterAndRenderResources();
}

// Filter and render resources based on search and filter criteria
function filterAndRenderResources() {
    const container = document.getElementById('resources-view');
    
    if (!container) {
        console.error('Resources view container not found');
        return;
    }
    
    // Get filter values
    const searchTerm = document.getElementById('resource-search') ? document.getElementById('resource-search').value.toLowerCase() : '';
    const categoryFilter = document.getElementById('category-filter') ? document.getElementById('category-filter').value : 'all';
    const availabilityFilter = document.getElementById('availability-filter') ? document.getElementById('availability-filter').value : 'all';
    
    // Remove existing grid if it exists
    const existingGrid = container.querySelector('.resources-grid');
    if (existingGrid) {
        existingGrid.remove();
    }
    
    // Remove existing message if it exists
    const existingMessage = container.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create a grid container for cards
    const grid = document.createElement('div');
    grid.className = 'resources-grid';
    
    // Load and filter resources
    let resources = loadResources();
    console.log('Rendering resources:', resources.length, 'resources found');
    
    // Apply filters
    resources = resources.filter(function(resource) {
        // Search filter
        const matchesSearch = !searchTerm || 
            resource.name.toLowerCase().includes(searchTerm) ||
            resource.location.toLowerCase().includes(searchTerm);
        
        // Category filter
        const matchesCategory = categoryFilter === 'all' || resource.category === categoryFilter;
        
        // Availability filter
        let matchesAvailability = true;
        if (availabilityFilter === 'available') {
            const status = calculateResourceStatus(resource);
            matchesAvailability = status.available > 0;
        } else if (availabilityFilter === 'unavailable') {
            const status = calculateResourceStatus(resource);
            matchesAvailability = status.available === 0;
        }
        
        return matchesSearch && matchesCategory && matchesAvailability;
    });
    
    if (resources.length === 0) {
        showMessage(container, 'No resources match your search criteria.', 'info');
        return;
    }
    
    resources.forEach(function(resource) {
        const card = createResourceCard(resource);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
    console.log('Resources rendered successfully');
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
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    
    resources.forEach(function(resource) {
        if (resource.bookings && resource.bookings.length > 0) {
            resource.bookings.forEach(function(booking) {
                if (booking.user === userName) {
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
    
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'booking-details';
    
    // Display booking details based on type
    if (booking.slots && booking.slots.length > 0) {
        // Time-slot booking
        const slotsLabel = document.createElement('strong');
        slotsLabel.textContent = 'Time Slots: ';
        detailsContainer.appendChild(slotsLabel);
        
        const slotsText = document.createElement('span');
        slotsText.textContent = booking.slots.join(', ');
        detailsContainer.appendChild(slotsText);
        detailsContainer.appendChild(document.createElement('br'));
        
        // Additional info for specific categories
        if (booking.purpose) {
            const purposeLabel = document.createElement('strong');
            purposeLabel.textContent = 'Purpose: ';
            detailsContainer.appendChild(purposeLabel);
            
            const purposeText = document.createElement('span');
            purposeText.textContent = booking.purpose;
            detailsContainer.appendChild(purposeText);
            detailsContainer.appendChild(document.createElement('br'));
        }
        
        if (booking.meetingTitle) {
            const titleLabel = document.createElement('strong');
            titleLabel.textContent = 'Meeting: ';
            detailsContainer.appendChild(titleLabel);
            
            const titleText = document.createElement('span');
            titleText.textContent = booking.meetingTitle;
            detailsContainer.appendChild(titleText);
            detailsContainer.appendChild(document.createElement('br'));
        }
        
        if (booking.meetingSize) {
            const sizeLabel = document.createElement('strong');
            sizeLabel.textContent = 'Attendees: ';
            detailsContainer.appendChild(sizeLabel);
            
            const sizeText = document.createElement('span');
            sizeText.textContent = booking.meetingSize;
            detailsContainer.appendChild(sizeText);
            detailsContainer.appendChild(document.createElement('br'));
        }
    } else if (booking.quantity) {
        // Quantity-based booking
        const quantityLabel = document.createElement('strong');
        quantityLabel.textContent = 'Quantity: ';
        detailsContainer.appendChild(quantityLabel);
        
        const quantityText = document.createElement('span');
        quantityText.textContent = booking.quantity + ' unit(s)';
        detailsContainer.appendChild(quantityText);
        detailsContainer.appendChild(document.createElement('br'));
        
        if (booking.issueReason) {
            const reasonLabel = document.createElement('strong');
            reasonLabel.textContent = 'Reason: ';
            detailsContainer.appendChild(reasonLabel);
            
            const reasonText = document.createElement('span');
            reasonText.textContent = booking.issueReason;
            detailsContainer.appendChild(reasonText);
            detailsContainer.appendChild(document.createElement('br'));
        }
        
        if (booking.purpose) {
            const purposeLabel = document.createElement('strong');
            purposeLabel.textContent = 'Purpose: ';
            detailsContainer.appendChild(purposeLabel);
            
            const purposeText = document.createElement('span');
            purposeText.textContent = booking.purpose;
            detailsContainer.appendChild(purposeText);
            detailsContainer.appendChild(document.createElement('br'));
        }
    }
    
    // Add actions container with cancel button
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'booking-actions';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn-cancel';
    cancelBtn.textContent = 'Cancel Booking';
    cancelBtn.onclick = function() {
        cancelBooking(booking.resourceId, booking);
    };
    
    actionsContainer.appendChild(cancelBtn);
    
    card.appendChild(header);
    card.appendChild(detailsContainer);
    card.appendChild(actionsContainer);
    
    return card;
}

// Cancel a booking
function cancelBooking(resourceId, booking) {
    if (!confirm('Are you sure you want to cancel this booking?')) {
        return;
    }
    
    const resources = loadResources();
    const resource = resources.find(r => r.id === resourceId);
    
    if (!resource || !resource.bookings) {
        alert('Booking not found.');
        return;
    }
    
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    
    // Find and remove the booking
    let bookingIndex = -1;
    
    if (booking.slots) {
        // Time-slot booking
        bookingIndex = resource.bookings.findIndex(b => 
            b.user === userName && 
            b.date === booking.date && 
            JSON.stringify(b.slots) === JSON.stringify(booking.slots)
        );
    } else if (booking.quantity) {
        // Quantity-based booking
        bookingIndex = resource.bookings.findIndex(b => 
            b.user === userName && 
            b.date === booking.date && 
            b.quantity === booking.quantity &&
            (b.issueReason === booking.issueReason || b.purpose === booking.purpose)
        );
    }
    
    if (bookingIndex !== -1) {
        resource.bookings.splice(bookingIndex, 1);
        saveResources(resources);
        renderBookings();
        showNotification('Booking cancelled successfully!', 'success');
        
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

// Open booking modal with dynamic content based on resource category
function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (!modal) return;
    
    const resources = loadResources();
    const resource = resources.find(r => r.id === currentResourceId);
    
    if (!resource) {
        alert('Resource not found');
        return;
    }
    
    startSlot = null;
    endSlot = null;
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    
    // Render dynamic modal content based on category
    renderModalContent(resource);
    
    // Hide error message after rendering
    setTimeout(() => {
        const errorMsg = document.getElementById('error-message');
        if (errorMsg) {
            errorMsg.classList.add('hidden');
        }
    }, 10);
}

// Render modal content dynamically based on resource category
function renderModalContent(resource) {
    const modal = document.getElementById('booking-modal');
    const form = document.getElementById('booking-form');
    const modalTitle = modal.querySelector('.modal-header h3');
    
    // Update modal title
    modalTitle.textContent = `Book ${resource.name}`;
    
    // Clear form content but preserve structure
    form.innerHTML = '';
    
    // Render category-specific content
    if (resource.bookingType === BOOKING_TYPES.TIME_SLOT) {
        renderTimeSlotModalForm(form, resource);
    } else if (resource.bookingType === BOOKING_TYPES.QUANTITY) {
        renderQuantityModalForm(form, resource);
    }
}

// Render time-slot booking form (Study Spaces, Sports Facilities, Meeting Rooms)
function renderTimeSlotModalForm(form, resource) {
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    
    const categoryInfo = getCategoryInfo(resource.category);
    
    form.innerHTML = `
        <div class="booking-info">
            <p><strong>Resource:</strong> ${resource.name}</p>
            <p><strong>Location:</strong> ${resource.location}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            ${resource.category === CATEGORIES.SPORTS_FACILITY ? 
                '<p class="info-message">⚠️ Only one booking allowed per time slot</p>' : 
                `<p><strong>Capacity:</strong> ${resource.capacity} seats</p>`}
        </div>
        
        ${resource.category === CATEGORIES.STUDY_SPACE ? `
            <div class="form-group">
                <label>Purpose of booking:</label>
                <select id="booking-purpose" required>
                    <option value="">Select purpose</option>
                    <option value="Group Study">Group Study</option>
                    <option value="Individual Study">Individual Study</option>
                    <option value="Project Work">Project Work</option>
                    <option value="Exam Preparation">Exam Preparation</option>
                </select>
            </div>
        ` : ''}
        
        ${resource.category === CATEGORIES.MEETING_ROOM ? `
            <div class="form-group">
                <label>Meeting Title:</label>
                <input type="text" id="meeting-title" required placeholder="Enter meeting title">
            </div>
            <div class="form-group">
                <label>Expected Attendees:</label>
                <input type="number" id="meeting-size" required min="1" max="${resource.capacity}" 
                       placeholder="Number of attendees">
            </div>
        ` : ''}
        
        <div class="form-group">
            <label>Select Time Slots:</label>
            <p class="helper-text">Click to select start and end time</p>
            <div id="slots-container" class="slots-grid"></div>
        </div>
        
        <div class="form-group">
            <label class="checkbox-label">
                <input type="checkbox" id="terms-checkbox">
                I agree to the <a href="#" id="view-terms-link">terms and conditions</a>
            </label>
        </div>
        
        <div id="error-message" class="error-message hidden"></div>
        
        <div class="modal-actions">
            <button type="button" class="btn-secondary" onclick="closeBookingModal()">Cancel</button>
            <button type="submit" class="btn-primary">Confirm Booking</button>
        </div>
    `;
    
    // Render time slots after DOM update
    setTimeout(function() {
        renderSlots();
    }, 10);
    
    // Add terms link handler
    const termsLink = document.getElementById('view-terms-link');
    if (termsLink) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            openTermsModal();
        });
    }
}

// Render quantity-based booking form (Tech Equipment, Sports Equipment)
function renderQuantityModalForm(form, resource) {
    const availableQuantity = calculateAvailableQuantity(resource);
    const categoryInfo = getCategoryInfo(resource.category);
    const today = getTodayDate();
    const maxReturnDate = getMaxReturnDate(today);
    
    form.innerHTML = `
        <div class="booking-info">
            <p><strong>Equipment:</strong> ${resource.name}</p>
            <p><strong>Location:</strong> ${resource.location}</p>
            <p><strong>Available:</strong> <span class="availability-badge">${availableQuantity} of ${resource.totalQuantity}</span></p>
        </div>
        
        
        
        ${resource.category === CATEGORIES.TECH_EQUIPMENT ? `
            <div class="form-group">
                <label>Reason for Issue: <span class="required">*</span></label>
                <textarea id="issue-reason" required rows="3" 
                          placeholder="Please specify why you need this equipment"></textarea>
            </div>
            <div class="form-group">
                <label>Issue Date:</label>
                <input type="date" id="issue-date" required value="${selectedDate}" min="${today}">
            </div>
            <div class="form-group">
                <label>Return Date: <span class="required">*</span></label>
                <input type="date" id="return-date" required min="${today}" max="${maxReturnDate}">
                <p class="helper-text">Maximum return period: 1 month from issue date</p>
            </div>
        ` : `
            <div class="form-group">
                <label>Purpose:</label>
                <select id="equipment-purpose" required>
                    <option value="">Select purpose</option>
                    <option value="Practice">Practice</option>
                    <option value="Tournament">Tournament</option>
                    <option value="Recreational">Recreational</option>
                    <option value="Training">Training</option>
                </select>
            </div>
            <div class="form-group">
                <label>Date Needed:</label>
                <input type="date" id="issue-date" required value="${selectedDate}" min="${today}">
            </div>
        `}
        
        <div class="form-group">
            <label class="checkbox-label">
                <input type="checkbox" id="terms-checkbox">
                I agree to the <a href="#" id="view-terms-link">terms and conditions</a>
            </label>
        </div>
        
        <div id="error-message" class="error-message hidden"></div>
        
        <div class="modal-actions">
            <button type="button" class="btn-secondary" onclick="closeBookingModal()">Cancel</button>
            <button type="submit" class="btn-primary">Confirm Issue</button>
        </div>
    `;
    
    // Add date validation for tech equipment
    if (resource.category === CATEGORIES.TECH_EQUIPMENT) {
        setTimeout(function() {
            const issueDateInput = document.getElementById('issue-date');
            const returnDateInput = document.getElementById('return-date');
            
            if (issueDateInput && returnDateInput) {
                issueDateInput.addEventListener('change', function() {
                    const newMaxDate = getMaxReturnDate(this.value);
                    returnDateInput.min = this.value;
                    returnDateInput.max = newMaxDate;
                    
                    // Reset return date if it's now invalid
                    if (returnDateInput.value) {
                        const issueDate = new Date(this.value);
                        const returnDate = new Date(returnDateInput.value);
                        if (returnDate < issueDate) {
                            returnDateInput.value = '';
                        }
                    }
                });
            }
        }, 10);
    }
    
    // Add terms link handler
    const termsLink = document.getElementById('view-terms-link');
    if (termsLink) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            openTermsModal();
        });
    }
}

// Calculate available quantity for equipment
function calculateAvailableQuantity(resource) {
    if (!resource || resource.bookingType !== BOOKING_TYPES.QUANTITY) {
        return 0;
    }
    
    let bookedQuantity = 0;
    
    if (resource.bookings && resource.bookings.length > 0) {
        resource.bookings.forEach(function(booking) {
            // Count only active bookings (you can add date filtering if needed)
            if (booking.quantity) {
                bookedQuantity += booking.quantity;
            }
        });
    }
    
    return resource.totalQuantity - bookedQuantity;
}

// Get category-specific information
function getCategoryInfo(category) {
    const categoryMap = {
        [CATEGORIES.STUDY_SPACE]: { icon: '📚', color: '#3b82f6' },
        [CATEGORIES.SPORTS_FACILITY]: { icon: '⚽', color: '#10b981' },
        [CATEGORIES.MEETING_ROOM]: { icon: '👥', color: '#8b5cf6' },
        [CATEGORIES.TECH_EQUIPMENT]: { icon: '💻', color: '#f59e0b' },
        [CATEGORIES.SPORTS_EQUIPMENT]: { icon: '🏀', color: '#ef4444' }
    };
    
    return categoryMap[category] || { icon: '📦', color: '#6b7280' };
}

// Close booking modal
function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    const form = document.getElementById('booking-form');
    if (modal) {
        modal.classList.add('hidden');
    }
    if (form) {
        form.innerHTML = '';
    }
    
    document.body.classList.remove('modal-open');
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
    
    if (!container) {
        console.error('Slots container not found');
        return;
    }
    
    container.innerHTML = '';
    
    const slots = generateSlots();
    console.log('Generating', slots.length, 'time slots');
    
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
    
    console.log('Rendered', slots.length, 'time slot buttons');
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
    
    if (!termsCheckbox || !termsCheckbox.checked) {
        if (errorMsg) {
            errorMsg.textContent = 'Please agree to the terms and conditions';
            errorMsg.classList.remove('hidden');
        }
        return;
    }
    
    // Load resources
    const resources = loadResources();
    const resource = resources.find(r => r.id === currentResourceId);
    
    if (!resource) {
        if (errorMsg) {
            errorMsg.textContent = 'Resource not found';
            errorMsg.classList.remove('hidden');
        }
        return;
    }
    
    // Handle based on booking type
    if (resource.bookingType === BOOKING_TYPES.TIME_SLOT) {
        handleTimeSlotBooking(resource, resources, errorMsg);
    } else if (resource.bookingType === BOOKING_TYPES.QUANTITY) {
        handleQuantityBooking(resource, resources, errorMsg);
    }
}

// Handle time-slot based booking
function handleTimeSlotBooking(resource, resources, errorMsg) {
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
    
    // Create booking object
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    
    const newBooking = {
        user: userName,
        date: selectedDate,
        slots: selectedSlots,
        startSlot: startSlot,
        endSlot: endSlot || startSlot
    };
    
    // Add category-specific fields
    if (resource.category === CATEGORIES.STUDY_SPACE) {
        const purpose = document.getElementById('booking-purpose');
        if (purpose && purpose.value) {
            newBooking.purpose = purpose.value;
        }
    } else if (resource.category === CATEGORIES.MEETING_ROOM) {
        const meetingTitle = document.getElementById('meeting-title');
        const meetingSize = document.getElementById('meeting-size');
        
        if (meetingTitle && meetingTitle.value) {
            newBooking.meetingTitle = meetingTitle.value;
        }
        if (meetingSize && meetingSize.value) {
            const size = parseInt(meetingSize.value);
            if (size > resource.capacity) {
                errorMsg.textContent = `Meeting size cannot exceed room capacity of ${resource.capacity}`;
                errorMsg.classList.remove('hidden');
                return;
            }
            newBooking.meetingSize = size;
        }
    }
    
    // Save booking
    resource.bookings.push(newBooking);
    saveResources(resources);
    
    showNotification(`Successfully booked ${resource.name} for ${selectedSlots.length} time slot(s)`, 'success');
    closeBookingModal();
    renderResources();
}

// Handle quantity-based booking
function handleQuantityBooking(resource, resources, errorMsg) {
    const issueDate = document.getElementById('issue-date');
    
    // Default quantity to 1 since quantity selector was removed from modal
    const requestedQuantity = 1;
    const availableQuantity = calculateAvailableQuantity(resource);
    
    if (requestedQuantity > availableQuantity) {
        errorMsg.textContent = `Equipment not available`;
        errorMsg.classList.remove('hidden');
        return;
    }
    
    // Create booking object
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    
    const newBooking = {
        user: userName,
        quantity: requestedQuantity,
        issueDate: issueDate ? issueDate.value : selectedDate,
        date: issueDate ? issueDate.value : selectedDate
    };
    
    // Add category-specific fields
    if (resource.category === CATEGORIES.TECH_EQUIPMENT) {
        const issueReason = document.getElementById('issue-reason');
        const returnDate = document.getElementById('return-date');
        
        if (!issueReason || !issueReason.value.trim()) {
            errorMsg.textContent = 'Please specify reason for equipment issue';
            errorMsg.classList.remove('hidden');
            return;
        }
        
        if (!returnDate || !returnDate.value) {
            errorMsg.textContent = 'Please specify return date';
            errorMsg.classList.remove('hidden');
            return;
        }
        
        // Validate return date is within 1 month
        const issue = new Date(issueDate.value);
        const returnDt = new Date(returnDate.value);
        const maxReturn = new Date(issue);
        maxReturn.setMonth(maxReturn.getMonth() + 1);
        
        if (returnDt > maxReturn) {
            errorMsg.textContent = 'Return date cannot be more than 1 month from issue date';
            errorMsg.classList.remove('hidden');
            return;
        }
        
        if (returnDt < issue) {
            errorMsg.textContent = 'Return date cannot be before issue date';
            errorMsg.classList.remove('hidden');
            return;
        }
        
        newBooking.issueReason = issueReason.value.trim();
        newBooking.returnDate = returnDate.value;
    } else if (resource.category === CATEGORIES.SPORTS_EQUIPMENT) {
        const purpose = document.getElementById('equipment-purpose');
        if (purpose && purpose.value) {
            newBooking.purpose = purpose.value;
        }
    }
    
    // Save booking
    resource.bookings.push(newBooking);
    saveResources(resources);
    
    showNotification(`Successfully issued ${requestedQuantity} unit(s) of ${resource.name}`, 'success');
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

// Get max return date (1 month from issue date)
function getMaxReturnDate(issueDate) {
    const date = new Date(issueDate);
    date.setMonth(date.getMonth() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
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
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    const todayBookings = allBookings.filter(function(b) {
        return b.date === todayDate && b.user === userName;
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
    
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    const todayBookings = allBookings.filter(function(b) {
        return b.date === todayDate && b.user === userName;
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
    
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    const userBookings = allBookings.filter(function(b) {
        return b.user === userName;
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
    
    const categoryCounts = {};
    resources.forEach(function(resource) {
        if (!categoryCounts[resource.category]) {
            categoryCounts[resource.category] = { total: 0, available: 0 };
        }
        categoryCounts[resource.category].total++;
        
        // Check availability based on booking type
        if (resource.bookingType === BOOKING_TYPES.TIME_SLOT) {
            const hasBookingToday = resource.bookings && resource.bookings.some(function(b) {
                return b.date === todayDate;
            });
            if (!hasBookingToday) {
                categoryCounts[resource.category].available++;
            }
        } else if (resource.bookingType === BOOKING_TYPES.QUANTITY) {
            const availableQty = calculateAvailableQuantity(resource);
            if (availableQty > 0) {
                categoryCounts[resource.category].available++;
            }
        }
    });
    
    const summaryGrid = document.createElement('div');
    summaryGrid.className = 'summary-grid';
    
    Object.keys(categoryCounts).forEach(function(category) {
        const card = document.createElement('div');
        card.className = 'summary-card';
        
        const categoryInfo = getCategoryInfo(category);
        const categoryDisplay = category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        card.innerHTML = `
            <div class="summary-icon" style="color: ${categoryInfo.color};">${categoryInfo.icon}</div>
            <div class="summary-type">${categoryDisplay}</div>
            <div class="summary-stats">${categoryCounts[category].available} of ${categoryCounts[category].total} available</div>
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
    const userData = getUserProfile();
    const userName = userData ? userData.name : 'Student';
    const bookingsByDate = {};
    allBookings.forEach(function(b) {
        if (b.user === userName) {
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

// User Profile Management Functions

// Get user profile from localStorage
function getUserProfile() {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return stored ? JSON.parse(stored) : null;
}

// Save user profile to localStorage
function saveUserProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
}

// Update UI with user profile data
function updateUserUI(profile) {
    const userLabel = document.getElementById('user-label');
    const userAvatar = document.getElementById('user-avatar');
    
    if (userLabel && profile.name) {
        userLabel.textContent = profile.name;
    }
    
    if (userAvatar && profile.name) {
        const initials = profile.name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .slice(0, 2)
            .join('');
        userAvatar.textContent = initials;
    }
}

// Check and show user registration modal
function checkAndShowUserRegistration() {
    const userProfile = getUserProfile();
    
    if (!userProfile) {
        // First-time user, show registration modal
        const modal = document.getElementById('user-registration-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    } else {
        // Update UI with existing profile
        updateUserUI(userProfile);
    }
    
    // Add input validation to prevent invalid characters
    const nameInput = document.getElementById('user-name');
    const phoneInput = document.getElementById('user-phone');
    const rollInput = document.getElementById('user-roll');
    const phoneValidation = document.getElementById('phone-validation');
    const rollValidation = document.getElementById('roll-validation');
    
    if (nameInput) {
        nameInput.addEventListener('input', function(e) {
            // Only allow letters and spaces
            this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
        });
    }
    
    if (phoneInput && phoneValidation) {
        phoneInput.addEventListener('input', function(e) {
            // Only allow digits, max 10
            this.value = this.value.replace(/[^\d]/g, '').slice(0, 10);
            
            if (this.value.length === 0) {
                phoneValidation.textContent = '';
                phoneValidation.classList.add('hidden');
            } else if (this.value.length < 10) {
                phoneValidation.textContent = `${this.value.length}/10 digits`;
                phoneValidation.classList.remove('hidden');
                phoneValidation.classList.add('error');
                phoneValidation.classList.remove('success');
            } else if (this.value.length === 10) {
                phoneValidation.textContent = '✓ Valid phone number';
                phoneValidation.classList.remove('hidden');
                phoneValidation.classList.add('success');
                phoneValidation.classList.remove('error');
            }
        });
    }
    
    if (rollInput && rollValidation) {
        rollInput.addEventListener('input', function(e) {
            // Only allow digits, max 5
            this.value = this.value.replace(/[^\d]/g, '').slice(0, 5);
            
            const rollNum = parseInt(this.value, 10);
            
            if (this.value.length === 0) {
                rollValidation.textContent = '';
                rollValidation.classList.add('hidden');
            } else if (this.value.length < 5) {
                rollValidation.textContent = `${this.value.length}/5 digits required`;
                rollValidation.classList.remove('hidden');
                rollValidation.classList.add('error');
                rollValidation.classList.remove('success');
            } else if (rollNum <= 10000) {
                rollValidation.textContent = '✗ Roll number must be greater than 10000';
                rollValidation.classList.remove('hidden');
                rollValidation.classList.add('error');
                rollValidation.classList.remove('success');
            } else {
                rollValidation.textContent = '✓ Valid roll number';
                rollValidation.classList.remove('hidden');
                rollValidation.classList.add('success');
                rollValidation.classList.remove('error');
            }
        });
    }
    
    // Handle registration form submission
    const registrationForm = document.getElementById('user-registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('user-name').value.trim();
            const batch = document.getElementById('user-batch').value.trim();
            const rollNumber = document.getElementById('user-roll').value.trim();
            const phone = document.getElementById('user-phone').value.trim();
            
            // Final validation before submission
            if (name.length < 3) {
                alert('Please enter a valid name (at least 3 characters).');
                return;
            }
            
            if (phone.length !== 10) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }
            
            const rollNum = parseInt(rollNumber, 10);
            if (rollNumber.length !== 5 || rollNum <= 10000) {
                alert('Please enter a valid roll number (5 digits, greater than 10000).');
                return;
            }
            
            const profile = {
                name: name,
                batch: batch,
                rollNumber: rollNumber,
                phone: phone,
                registeredAt: new Date().toISOString()
            };
            
            if (profile.name && profile.batch && profile.rollNumber && profile.phone) {
                saveUserProfile(profile);
                updateUserUI(profile);
                
                // Close modal
                const modal = document.getElementById('user-registration-modal');
                if (modal) {
                    modal.classList.add('hidden');
                }
                
                // Show welcome message
                setTimeout(function() {
                    alert('Welcome to CampusSlot, ' + profile.name + '! \n\nClass of ' + profile.batch + '\nRoll No: ' + profile.rollNumber + '\n\nYou can now start booking resources.');
                }, 300);
            }
        });
    }
}




