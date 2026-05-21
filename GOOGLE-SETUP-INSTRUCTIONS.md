# Google Maps & Reviews Setup Instructions

## 🗺️ Step 1: Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Maps JavaScript API**
4. Go to **Credentials** → Create **API Key**
5. Copy your API key
6. Open `index.html` and find this line at the bottom:
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
   ```
7. Replace `YOUR_API_KEY` with your actual API key

## 📍 Step 2: Update Your Location Coordinates

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your clinic: "Anand Pharmacy, Nandera, Bandikui"
3. Right-click on your location → Click on the coordinates (e.g., 27.0456, 76.2789)
4. Coordinates will be copied to clipboard
5. Open `index.html` and find the `clinicLocation` object:
   ```javascript
   const clinicLocation = {
       lat: 27.0456,  // Replace with your latitude
       lng: 76.2789,  // Replace with your longitude
       name: "Anand Pharmacy & Clinic",
       address: "Anand Bhavan, Badiyaal Road, Nandera Chauraha, Nandera (Bandikui)"
   };
   ```
6. Update `lat` and `lng` with your actual coordinates

## ⭐ Step 3: Get Google Place ID for Reviews

### Method 1: Using Place ID Finder (Easiest)
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for "Anand Pharmacy Nandera Bandikui"
3. Click on your business location
4. Copy the **Place ID** (starts with "ChIJ...")

### Method 2: Using Google Maps URL
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business
3. Click on your business listing
4. Look at the URL in browser address bar
5. Find the part that looks like: `!1s0x390d1234567890ab:0x1234567890abcdef`
6. The Place ID is after `!1s` (e.g., `ChIJabcd1234efgh`)

### Method 3: Create Google Business Profile First
If you don't have a Google Business Profile yet:
1. Go to [Google Business Profile](https://www.google.com/business/)
2. Click "Manage now"
3. Add your business details:
   - Business name: Anand Pharmacy & Clinic
   - Category: Pharmacy / Medical Clinic
   - Address: Anand Bhavan, Badiyaal Road, Nandera Chauraha, Nandera (Bandikui)
   - Phone: +91 9667811263
4. Verify your business (via postcard, phone, or email)
5. Once verified, you'll get your Place ID

## 🔧 Step 4: Update Review Button Link

1. Open `index.html`
2. Find this line in the Reviews section:
   ```html
   <a href="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID" target="_blank" class="review-btn">
   ```
3. Replace `YOUR_GOOGLE_PLACE_ID` with your actual Place ID
4. Example:
   ```html
   <a href="https://search.google.com/local/writereview?placeid=ChIJabcd1234efgh" target="_blank" class="review-btn">
   ```

## ✅ Testing

After setup, test these features:

1. **Map Display**: Should show your clinic location with marker
2. **Get Directions Button**: Should open Google Maps with directions
3. **Review Button**: Should open Google review page for your business

## 📝 Important Notes

- Google Maps API has free tier: 28,000 map loads per month
- Place ID never changes once assigned
- Reviews will appear on your Google Business Profile
- Make sure to verify your business on Google to receive reviews

## 🆘 Troubleshooting

**Map not showing?**
- Check if API key is correct
- Make sure Maps JavaScript API is enabled in Google Cloud Console
- Check browser console for errors (F12)

**Review button not working?**
- Verify Place ID is correct
- Make sure your business is verified on Google
- Try the link in incognito mode

**Wrong location showing?**
- Double-check latitude and longitude values
- Make sure coordinates are in decimal format (not degrees/minutes/seconds)

---

Need help? Contact: +91 9667811263
