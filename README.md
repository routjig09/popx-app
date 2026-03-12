# PopX — React.js App

Pixel-perfect implementation of the PopX 4-screen mobile app design.

## 📱 Screens
1. **Welcome** → `/welcome`
2. **Sign Up** → `/signup`
3. **Sign In** → `/signin`
4. **Profile** → `/profile`

---

## 🛠 Step-by-Step Setup Guide

### Prerequisites
Make sure you have installed:
- **Node.js** (v16 or above) — download from https://nodejs.org
- **npm** (comes with Node.js)
- **Git** — download from https://git-scm.com

Verify by running in terminal:
```bash
node -v
npm -v
git --version
```

---

### Step 1 — Download & Extract
Extract the zip file you downloaded. You'll get a folder called `popx-app`.

### Step 2 — Open Terminal in the Project Folder
```bash
cd popx-app
```

### Step 3 — Install Dependencies
```bash
npm install
```
This installs React, React Router, and all dependencies. Takes ~1–2 minutes.

### Step 4 — Run Locally
```bash
npm start
```
Opens http://localhost:3000 in your browser automatically.

---

## 🚀 Deploy to Vercel (Free Hosting)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done! You'll get a live URL.

### Option B — Vercel Dashboard
1. Push code to GitHub (see below)
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Click Deploy → Done!

---

## 📁 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: PopX app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/popx-app.git
git push -u origin main
```

---

## 📁 Project Structure
```
popx-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MobileShell.js    # Centered white card wrapper
│   │   └── MobileShell.css
│   ├── pages/
│   │   ├── Welcome.js        # Screen 1: Welcome
│   │   ├── Welcome.css
│   │   ├── SignUp.js         # Screen 2: Create Account
│   │   ├── SignUp.css
│   │   ├── SignIn.js         # Screen 3: Login
│   │   ├── SignIn.css
│   │   ├── Profile.js        # Screen 4: Profile
│   │   └── Profile.css
│   ├── App.js                # Routes
│   ├── index.js
│   └── index.css
├── package.json
├── vercel.json               # SPA routing fix for Vercel
└── netlify.toml              # SPA routing fix for Netlify
```

## 🎨 Design Tokens
| Token | Value |
|-------|-------|
| Brand Purple | `#6C25FF` |
| Light Purple | `#EDE9FF` |
| Text Dark | `#1D1D1D` |
| Text Gray | `#6E6E6E` |
| Border | `#CFCFCF` |
| Font | Rubik (Google Fonts) |
