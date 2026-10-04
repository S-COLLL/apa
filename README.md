# Shreya Konduskar · Portfolio (React.js SPA)

A single-page application (SPA) built with **React.js**, **React Router** and **Vite**.
The whole site loads once; React Router then swaps pages (Home, Projects, Experience,
Gallery, About, Contact) in the browser without reloading.

## Run it locally

```
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173/).

## Build for production

```
npm run build
```

The finished site is written to `dist/`.

## Project structure

```
index.html            Page shell that loads the React app
src/
  main.jsx            Starts React and the router (HashRouter)
  App.jsx             Layout and routes (one per page)
  data.js             All content: projects, experience, gallery, skills
  index.css           Styles, colours, dark mode
  components/         Reusable pieces (Header, ProjectCard, Lightbox, ...)
  pages/              One file per page (Home, Projects, About, ...)
  assets/images/      Photos and certificates
```

To change the site's text, edit `src/data.js`.

## How the SPA routing works

| URL           | Page component        |
|---------------|-----------------------|
| `#/`          | `pages/Home.jsx`      |
| `#/projects`  | `pages/Projects.jsx`  |
| `#/projects/:id` | `pages/ProjectDetail.jsx` |
| `#/experience`| `pages/Experience.jsx`|
| `#/gallery`   | `pages/Gallery.jsx`   |
| `#/about`     | `pages/About.jsx`     |
| `#/contact`   | `pages/Contact.jsx`   |
| anything else | `pages/NotFound.jsx`  |

## Deploy

If this folder is pushed to its own GitHub repository with Pages set to "GitHub Actions",
every push to `main` builds and publishes the site (see `.github/workflows/deploy.yml`).
