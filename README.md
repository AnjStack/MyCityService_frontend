# My City Service — Doorstep Household & Personal Service Booking Web Application

**My City Service** is a modern, responsive, mobile-first service-booking web application designed for doorstep household services in **Chhindwara, Madhya Pradesh** and surrounding cities.

Built purely with **HTML5, CSS3, and Vanilla JavaScript (ES6+)** with **zero external framework dependencies** (no React, Bootstrap, or Tailwind CSS).

---

## 🌟 Key Highlights & Design Aesthetics

- **Color Palette**: Curated deep navy-blue theme (`#0a192f`, `#1e3a8a`, `#2563eb`), pure crisp white cards (`#ffffff`), and warm gold/amber accents (`#f59e0b`).
- **Responsive Hybrid Experience**:
  - **On Mobile**: Native mobile-app-style experience with sticky header, compact touch-friendly search bar, horizontal scroll tracks, and fixed bottom navigation bar (Home, Categories, Bookings, Profile).
  - **On Desktop**: Polished web layout with a centered maximum container width (`1200px`), desktop header navigation, quick search suggestions, and multi-column grid cards.
- **High-Resolution Photography**: Real service photographs across all 21 categories and salon subcategories with automatic graceful fallback handling (`handleImageError`) ensuring zero broken image links.
- **Zero-Stub Code**: Fully functional client-side hash routing, localStorage persistence, coupon validation engine, multi-step booking modal, and interactive reviews.

---

## 📁 Project Structure

```text
My_City_service/
├── index.html       # Complete semantic HTML5 structure with all app views & modals
├── style.css        # Vanilla CSS3 design system, responsive breakpoints & animations
├── script.js        # Core JavaScript application logic, SPA router & state management
└── README.md        # Comprehensive documentation & feature testing guide
```

---

## 🚀 How to Run the Website

### Option 1: Using VS Code Live Server (Recommended)
1. Open Visual Studio Code.
2. Click **File** > **Open Folder...** and select `My_City_service` (`c:\Users\anjal\Desktop\My_City_service`).
3. If you haven't already, install the **Live Server** extension by Ritwick Dey from the VS Code Extensions Marketplace (`Ctrl+Shift+X` and search for "Live Server").
4. Right-click on [`index.html`](file:///c:/Users/anjal/Desktop/My_City_service/index.html) and select **Open with Live Server** (or click **Go Live** at the bottom status bar).
5. The website will automatically launch in your default browser at `http://127.0.0.1:5500/index.html`.

### Option 2: Using Node.js
If you have Node.js installed on your machine:
```powershell
# Open terminal inside the project directory
cd c:\Users\anjal\Desktop\My_City_service

# Run a lightweight local server
npx serve . -p 3000
```
Open your browser and navigate to `http://localhost:3000`.

### Option 3: Direct File Opening
Double-click [`index.html`](file:///c:/Users/anjal/Desktop/My_City_service/index.html) to open directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🧪 Comprehensive Feature Walkthrough & Testing Guide

### 1. Header & Location Selector
- **Location Selector**: Click the location pill in the top header (initially showing `Chhindwara, MP`). A modal opens allowing you to switch cities (Chhindwara, Bhopal, Indore, Jabalpur, Nagpur, Pune) or choose specific Chhindwara localities (Gulabra, Parasia Road, Khajri, Chandangaon, VIP Road). Selecting any locality updates the header and persists to `localStorage`.
- **Search Suggestions**: Type `"salon"`, `"electrician"`, or `"clean"` into the header search bar. A dropdown will instantly appear showing top suggestions, prices, and ratings. Press `Enter` or click **View all results** to open the full catalog search view.
- **Notifications Drawer**: Click the bell icon in the header. View notifications, mark individual items as read, or clear the list.

### 2. Promotional Carousel (Home)
- Observe the sliding promotional banners featuring discounts:
  - *Home Deep Cleaning — Flat 50% Off*
  - *Salon at Home Glow Facial — Upto 40% Off*
  - *Electrician & AC Care — Starts at ₹149*
- Slides advance automatically every 4.2 seconds and pause on hover.
- Click the left/right chevron arrows or the bottom indicator pills to navigate manually.
- Click **Know More** on any slide to inspect the associated discount coupon.

### 3. Service Categories
- **Homepage Grid**: 12 quick-access category cards with photographs and badges (Salon, Cooking, Construction, Repair, Cleaning, Painting, Electrician, Carpenter, Driver, Telephone, WiFi Repair, and a **More (21+)** card).
- **All Categories View**: Navigate to `#categories` (via bottom navigation or top navigation link) to view all **21 categories** categorized into *Home & Repair*, *Personal & Care*, *Appliance Care*, and *Moving & Security*. Test the live filter input.

### 4. Category Details & Subcategories (Salon Showcase)
- On the homepage or categories page, click **Salon**.
- Notice the large salon cover photograph, verified badge, average rating (`4.86`), and total review count (`1,420+`).
- **Horizontally Scrollable Subcategories Track**:
  - *My Packages*
  - *Threading*
  - *Hair Coloring*
  - *Haircut & Styling*
  - *Pedicure & Manicure*
  - *Facial & Cleanups*
  - *Hair Spa*
  - *Bridal Makeup*
- Click **Pedicure & Manicure** or **Facial & Cleanups** to filter the displayed service cards dynamically.
- Try sorting by **Price: Low to High** or **Top Rated** using the sort dropdown.
- Click the **Share** button on the cover photo to trigger the native Web Share API (or copy the shareable link to the clipboard).

### 5. Service Details & Add-ons
- Click on any service title (e.g., *Diamond Radiant Glow Facial*).
- Inspect the detailed view containing:
  - High-resolution hero image with favorite bookmark heart.
  - Duration (`60 mins`) and 7-day rework warranty chips.
  - Transparent pricing with discount badges.
  - **What's Included** checklist with green verification checkmarks.
  - **Recommended Add-ons** (e.g. *Gold Collagen Under-Eye Mask* or *Express Sara Herbal De-Tan Pack*). Click the checkbox to toggle add-ons and watch the total price update live in the sticky bottom bar!
  - Customer review breakdown and verified testimonials.

### 6. Booking System
- Click **Book Now** on any service card or detail page to launch the scheduling modal.
- **Date Picker**: Try selecting a past date; note that past dates are disabled, restricting bookings to the upcoming 14 days.
- **Time Slots**: Choose from slots (`09:00 AM`, `11:30 AM`, `02:00 PM`, `04:30 PM`, `06:30 PM`, `08:00 PM`).
- **Customer Form**: Customer name, 10-digit phone number, and service address are pre-filled from your profile and can be modified.
- **Payment Method**: Choose between *Pay After Service (Cash / UPI)* or *Online Demo Pay*.
- Click **Confirm Appointment**:
  - Generates a unique reference ID (e.g., `MCS-2026-8942`).
  - Displays a confirmation receipt modal with appointment details and total amount.
  - Saves the record into `localStorage`.

### 7. Shopping Cart & Promo Coupons
- Click the shopping cart icon (`#cart`) in the header.
- Add multiple services to your cart using the cart buttons on service cards.
- Test the quantity stepper (`+` / `-`) to increase or decrease quantities.
- Test applying coupon codes in the **Payment Summary** field:
  - `TRYNEW`: Flat ₹150 OFF on orders above ₹499.
  - `CITY10`: 10% instant discount up to ₹200.
  - `CLEAN50`: 50% discount on cleaning services.
  - `FESTIVE20`: 20% discount on beauty & salon services.
- Notice the automatic recalculation of Subtotal, Safety Fee (₹49), Discount, and Grand Total.
- Click **Proceed to Schedule Booking** to book all cart items together in a single appointment.

### 8. Bookings Page & Cancellations
- Navigate to `#bookings` via the navigation bar.
- Switch between **Upcoming**, **Completed**, and **Cancelled** tabs.
- Click **View Details** on any booking card to open a full receipt with assigned technician credentials (`Rakesh Kumar - 4.9 Rating`).
- Click **Cancel** on an upcoming booking: confirms via dialog, updates the status to `cancelled`, moves the card to the Cancelled tab, and updates the badge counters.

### 9. User Profile & Saved Addresses
- Navigate to `#profile`.
- Click **Edit Profile** to change your name, phone number, email, or avatar photo.
- Click **Saved Service Addresses** to view or add addresses (e.g. Home, Office) with custom pincodes.
- Click **Saved & Favorite Services** to open your wishlist modal.
- Click **Reset Demo Data** if you ever wish to restore the initial demo state.

### 10. Help & Customer Care
- Click the floating headset button in the lower-right corner.
- Call priority desk, start a simulated WhatsApp chat, or expand the **Frequently Asked Questions (FAQ)** accordion items.

---

## 🔒 Technical Standards & Compliance

- **Semantic HTML5 Elements**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>`-style overlays.
- **CSS Grid & Flexbox**: Clean responsive layout without framework bloat.
- **No Build Step Required**: Direct execution in any standard web browser.
- **Accessibility**: ARIA labels on icon buttons, keyboard `Escape` key closes modals, high-contrast readable typography.
