# 🚀 React + Vite Company Profile

This is a **React + TypeScript + Vite** project styled with **Tailwind
CSS v4**, built as part of my bootcamp assignment.\
It supports **dark mode** (via `class` strategy) and is structured for
scalability with reusable components.

------------------------------------------------------------------------

## 📂 Project Structure

``` plaintext
root/
├── public/
├── src/
│   ├── components/
│   │   ├── container/        # Main sections (Hero, About, Contact)
│   │   ├── IndustrySection/  # Industry-specific section
│   │   ├── layout/           # Header, Footer
│   │   ├── ProjectsSection/  # Projects showcase
│   │   ├── ServiceSection/   # Services list & cards
│   │   └── ui/               # Reusable UI components (Button, Input, etc.)
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   └── index.css             # Tailwind + custom theme
├── .env.production           # Public EmailJS keys (safe to commit)
├── index.html
├── package.json
└── vite.config.ts
```

------------------------------------------------------------------------

## 🌙 Dark Mode Support

Dark mode uses Tailwind's **class strategy**:

``` tsx
<div className="bg-white text-gray-900 dark:bg-black dark:text-white">
  {/* Content adapts based on .dark class */}
</div>
```

When `html` element has `class="dark"`, the UI switches to dark mode.\
In `Hero.tsx`, we also use a **MutationObserver** to dynamically swap
hero images:

``` tsx
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const html = document.documentElement;
  setIsDark(html.classList.contains("dark"));

  const observer = new MutationObserver(() => {
    setIsDark(html.classList.contains("dark"));
  });

  observer.observe(html, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}, []);
```

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **React 18 + TypeScript**
-   **Vite** as the build tool
-   **Tailwind CSS v4** (no custom config file, using
    `@import 'tailwindcss';`)
-   **EmailJS** for contact form integration
-   **clsx** for conditional class handling

------------------------------------------------------------------------

## 📦 Installation

``` bash
# 1. Clone this repository
git clone https://github.com/yourusername/challenge-7-ezarelz.git

# 2. Navigate into the project
cd challenge-7-ezarelz

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev
```

------------------------------------------------------------------------

## 🌐 Environment Variables

Create a `.env` or `.env.production` file:

``` bash
VITE_EMAILJS_PUBLIC_KEY=your-public-key
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
```

These are **safe to commit** since they are public keys for client-side
usage.

------------------------------------------------------------------------

## 📸 Features

-   Responsive & Mobile-first layout
-   Dark mode support with smooth transitions
-   Modular component architecture
-   Contact form powered by EmailJS with success/error modal

------------------------------------------------------------------------

## 📜 License

This project is part of my **personal bootcamp portfolio**.\
You are free to fork and learn from it. Attribution is appreciated!
