# CarDrive - Vehicle Renting Application 🚗

A modern, user-centric mobile application designed to streamline vehicle rentals by connecting tourists seeking temporary transportation with vehicle owners offering their vehicles. Built as a comprehensive UX project using React Native and Expo.

## 🎯 Project Overview

**CarDrive** is a unified platform that enables:
- **Tourists/Renters** - Browse, filter, and rent vehicles from local owners
- **Vehicle Owners** - List their vehicles and manage rental inquiries

This project demonstrates modern UX/UI principles, intuitive navigation patterns, and accessibility best practices in a real-world application scenario.

## ✨ Key Features

### For Renters
- 🔍 **Browse Vehicles** - View available vehicles with high-quality images
- 🎛️ **Advanced Filtering** - Filter by vehicle type, price range, location, dates, and driver availability
- 📋 **Detailed Information** - Access comprehensive vehicle specs, availability calendar, and owner details
- 💬 **Direct Communication** - Call or WhatsApp vehicle owners directly
- ❤️ **Favorites System** - Save favorite vehicles for later

### For Vehicle Owners
- 📱 **Easy Listing** - Quick 5-step process to post a vehicle
- 📸 **Rich Media** - Add multiple photos and detailed descriptions
- ⚙️ **Listing Management** - View, edit, or delete listed vehicles
- 📊 **Status Tracking** - Monitor active listings
- 👥 **Contact Management** - Respond to inquiries through integrated channels

### Shared Features
- 🔐 **Authentication** - Login with email or social accounts (Google, Facebook)
- 👤 **User Profile** - Manage account information and preferences
- 🎨 **Modern UI** - Clean, intuitive interface with consistent design language
- ♿ **Accessible Design** - WCAG AA compliant with safe area handling

## 🏗️ Navigation Structure

```
Splash Screen (2.5s)
    ↓
Login Screen
    ↓
Bottom Tab Navigation
├── Home Tab (Browse Vehicles)
├── My List Tab (Manage Listings)
└── Profile Tab (Account Management)

Modal Screens
├── Filter Page
├── Vehicle Details
├── Contact Details
└── Post Vehicle Form
```

## 🎨 Design System

### Color Palette
- **Primary Teal** (#17A697) - Active states, buttons, highlights
- **Light Teal** (#E8F5F3) - Background containers
- **Accent Red** (#E74C3C) - Logout, favorites
- **Gradient** (Cyan → Green → Yellow) - Splash screen

### Typography & Spacing
- Clean, readable typography hierarchy
- Consistent spacing and padding
- Material Design Icons throughout

## 🛠️ Technology Stack

- **Framework:** [Expo Router](https://expo.dev/router) v6.0.15
- **UI Framework:** [React Native](https://reactnative.dev/) 0.81.5
- **Navigation:** [React Navigation](https://reactnavigation.org/) (Bottom Tabs + Stack)
- **Icons:** [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (Material Icons, FontAwesome)
- **State Management:** React Hooks (useState, useRouter, useLocalSearchParams)
- **Additional Libraries:**
  - `expo-linear-gradient` - Gradient backgrounds
  - `@react-native-community/slider` - Price range filtering
  - `react-native-safe-area-context` - Safe area handling
  - `react-native-screens` - Screen optimization

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Android/iOS emulator or physical device

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/BimsaraWickramanayaka/CarDrive_Creavint_app.git
   cd CarDrive_Creavint_app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open the app
   - **Android Emulator:** Press `a`
   - **iOS Simulator:** Press `i`
   - **Expo Go App:** Scan QR code with your device

### Available Scripts

```bash
# Start development server
npm start

# Start on Android emulator
npm run android

# Start on iOS simulator
npm run ios

# Start on web browser
npm run web

# Run ESLint
npm run lint
```

## 📦 APK Download & Installation

### Quick Start - Download APK

**Direct Download:** [CarDrive-v1.0.0.apk](https://github.com/BimsaraWickramanayaka/CarDrive_Creavint_app/raw/main/releases/CarDrive-v1.0.0.apk)

<!-- **Alternative:** Download from [Releases](https://github.com/BimsaraWickramanayaka/CarDrive_Creavint_app/releases) -->

### How to Install APK on Android

#### **Option 1: Direct Installation (Recommended)**

1. **Download APK**
   - Click the download link above or go to Releases
   - Save the `CarDrive-v1.0.0.apk` file to your device

2. **Enable Installation from Unknown Sources**
   - Go to Settings → Security
   - Enable "Unknown Sources" or "Install unknown apps"
   - (This varies by Android version)

3. **Install the APK**
   - Open your file manager
   - Navigate to Downloads folder
   - Tap on `CarDrive-v1.0.0.apk`
   - Tap "Install"
   - Wait for installation to complete

4. **Launch the App**
   - Open your Apps drawer
   - Find and tap "CarDrive"
   - Enjoy! 🎉

#### **Option 2: Using ADB (Advanced Users)**

If you have Android SDK installed:

```bash
# Connect your Android device via USB
# Enable USB Debugging in Settings → Developer Options

adb install CarDrive-v1.0.0.apk
```

### System Requirements

- **Android Version:** 5.0 or higher (API level 21+)
- **RAM:** 2GB minimum (4GB recommended)
- **Storage:** ~150MB free space
- **Permissions Required:**
  - Camera (for photo upload)
  - Phone (for calling)
  - Storage (for file access)

### First Time Setup

1. **Splash Screen** - You'll see the CarDrive logo (2.5 seconds)
2. **Login Screen** - Create account or login with:
   - Email and password
   - Google account
   - Facebook account
3. **Home Screen** - Start browsing vehicles immediately

### Demo Credentials (If Needed)

- **Email:** demo@cardrive.com
- **Password:** demo123

**Note:** This is a demo app. All data is locally stored and resets when you reinstall.

## 📁 Project Structure

```
CarDrive_Creavint_app/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Bottom tab navigator
│   │   ├── index.tsx            # Home screen
│   │   ├── mylist.tsx           # Vehicle listings management
│   │   └── profile.tsx          # User profile
│   ├── _layout.tsx              # Root navigation
│   ├── index.tsx                # Entry point
│   ├── splash.tsx               # Splash screen
│   ├── login.tsx                # Login screen
│   ├── filter.tsx               # Filter modal
│   ├── postvehicle.tsx          # Post vehicle form
│   ├── vehicledetails.tsx       # Vehicle details view
│   └── contactdetails.tsx       # Owner contact details
├── assets/
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── vehicles/
│   │   ├── Logo.png
│   │   ├── profilepic.jpg
│   │   └── location.jpeg
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js             # ESLint configuration
├── UX_SUMMARY.md                # Comprehensive UX documentation
└── README.md                     # This file
```

## 📱 Screens Breakdown

### 1. **Splash Screen**
- Duration: 2.5 seconds
- Displays: CarDrive logo with tagline "Your Adventure Starts Here"
- Gradient background (Cyan → Green → Yellow)

### 2. **Login Screen**
- Email/Phone input
- Password input with visibility toggle
- Social login (Google, Facebook)
- Forgot password link

### 3. **Home Screen**
- Welcome header with profile picture
- Search bar with filter button
- Category tabs (Car, Van, Tuk-tuk, Bike)
- Vehicle cards with images, prices, locations, ratings

### 4. **Filter Page**
- Vehicle type selector
- Driver options
- Location search
- Date range picker
- Price range slider

### 5. **Vehicle Details**
- Vehicle image and specifications
- Availability calendar
- Owner information
- Pickup location
- View Details button

### 6. **Contact Details**
- Owner contact card
- Phone call button
- WhatsApp chat option
- Vehicle information
- Pickup location
- Important instructions

### 7. **My List (For Owners)**
- List of posted vehicles
- Edit, View, Delete options
- Floating action button to post new vehicle

### 8. **Post Vehicle**
- Vehicle type selector
- Photo gallery
- Description
- Rental details
- Contact information

### 9. **Profile**
- User information
- Menu items (Edit Profile, Settings, Help)
- Logout button

## 🎓 UX/UI Highlights

### Information Architecture
- **Single Unified App** - Reduces fragmentation for both user types
- **Clear Navigation Patterns** - Predictable user flows
- **Progressive Disclosure** - Complex features revealed gradually
- **Visual Consistency** - Uniform color palette and typography

### Accessibility Features
- ✅ Safe area handling for notch/status bar
- ✅ Touch-friendly button sizes (44x44px minimum)
- ✅ Icon + text labels for clarity
- ✅ WCAG AA color contrast compliance
- ✅ Keyboard navigation support

### User Experience Principles
- Minimal cognitive load through simple navigation
- Consistent button placement and interactions
- Fast workflows for key actions
- Clear visual hierarchy

<!-- ## 📖 Additional Documentation

For comprehensive UX/UI documentation, design decisions, and navigation flows, see **[UX_SUMMARY.md](./UX_SUMMARY.md)** -->

## 🌐 Deployment

### Building APK for Android

```bash
# Using EAS Build (recommended)
npx eas build --platform android

# Or build locally
npx expo prebuild --clean
npm run android
```

The APK file will be generated in the build output directory and ready for distribution.

## 🤝 Contributing

This is a UX project created for educational and portfolio purposes. Contributions and feedback are welcome!

## 📝 License

This project is open source and available for educational and commercial use.

## 👨‍💻 Developer

Created as a comprehensive UX/UI design project by **Bimsara Wickramanayaka**

## 📞 Support & Feedback

For issues, suggestions, or feedback, please open an issue on the GitHub repository.

## 🎉 Acknowledgments

- Built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev/)
- Icons from [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- Navigation powered by [React Navigation](https://reactnavigation.org/)

---

**Project Type:** UX/UI Design & Development  
**Created:** November 2025  
**Status:** ✅ Complete  
**Version:** 1.0.0

