# Balance

**Balance** is a personal finance app that helps you **track your income and expenses**, visualize your money, and improve your savings in a **simple, visual, and modern** way. Perfect for monthly tracking and practicing advanced frontend skills with Vue 3 and Tailwind CSS.

---

## 💻 Technologies

- [Vue 3](https://vuejs.org/) – Modern frontend framework
- [Tailwind CSS](https://tailwindcss.com/) – Rapid and responsive styling
- [Vue Router](https://router.vuejs.org/) – Screen navigation
- [Pinia](https://pinia.vuejs.org/) – Global state management
- [Firebase (coming soon)](https://firebase.google.com/) – Authentication and database
- Mock login implemented for local development

---

## 📂 Initial project structure
```bash
balance/
├─ public/
├─ src/
│ ├─ assets/
│ ├─ components/ # Reusable components
│ ├─ views/ # Main screens
│ │ ├─ Login.vue
│ │ └─ Dashboard.vue
│ ├─ router/
│ │ └─ index.js
│ ├─ store/
│ │ └─ user.js
│ ├─ App.vue
│ └─ main.js
├─ package.json
└─ tailwind.config.js
```

---

## 🚀 Initial features

- Mock login with basic validation
- Main dashboard with accordion-style sidebar
- Initial menu and navigation view
- Ready to integrate Firebase Auth and Firestore

---

## 🛠️ Installation and usage

1. Clone the repository:
```bash
git clone https://github.com/your-username/balance.git
cd balance
```

2. Install dependencies:
```bash
   npm install
```
3. Run the app in development mode:
```bash
   npm run dev
```
4. Open http://localhost:5173 in your browser:

---

## 📈 Development roadmap
- Integrate Firebase Auth for real login
- CRUD for expenses and income
- Monthly tracking charts
- Accordion-style sidebar with submenus
- Visual dashboard for savings and balances
- Responsive design and smooth animations
- Optional export of data to CSV/PDF

---

## ✨ License

MIT License – free for personal and educational use.
