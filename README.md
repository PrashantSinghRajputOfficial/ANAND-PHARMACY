# Anand Pharmacy & Clinic Website

Your trusted family clinic and pharmacy in Nandera, Bandikui. 24/7 emergency medical services with experienced doctors and quality medicines.

## 🎯 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **24/7 Emergency Services** - Always available for your healthcare needs
- **Online Appointment Booking** - Book via form or WhatsApp
- **Free Medicine Home Delivery** - Send prescription via WhatsApp
- **Interactive Chatbot** - Get instant answers to common questions
- **Google Maps Integration** - Find us easily with interactive map
- **Patient Reviews** - Real Google reviews from satisfied patients
- **Feedback Form** - Share your experience with star ratings
- **Service Information** - Blood tests, BP check, diabetes care, and more

## 🚀 Recent Updates

### ✅ Feedback Form Added
- Interactive star rating system (1-5 stars)
- Submit feedback via WhatsApp
- User-friendly form with validation

### ✅ Google Reviews Section
- 3 authentic patient reviews displayed
- Google branding and star ratings
- Direct link to write reviews on Google

### ✅ Google Maps - Modular & Fixed
- **Professional Layout** - Left side contact info, right side interactive map
- **Sticky Contact Box** - Contact details stay visible while scrolling
- **Interactive Google Maps** with custom marker and info window
- **Get Directions Button** - Opens Google Maps with directions
- **Map Overlay Controls** - Quick access buttons on map
- **Fully Responsive** - Works perfectly on all devices
- **Modern Design** - Clean, professional look matching reference image

### ✅ Cleaned Up Project
- Removed all unnecessary instruction files
- Deleted unwanted HTML pages
- Clean and organized file structure

## 📁 Project Structure

```
├── index.html          # Main website file
├── styles.css          # All styling
├── chatbot.js          # Chatbot functionality
├── README.md           # Project documentation
├── FEATURES.md         # Feature list
└── images/             # All images
    ├── bhanwar-singh.jpg
    ├── building.jpg
    ├── pharmacy.jpg
    ├── ward.jpg
    └── ...
```

## 🔧 Setup Instructions

### Quick Setup (No API Key Required!)

The website uses Google Maps Embed which works immediately without any API key or billing setup.

**To update your location:**

1. **Get Your Embed Code**
   - Go to [Google Maps](https://www.google.com/maps)
   - Search for your clinic
   - Click "Share" → "Embed a map"
   - Copy the iframe code
   - Replace the iframe in `index.html` (Contact section)

2. **Update Coordinates**
   - Right-click on your location in Google Maps
   - Copy coordinates (e.g., 27.0456, 76.2789)
   - Update `clinicLocation` object in `index.html`:
   ```javascript
   const clinicLocation = {
       lat: 27.0456,  // Your latitude
       lng: 76.2789,  // Your longitude
       name: "Anand Pharmacy & Clinic",
       address: "Your actual address"
   };
   ```

3. **Update Google Place ID for Reviews (Optional)**
   - Currently opens Google search (works fine)
   - For direct review page, get Place ID from Google Business Profile
   - See `HOW-TO-GET-GOOGLE-PLACE-ID.md` for detailed instructions
   - Replace the review button URL once you have Place ID

**Detailed guides available:**
- `MAP-UPDATE-GUIDE.md` - Complete map setup instructions
- `GOOGLE-SETUP-INSTRUCTIONS.md` - Google Place ID and reviews setup

## 📱 Contact Information

- **Phone:** +91 9667811263
- **Address:** Anand Bhavan, Badiyaal Road, Nandera Chauraha, Nandera (Bandikui)
- **WhatsApp:** Available for appointments and medicine orders
- **Hours:** 24/7 Emergency Services

## 🌟 Key Sections

1. **Hero Section** - Welcome message with emergency contact
2. **Services** - Medical services offered
3. **About** - Information about Pro. Bhanwar Singh
4. **Doctors** - Medical team details
5. **Appointment** - Online booking form
6. **Reviews** - Google patient reviews (NEW)
7. **Feedback** - Submit your feedback (NEW)
8. **Health Tips** - Simple health advice
9. **Gallery** - Clinic facilities
10. **Contact** - Location and map (UPDATED)

## 💻 Technologies Used

- HTML5
- CSS3 (with CSS Grid & Flexbox)
- Vanilla JavaScript
- Google Maps JavaScript API
- WhatsApp Business API integration

## 📝 Notes

- All forms submit via WhatsApp for easy communication
- Chatbot provides instant responses in Hindi
- Fully responsive design for all devices
- SEO optimized with meta tags
- Fast loading with optimized images

---

© 2026 Anand Pharmacy & Clinic. All Rights Reserved.
