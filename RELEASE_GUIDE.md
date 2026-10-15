# 🚀 Torres Capitol College SIS - Mobile App Release Guide

This guide provides step-by-step instructions to build, release, and distribute your Android APK (`Torres-Capitol-College-SIS.apk`) via GitHub Releases so users and students can download and install it on their phones.

---

## Method 1: Automatic Release via GitHub Actions (Recommended)

Whenever you tag a release or push changes, GitHub will automatically build your Android APK and publish it to your GitHub Releases page.

### Step 1: Push Your Code to GitHub
Open your project terminal in your local project folder and run:

```cmd
git init
git remote add origin https://github.com/George04-Yuz/studentinfotest.git
git add .
git commit -m "Ready for Android APK Release"
git branch -M main
git push -u origin main --force
```

### Step 2: Trigger a Release Tag
To generate a release build and download link automatically:

```cmd
git tag -a v1.0.0 -m "Torres Capitol College SIS v1.0.0"
git push origin v1.0.0
```

### Step 3: Download Your APK
1. Go to your GitHub repository in your browser:  
   **`https://github.com/George04-Yuz/studentinfotest/releases`**
2. Download **`Torres-Capitol-College-SIS.apk`** from the latest release.
3. Share the link or QR code with your students and staff!

---

## Method 2: Local APK Build (Using Android Studio / Gradle)

If you prefer building the APK directly on your Windows PC:

1. Ensure you have **Node.js** and **Android Studio** installed.
2. Open your terminal in the project folder and run:
   ```cmd
   npm run build
   npx cap sync android
   cd android
   gradlew assembleRelease
   ```
3. Your signed release APK will be generated at:  
   `android/app/build/outputs/apk/release/app-release.apk`

---

## 📱 How to Install the APK on Android Phones
1. Download `Torres-Capitol-College-SIS.apk` onto your Android phone.
2. Tap the downloaded file. If prompted by Android (*"For your security, your phone is not allowed to install unknown apps from this source"*), tap **Settings** and enable **Allow from this source**.
3. Tap **Install**.
4. Open **Torres Capitol College SIS** and log in!
