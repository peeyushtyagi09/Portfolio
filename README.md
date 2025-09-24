# Portfolio Frontend (React + Vite)

A single-page portfolio site built with React, Vite, Tailwind CSS, GSAP animations, and Three.js (via react-three-fiber). It features an animated home screen, an overlay navbar, a 3D showcase on the Projects page, and a chat-style Contact page.

Important: This repository is frontend-only. There is no authentication, email service, or OTP implementation present in this codebase. If you intended to have a two-factor (OTP) flow for Register/Login, that backend/API and the associated frontend integration are not implemented here.

## Features

- React 19 + Vite 7 for fast development and builds
- Tailwind CSS for styling
- GSAP animations and ScrollTrigger
- 3D components using Three.js via @react-three/fiber and @react-three/drei
- Post-processing effects with @react-three/postprocessing
- Client-side routing via react-router-dom
- Responsive layout considerations

## Project Structure

```
portfolio/
├─ frontend/
��  ├─ public/
│  │  ├─ image1.png
│  │  ├─ image2.png
│  │  ├─ main.gif
│  │  └─ video/
│  │     ├─ video1.mp4
│  │     └─ video2.mp4
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ Loader/
│  │  │  ├─ Navbar.jsx
│  │  │  └─ projects/
│  │  │     └─ Project.jsx
│  │  ├─ pages/
│  │  │  ├─ About.jsx
│  │  │  ├─ Contact.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ Projects.jsx
│  │  │  └─ ProjectsCards.jsx
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.js
│  └─ README.md (template from Vite)
└─ README.md (this file)
```

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- GSAP + @gsap/react + ScrollTrigger
- Three.js, @react-three/fiber, @react-three/drei
- @react-three/postprocessing
- react-router-dom 7

## Getting Started

- Requirements: Node.js 18+ recommended
- Install dependencies and run the dev server from the frontend directory:

```
cd frontend
npm install
npm run dev
```

- Build for production:

```
npm run build
```

- Preview a production build locally:

```
npm run preview
```

## Available Scripts (frontend/package.json)

- dev: Start the Vite dev server
- build: Build for production
- preview: Preview the production build
- lint: Run ESLint

## Routing

- /          Home (animated landing)
- /about     About page with GSAP path animation
- /projects  Projects with Three.js scene and marquee
- /contact   Chat-style interaction using GSAP transitions

## Assets

- Static assets live in frontend/public and are served at the site root (e.g., /image2.png, /video/video1.mp4).
- When referencing assets at runtime (e.g., in <img> or video tags or Three loaders), use absolute URLs like /video/video1.mp4 so they resolve correctly on all routes.

## Code Review Notes and Recommendations

The following items are observed in the current codebase and are recommended to fix for reliability and deployment:

1) No OTP/Email Auth Present
- There is no code for register/login, no email sending, and no OTP generation/verification in this repository. If you need 2FA (email OTP) flows:
  - Implement a backend (Node/Express, Nest, etc.) with endpoints:
    - POST /auth/register -> create user, send OTP to email
    - POST /auth/verify-register -> verify OTP, activate account
    - POST /auth/login -> validate creds/identifier, send OTP
    - POST /auth/verify-login -> verify OTP, issue session/JWT
  - Use a provider (e.g., Resend, SendGrid, Amazon SES) or SMTP to send emails.
  - Store OTP with TTL (Redis, DB with expiry) and rate-limit requests.
  - Expose a .env with secrets and provider keys; never commit secrets.
  - On the frontend, add forms and call these APIs, then navigate on success.

2) Case-Sensitive Import Paths
- App.jsx imports Home from './Pages/Home.jsx' but the folder is src/pages (lowercase). This can break on case-sensitive filesystems and CI builds. Update to './pages/Home.jsx'.
- Projects.jsx imports ProjectCard from './projectsCards' but the filename is ProjectsCards.jsx. Use the exact casing and the .jsx extension: './ProjectsCards.jsx'.

3) Asset Pathing on Routed Pages
- In Project.jsx: useTexture("./image2.png") will resolve relative to the current route (e.g., /projects/...), likely causing 404 in production. Prefer absolute path from public: useTexture("/image2.png").
- In ProjectsCards.jsx: video src values like "./video/video1.mp4" should be "/video/video1.mp4" for consistent loading on any route.

4) Navigation Paths
- Navbar navigate calls like navigate('./contact') are relative and may behave unexpectedly from nested routes. Prefer absolute: navigate('/contact'). Same for '/', '/about', '/projects'.

5) Typos in Text
- "Avilable" -> "Available"
- "gamil.com" -> "gmail.com"
- Consider proofreading visible copy across pages.

6) Unused Dependencies
- lightswind is in dependencies but not referenced. Remove if not used to reduce bundle size.

7) Performance Notes
- R3F postprocessing and heavy GSAP animations can be expensive on mobile/low-end devices. Consider:
  - Lower dpr for performance (already dpr={[1, 1.5]} is good)
  - Conditional effects on mobile
  - Lazy-loading heavy components

## How to Add Email + OTP (2FA) Properly

- Backend outline (Node/Express example):
  - POST /auth/register { email } -> generate OTP, store (hashed) with TTL, send email
  - POST /auth/verify-register { email, otp } -> verify OTP, create user
  - POST /auth/login { email } -> generate OTP, send email
  - POST /auth/verify-login { email, otp } -> verify and return session/JWT

- Security considerations:
  - Hash OTP (don’t store plaintext), short TTL (5–10 minutes)
  - Rate-limit OTP requests per IP/email
  - Lockout after repeated failures
  - Use provider webhooks to handle bounce/complaint if available

- Frontend integration:
  - Create pages/components for Register and Login with OTP steps
  - Use environment variable VITE_API_BASE_URL to call backend
  - Handle errors and edge cases (expired OTP, wrong code, rate limits)

## Deployment

- Static hosting of the built frontend (e.g., Netlify, Vercel, GitHub Pages):
  - Build with npm run build in the frontend directory.
  - Deploy the contents of frontend/dist.
- If you later add a backend, deploy it separately (e.g., Render, Railway, Fly.io, AWS) and configure the frontend to call its URL via VITE_API_BASE_URL.

## Environment Variables (suggested when adding APIs)

- Create a .env (not committed) for local development. For example:
  - VITE_API_BASE_URL=http://localhost:5000
  - EMAIL_PROVIDER_KEY=...
- In production, configure your platform’s environment variables (do not commit secrets).

## License

No explicit license set. Consider adding one (e.g., MIT) if you plan to open-source.

## Author

- Peeyush Tyagi
- Contact: update email typos to a correct address (e.g., peeyushtyagi82@gmail.com)
