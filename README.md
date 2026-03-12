# React Project — Setup, GitHub & Vercel Deployment Guide

---

## ⚛️ 1. Create a React Project

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or above) — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)

Verify by running:
```bash
node -v
npm -v
```

### Create the App
```bash
npx create-react-app my-app
```
Replace `my-app` with your project name.

### Navigate into the Project
```bash
cd my-app
```

### Start the Development Server
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) in your browser automatically.

---

## 🐙 2. Push Code to GitHub

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in.
2. Click **"New"** → Enter a repository name → Click **"Create repository"**.

### Step 2 — Initialize Git in Your Project
Open your terminal inside the project folder and run:
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 3 — Connect to GitHub & Push
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
> Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repo name.

---

## 🚀 3. Deploy to Vercel (Free Hosting)

### Option A — Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"New Project"**.
3. Import your GitHub repository.
4. Click **"Deploy"** — Vercel auto-detects React and builds it for you.
5. ✅ Done! You'll get a live URL like `https://your-app.vercel.app`.

### Option B — Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts in your terminal and your app will be live instantly.

---

> 💡 **Tip:** Every time you push new changes to GitHub, Vercel automatically redeploys your app.
