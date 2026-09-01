# Khushi Dave — Developer Portfolio

My personal portfolio website — built with React — showcasing my projects, technical skills, education, and resume as a Computer Science and Engineering student and aspiring Full Stack Developer.

## About

Hi, I'm **Khushi Dave**, a Computer Science and Engineering student at **LJ University** (currently in Semester 5, expected graduation in 2028). I'm looking for software / web development internship opportunities, and this site is where I showcase what I've built so far.

## Built With

- React.js
- React Router
- React-Bootstrap
- CSS3
- react-github-calendar (GitHub contributions widget)
- @react-pdf/renderer (in-browser resume viewer)

## Features

- **Home** — introduction, quick links to GitHub, LinkedIn, and email
- **About** — bio, tech stack, tools, and GitHub contribution activity
- **Projects** — a showcase of recent work, including:
  - **MedWay** — a web-based medicine platform for checking medicine availability/pricing and finding generic alternatives by matching active salt composition (Django, Django REST Framework, React, Python)
  - **QueueSense** — an AI-powered digital queue and appointment management system for use cases like hospitals, banks, and government offices (Python, Flask)
  - **FoodShare / QuickBite** — a food-related web application (Python, Django, ReactJS)
  - **Travel Planner System** — a console-based travel planning application with persistent trip storage (Java, JDBC, MySQL)
- **Resume** — viewable and downloadable directly from the site
- Fully responsive, single-page layout with smooth section navigation

## Getting Started

You'll need `Node.js` and `git` installed locally.

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000) in development mode and reloads automatically as you edit.

To create a production build:

```bash
npm run build
```

## Project Structure

All editable content lives under `src/components/`:

- `Home/` — hero section and intro
- `About/` — bio card, tech stack, tools, GitHub calendar
- `Projects/` — project cards and data
- `Resume/` — resume viewer
- `Footer.js`, `Navbar.js` — site-wide nav and footer

Styling is in `src/style.css` and `src/App.css`; global fonts and background are set in `src/index.css`.

## Deployment (Vercel)

This is a standard Create React App project, so it deploys to [Vercel](https://vercel.com) with no extra configuration:

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import the GitHub repo.
3. Framework preset: **Create React App** (auto-detected).
4. Build command: `npm run build` · Output directory: `build` (both auto-filled).
5. Click **Deploy**.

Every push to the main branch will trigger a new deployment automatically.

## Connect with Me

- GitHub: [DKCodeDev](https://github.com/DKCodeDev)
- LinkedIn: [dave-khushi](https://www.linkedin.com/in/dave-khushi-2a1a32358/)
- Email: [davekhushi77@gmail.com](mailto:davekhushi77@gmail.com)
