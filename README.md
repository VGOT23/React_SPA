```md
# Simple SPA (React) — Home | Profile | About (No React Router)

A minimal and clean **Single Page Application (SPA)** built using **React + Vite** with **3 pages (Home, Profile, About)** using **state-based navigation** instead of React Router.

This project is fully responsive and uses only **React components + CSS** (no UI libraries).

---

## 🚀 Features

- ✅ Single Page App (SPA) without React Router  
- ✅ Pages:
  - Home (dashboard style content)
  - Profile (user details + tasks + activity)
  - About (project info + stack + next upgrades)
- ✅ Clean and minimal UI
- ✅ Fully responsive (mobile + desktop)
- ✅ Component-based folder structure

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **CSS (Responsive Grid + Flexbox)**

---

## 📁 Folder Structure

```

src/
components/
Navbar.jsx
NavButton.jsx
Layout.jsx
pages/
Home.jsx
Profile.jsx
About.jsx
App.jsx
main.jsx
index.css

````

---

## ✅ How Navigation Works (No Router)

Instead of using React Router, this app switches between pages using **React state**:

- `page = "home"`
- `page = "profile"`
- `page = "about"`

Navbar updates the `page` state and the correct component renders inside `<Layout />`.

---

## ⚙️ Setup & Run Locally

### 1) Clone the project
```bash
git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
cd <YOUR_REPO>
````

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

To preview production build:

```bash
npm run preview
```

---

## ✅ Pages Overview

### 🏠 Home

* Stats summary
* Quick actions cards
* Recent updates list

### 👤 Profile

* User info section
* Tags
* Today's plan checklist
* Weekly activity cards

### ℹ️ About

* Why this project
* Tech stack
* Features list
* Next upgrades
* Quote section

---

## 🔥 Future Improvements (Optional)

* Save selected page using `localStorage`
* Sync URL using `history.pushState()` (still without React Router)
* Add dark mode toggle
* Add animations for page transitions

---

## 👨‍💻 Author

Made by **OG**

```
```
