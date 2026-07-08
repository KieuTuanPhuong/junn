# Landing Page Development Estimation

**Tech Stack**: Next.js & Tailwind CSS
**Total Estimated Time**: ~62 - 85 hours (approx. 2 weeks for one developer)

This estimation breaks down the development time required to build the provided landing page design. The estimates now include dedicated time for responsive design (mobile/tablet/desktop), advanced animations, a contact-storing database, a simple admin dashboard with authentication, and a 20% buffer for contingency.

## Breakdown by Section

| Section                           | Description                                                                        | Est. Time (Hours) | Notes                                                                              |
| :-------------------------------- | :--------------------------------------------------------------------------------- | :---------------- | :--------------------------------------------------------------------------------- |
| **1. Setup & Architecture**       | Project init, Tailwind config, fonts, global styles, layout shell.                 | 2 - 3             | Setting up custom colors, fonts, and base Next.js structure.                       |
| **2. Hero Section**               | Floating menu, logo, main title, large background, side social icons.              | 2 - 3             | Precise positioning for floating elements and background handling.                 |
| **3. Vision & Intro**             | 3 text columns with custom drop-caps, 3 primary CTA buttons.                       | 1.5 - 2           | Styling the custom large first letters and button variants.                        |
| **4. Statistics**                 | Building image + 3 large stat numbers (120, 10, 50+).                              | 1 - 1.5           | Straightforward flex/grid layout.                                                  |
| **5. Core Values**                | 3 columns on white background (Sống, Đầu tư, Tài chính).                           | 1                 | Simple grid layout.                                                                |
| **6. Gallery / Highlight**        | Full-width park image with text overlay and carousel controls.                     | 2 - 3             | Implementing a functional image carousel/slider if required.                       |
| **7. Countdown & Stats**          | 65 Days, 48 Apartments, 72% circular progress.                                     | 1.5 - 2           | SVG or CSS for the circular progress bar.                                          |
| **8. Agent Leaderboard**          | Podium layout with agent logos, followed by 3 detailed profile cards.              | 3 - 4             | Complex overlapping layouts, badges, and detailed card styling.                    |
| **9. Academy Timeline**           | 8-week snake-like roadmap with different node states.                              | 4 - 6             | The most complex UI piece. Requires custom SVG paths or tricky CSS positioning.    |
| **10. Registration & Resources**  | Form (left) + Downloadable resources list (right).                                 | 2 - 2.5           | Form UI setup and custom styled list items.                                        |
| **11. News Section**              | Featured video/article (left) + list of 3 smaller articles (right).                | 2 - 3             | Grid layout, image aspect ratios, and typography hierarchy.                        |
| **12. Downloads / Tabs**          | Image, Video, Docs tabs with grid of download links.                               | 2 - 2.5           | Implementing tab switching logic and styling the grid.                             |
| **13. Bottom Form**               | Glassmorphism registration form over building background.                          | 1.5 - 2           | Backdrop-blur effects and form styling.                                            |
| **14. Footer**                    | Logo, contact info, social links.                                                  | 1                 | Standard footer layout.                                                            |
| **15. Responsive Implementation** | Dedicated time for ensuring pixel-perfect tablet and mobile layouts.               | 6 - 8             | Adapting complex components (Timeline, Agent Leaderboard) for small screens.       |
| **16. Animations & Interactions** | Micro-interactions, hover states, scroll-reveal animations.                        | 4 - 6             | Adding Framer Motion or Tailwind animations for a premium feel.                    |
| **17. Polish, QA & Bug Fixes**    | Cross-browser testing, performance checks, and final tweaks.                       | 4 - 6             | Ensuring stability and smooth user experience.                                     |
| **18. Form Validation & API**     | Zod/React Hook Form validation and setting up the API submission route.            | 2 - 3             | Setting up the backend route and frontend error handling.                          |
| **19. Image/Video Content logic** | Implementation of image/video components missing from current design.              | 4 - 4             | Extra time added since this part has no design yet and needs structural decisions. |
| **20. Admin Dashboard UI**        | Simple protected page with a data table to view submitted contacts.                | 2 - 3             | Minimalist layout focused entirely on displaying form data.                        |
| **21. Simple Auth & Database**    | NextAuth/Middleware + setting up a lightweight DB (e.g. Prisma) to store contacts. | 3 - 4             | Replacing email-only sending with persistent storage and admin protection.         |

## Subtotal & Buffer

- **Subtotal Base Estimation**: 51.5 - 70.5 hours
- **20% Buffer Time**: 10 - 14 hours (Contingency for unforeseen issues, revisions, or feedback)
- **Total Estimated Time**: **61.5 - 84.5 hours**

## Key Technical Challenges

- **Academy Timeline (Section 9)**: Creating a responsive, curving timeline is often tricky. It will likely require an SVG overlay or absolute positioning that adapts well to mobile screens where the layout will need to become vertical.
- **Responsive Backgrounds**: Several sections have complex background images (e.g., the bottom form). Ensuring these crop and scale correctly across all device sizes will take careful CSS work.
- **Circular Progress Bar**: The 72% indicator will need a custom SVG implementation to match the design perfectly.

_Note: This estimation assumes all assets (images, icons, specific fonts) are exported and readily available, and does not include full CMS setup beyond the simple contacts database._
