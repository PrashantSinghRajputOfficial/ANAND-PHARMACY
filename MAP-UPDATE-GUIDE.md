# 🗺️ Google Maps Update Guide

## Current Setup (No API Key Required!)

Your website now uses **Google Maps Embed** which works without any API key. The map is fully functional with all features.

## ✅ What's Working Now:

1. **Interactive Map Display** - Shows your clinic location
2. **Get Directions Button** - Opens Google Maps with directions
3. **Open in Google Maps Button** - Opens full Google Maps
4. **No API Key Needed** - Works immediately without setup
5. **No Billing Required** - Completely free to use

## 📍 How to Update Your Location

### Step 1: Get Your Exact Coordinates

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your clinic: "Anand Pharmacy, Nandera, Bandikui"
3. Right-click on your exact location
4. Click on the coordinates (e.g., `27.0456, 76.2789`)
5. Coordinates will be copied to clipboard

### Step 2: Get Your Embed URL

1. On Google Maps, click the **Share** button
2. Click on **Embed a map** tab
3. Copy the entire `<iframe>` code
4. You'll see something like:
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123..." ...>
   ```

### Step 3: Update in Your Website

Open `index.html` and find the map section (around line 450):

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d76.2789!3d27.0456!..."
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

**Replace the `src` URL** with your copied embed URL.

### Step 4: Update Coordinates in JavaScript

Find this section in `index.html` (around line 600):

```javascript
const clinicLocation = {
    lat: 27.0456,  // ← Update this
    lng: 76.2789,  // ← Update this
    name: "Anand Pharmacy & Clinic",
    address: "Anand Bhavan, Badiyaal Road, Nandera Chauraha, Nandera (Bandikui)"
};
```

Update the `lat` and `lng` values with your actual coordinates.

## 🎯 Example with Real Location

If your coordinates are: `26.9876, 76.5432`

**In iframe:**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123!2d76.5432!3d26.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU5JzE1LjYiTiA3NsKwMzInMzUuNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

**In JavaScript:**
```javascript
const clinicLocation = {
    lat: 26.9876,
    lng: 76.5432,
    name: "Anand Pharmacy & Clinic",
    address: "Anand Bhavan, Badiyaal Road, Nandera Chauraha, Nandera (Bandikui)"
};
```

## 🔧 Testing Your Map

After updating:

1. **Refresh your website** (Ctrl + F5 or Cmd + Shift + R)
2. **Check if map shows** your correct location
3. **Click "Get Directions"** - Should open Google Maps with directions
4. **Click "Open in Google Maps"** - Should open your location in Google Maps

## 💡 Pro Tips

### Make Map More Accurate
- Use the exact coordinates from your Google Business Profile
- Zoom in as much as possible before getting coordinates
- Place the pin exactly on your building entrance

### Customize Map View
When getting embed code from Google Maps:
- You can adjust the zoom level before copying
- You can change map type (Satellite, Terrain)
- You can show/hide labels

### Mobile Testing
- Test on mobile devices
- "Get Directions" will open Google Maps app on mobile
- Map is fully responsive and touch-enabled

## ❌ Common Issues & Fixes

### Issue: Map shows wrong location
**Fix:** Update both iframe src AND JavaScript coordinates

### Issue: Buttons not working
**Fix:** Make sure JavaScript code is at the bottom of index.html

### Issue: Map not loading
**Fix:** Check internet connection, try different browser

### Issue: Map shows gray box
**Fix:** The embed URL might be incorrect, get a fresh one from Google Maps

## 🆘 Need Help?

If you're still having issues:
1. Check browser console (F12) for errors
2. Try opening the map URL directly in browser
3. Make sure you copied the complete iframe code
4. Contact: +91 9667811263

---

**No API Key, No Billing, No Hassle!** 🎉
