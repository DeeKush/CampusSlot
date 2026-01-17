// Global variable to track the currently active view
let currentView = 'dashboard';

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the sidebar container element
    const sidebar = document.getElementById('sidebar');
    
    // Add ONE click event listener to the sidebar (event delegation)
    sidebar.addEventListener('click', function(event) {
        
        // Prevent default link behavior
        event.preventDefault();
        
        // Find the clicked sidebar link
        // If user clicks on icon/text, go up to find the parent link
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
        
        // Update active state on sidebar links
        updateActiveSidebarLink(clickedLink);
    });
});

// Function to hide all view sections
function hideAllViews() {
    // Get all elements with class "view-section"
    const allViews = document.querySelectorAll('.view-section');
    
    // Loop through each view and add the "hidden" class
    allViews.forEach(function(view) {
        view.classList.add('hidden');
    });
}

// Function to show a specific view
function showView(viewName) {
    // Build the ID selector (e.g., "dashboard" becomes "#dashboard-view")
    const viewId = viewName + '-view';
    
    // Get the view element by ID
    const viewElement = document.getElementById(viewId);
    
    // If the view exists, remove the "hidden" class to show it
    if (viewElement) {
        viewElement.classList.remove('hidden');
    }
}

// Function to update the active state on sidebar links
function updateActiveSidebarLink(clickedLink) {
    // Get all sidebar links
    const allLinks = document.querySelectorAll('.sidebar-link');
    
    // Remove "active" class from all links
    allLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    
    // Add "active" class to the clicked link
    clickedLink.classList.add('active');
}
