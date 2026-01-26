# CampusSlot
### A Frontend Campus Resource Availability and Booking System

---

## Project Description

CampusSlot is a browser-based web application designed to help students view, book, and manage campus resources. The system supports two types of bookings: time-slot based bookings for rooms and facilities, and quantity-based issuing for equipment. Built entirely with vanilla JavaScript, HTML, and CSS, the application demonstrates comprehensive DOM manipulation and client-side state management without requiring any backend infrastructure.

---

## Problem Statement

Students often struggle to determine whether campus resources such as study rooms, sports facilities, meeting rooms, or equipment are available. This leads to wasted time, scheduling conflicts, and inefficient resource utilization. CampusSlot addresses this problem by providing a centralized, visual interface where students can:

- Check real-time availability of campus resources
- Book time slots for rooms and facilities
- Issue equipment with return date tracking
- Manage their bookings from a single dashboard
- Avoid double-booking through conflict detection

---

## Features Implemented

### Resource Management
- Browse 42 campus resources across 5 categories (study spaces, sports facilities, meeting rooms, tech equipment, sports equipment)
- Search resources by name or location
- Filter by category and availability status
- View detailed resource information including location, capacity, and current availability

### Booking System
- **Time-slot booking**: Select 30-minute time slots from 9 AM to 8 PM for rooms and facilities
- **Quantity-based issuing**: Issue equipment with specified issue and return dates
- Automatic conflict detection prevents double bookings
- Form validation ensures data integrity (e.g., return date cannot exceed 1 month)
- Category-specific booking forms (different fields for study rooms vs equipment)

### User Dashboard
- View all user bookings in one place
- Sort bookings by date
- Cancel bookings with confirmation
- Export bookings to CSV for record-keeping
- Visual calendar widget showing booking dates

### Analytics and Insights
- Dashboard with quick stats (total bookings, upcoming bookings, today's schedule)
- Analytics view with booking trends
- Most booked resources and peak time slots
- Interactive calendar with booking indicators

### User Experience
- User registration modal on first visit (name, batch, roll number, phone)
- Real-time input validation with live feedback messages
- Light and dark theme toggle with preference saving
- Responsive design with mobile menu support
- Background scroll prevention when modals are open

### Data Persistence
- All data stored in browser localStorage
- Data migration logic for backward compatibility
- Automatic data synchronization across browser tabs

---

## DOM Concepts Used

This project demonstrates extensive DOM manipulation as required by Web Dev II guidelines:

### Dynamic Element Creation
- Resource cards created entirely via `createElement()` and `innerHTML`
- Time slot buttons (22 slots) generated programmatically for each booking session
- Booking cards with nested DOM structures built from scratch
- Calendar widget with 35+ day cells created dynamically
- Dashboard metric cards assembled via JavaScript

### Conditional Rendering
- Different modal forms rendered based on resource category (study space vs equipment)
- Capacity labels change based on category (seats vs group vs person)
- Availability status calculated and displayed conditionally
- Empty state messages shown when no data exists

### Event Handling and Delegation
- Event delegation on sidebar navigation (single listener for all links)
- Event delegation on resource cards (single listener for all book buttons)
- Form submission handling with validation
- Modal close events (click outside, close button, cancel button)
- Calendar day click events with dynamic data

### DOM Updates on Interaction
- Search and filter updates rebuild the entire resource grid
- Slot selection updates visual state of multiple buttons
- Booking cancellation removes cards from the DOM
- Theme toggle updates document body class
- Profile dropdown shows/hides on click

### Modal Management
- Modals created and destroyed dynamically
- Form content cleared and regenerated based on resource type
- Error messages shown/hidden via DOM manipulation
- Background scroll disabled when modal is open (body class toggle)

---

## JavaScript Concepts Used

### Data Structures and State Management
- Arrays to store resources and bookings
- Objects for configuration (CATEGORIES, BOOKING_TYPES, STORAGE_KEYS)
- Complex nested objects for resource data structure
- Global state variables (currentView, currentResourceId, selectedDate)

### ES6 Features
- `const` and `let` for proper variable scoping
- Arrow functions in event handlers and callbacks
- Template literals for dynamic HTML generation
- Array methods: `forEach`, `filter`, `map`, `find`, `sort`
- Object destructuring and spread operators

### Date and Time Manipulation
- Date object for calendar calculations
- String formatting for YYYY-MM-DD format
- Time slot generation (9 AM to 8 PM in 30-minute intervals)
- Date comparisons for validation (past dates, max return date)
- Month/year navigation in calendar widget

### Form Validation
- Real-time input validation with regex
- Preventing invalid characters (letters-only name, digits-only phone/roll)
- Live feedback messages below input fields
- Terms and conditions checkbox validation
- Booking conflict detection before submission

### LocalStorage API
- `localStorage.setItem()` for data persistence
- `localStorage.getItem()` for data retrieval
- JSON serialization and deserialization
- Data migration logic when structure changes
- Theme preference storage

### Functional Programming Patterns
- Pure functions for calculations (calculateAvailableQuantity, getTodayDate)
- Helper functions for reusable logic (getCategoryInfo, formatDate)
- Separation of rendering and logic functions
- Callback functions for event handling

---

## User Flow

### 1. First Visit and Registration
1. User opens the application in a browser
2. Registration modal appears automatically
3. User enters name, selects batch (dropdown), enters roll number (5 digits > 10000), and phone number (10 digits)
4. Live validation prevents invalid input and shows feedback messages
5. After successful registration, user profile is saved to localStorage

### 2. Browsing Resources
1. User navigates to "Browse Resources" from the sidebar
2. 42 resources are displayed as cards with category badges, location, capacity, and availability status
3. User can search by name or location using the search bar
4. User can filter by category (study space, sports facility, etc.) using dropdown
5. User can filter by availability (available, unavailable, all) using dropdown
6. Resource grid updates dynamically as filters are applied

### 3. Booking a Resource

#### Time-Slot Booking (Study Rooms, Sports Facilities, Meeting Rooms)
1. User clicks "Book Now" on a resource card
2. Modal opens with a calendar showing available time slots for the selected date
3. User selects start time slot by clicking a button
4. User selects end time slot (range is visually highlighted)
5. For study spaces: user selects purpose from dropdown
6. For meeting rooms: user enters meeting title and expected attendees
7. User checks the terms and conditions checkbox
8. User clicks "Confirm Booking"
9. System validates: slots are selected, no conflicts exist, terms are accepted
10. If valid: booking is saved, success notification appears, modal closes
11. If invalid: error message is displayed in the modal

#### Quantity-Based Issuing (Tech Equipment, Sports Equipment)
1. User clicks "Issue Equipment" on an equipment card
2. Modal opens with issue form
3. For tech equipment: user enters reason, selects issue date, selects return date (max 1 month)
4. For sports equipment: user selects purpose and date needed
5. User checks the terms and conditions checkbox
6. User clicks "Confirm Issue"
7. System validates: quantity available, dates are valid, terms are accepted
8. If valid: issue is saved, success notification appears, modal closes
9. If invalid: error message is displayed in the modal

### 4. Viewing Bookings
1. User navigates to "My Bookings" from the sidebar
2. All user bookings are displayed as cards sorted by date (newest first)
3. Each card shows: resource name, booking date, time slots or quantity, purpose or reason
4. User can export all bookings to CSV by clicking "Export Bookings" button

### 5. Cancelling Bookings
1. User clicks "Cancel Booking" button on a booking card
2. Confirmation dialog appears
3. If confirmed: booking is removed from the data and the card disappears
4. Success notification appears
5. Resource availability is automatically updated

### 6. Dashboard and Analytics
1. User navigates to "Dashboard" from the sidebar
2. Quick stats are displayed: total bookings, upcoming bookings, today's bookings, favorite resource
3. Today's schedule shows time slots booked for the current day
4. Interactive calendar widget shows booking dates with visual indicators
5. Quick action buttons allow navigation to "Book Now" or "View My Schedule"

### 7. Theme Customization
1. User clicks the moon/sun icon in the top-right corner
2. Theme toggles between light and dark mode
3. Preference is saved to localStorage and persists across sessions

---

## How to Run the Project

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No additional software or dependencies required

### Steps to Run
1. Clone the repository or download the project files
   ```
   git clone <repository-url>
   ```

2. Navigate to the project folder
   ```
   cd CampusSlot
   ```

3. Open `index.html` in your browser
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local development server (optional):
     ```
     # If you have Python installed:
     python -m http.server 8000
     # Then open http://localhost:8000 in your browser
     ```

4. The application is ready to use
   - First-time users will see the registration modal
   - All data is stored locally in the browser

### Notes
- No installation or build process required
- No internet connection needed after initial page load
- Data persists in browser localStorage

---

## Known Limitations

### Technical Limitations
- **Frontend-only simulation**: No actual backend server or database. All data is stored in browser localStorage.
- **No multi-user synchronization**: Each user's browser has its own isolated data. Bookings made on one device do not sync to other devices or users.
- **Data persistence dependency**: If browser localStorage is cleared (manually or by browser settings), all bookings and user data will be lost.
- **No real-time updates**: The optional external API (JSONbin.io) is used for demonstration purposes but is not required for core functionality.

### Functional Limitations
- **Single user assumption**: The system assumes one user per browser. Multiple students cannot use the same device without data conflicts.
- **No booking approval workflow**: All bookings are confirmed immediately without admin approval.
- **No email/SMS notifications**: Users must manually check the application for booking reminders.
- **Basic conflict detection**: Only checks for overlapping time slots, not resource capacity constraints within the same slot.

### Future Enhancements
- Backend integration for multi-user support
- QR code generation for booking confirmations
- Admin panel for resource management
- Booking status tracking (pending, collected, returned)
- Email/SMS notifications
- Waitlist functionality for fully booked resources

---

## Conclusion

CampusSlot demonstrates a strong understanding of frontend web development principles required for the Web Dev II (Batch 2029) course. The project showcases:

- **Extensive DOM manipulation** through dynamic element creation, conditional rendering, and real-time updates
- **Event-driven programming** with event delegation, form handling, and user interaction management
- **Client-side state management** using JavaScript objects, arrays, and localStorage API
- **Application logic implementation** including booking conflict detection, form validation, and availability calculations
- **Responsive design** with mobile support and accessibility considerations

The project successfully addresses a real-world problem faced by students on campus while demonstrating mastery of vanilla JavaScript, HTML, and CSS without relying on frameworks or libraries. All code is well-structured, beginner-friendly, and ready for academic evaluation.

---

## Project Information

- **Course**: Web Dev II (Batch 2029)
- **Project Type**: Final Project
- **Technologies Used**: HTML5, CSS3, Vanilla JavaScript
- **Development Approach**: Frontend-only, client-side rendering
- **Data Storage**: Browser localStorage
- **Responsive**: Yes
- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Edge, Safari)
