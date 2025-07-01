# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (starting from a conceptual 0.1.0).

## [Unreleased]

## [0.4.0] - YYYY-MM-DD (Conceptual - Responsive Navbar & UI Refinements)

### Added
- Dynamic/Responsive Navbar: Implemented a hamburger menu for mobile screens.
  - HTML structure for toggle button added to all pages.
  - CSS for hamburger icon, mobile menu panel, and responsive behavior.
  - JavaScript (`public/js/main.js`) for toggling mobile menu visibility and ARIA attributes.
  - Included `main.js` script in all HTML pages.
- `CHANGELOG.md` to track project changes (this file, with retrospective entries).

### Changed
- Reviewed and refined overall CSS for further minimalism and uniformity, ensuring consistent application of the established design language (pastel colors, spacing, typography).
- Minor structural HTML updates on all pages to support the responsive navbar.

## [0.3.0] - YYYY-MM-DD (Conceptual - UI/UX Enhancements)

### Added
- New calming color palette (pastel blues, peach, green) and modern sans-serif typography.
- Rounded UI elements and subtle shadows for depth.
- Overhauled Homepage: Updated hero, added introduction and card-based services overview.
- Enhanced Resources Page: Implemented card/grid layout for articles and placeholder for filters.
- Standardized Forms: Ensured consistent styling for all forms using a form-container and updated element designs.
- Improved Dashboard: Redesigned with a welcoming header, card-based layouts for sessions/resources, and new button styles.
- Updated Navigation: Added 'Feedback' link and styled 'Book a Session' as a prominent button.
- Standardized Footer: Included 'About Us', 'Contact', 'Feedback', and 'Privacy Policy' links.
- Created placeholder pages for 'Feedback' and 'Privacy Policy'.
- Ensured CTAs are prominent and visually distinct.
- Updated README.md with a summary of these UI/UX enhancements.

### Changed
- Major overhaul of CSS to implement the new design language.
- Updated HTML structure on most pages to align with new design and content requirements.

## [0.2.0] - YYYY-MM-DD (Conceptual - Phase 1: MVP Frontend)

### Added
- Core static HTML pages: Home, About, Resources, Contact.
- User interface HTML pages: Register, Login, Dashboard (mockup), Booking form.
- Client-side JavaScript validation for all forms (`public/js/forms.js`).
- Initial CSS for styling and basic responsiveness (`public/css/style.css`).
- ARIA labels and accessibility improvements to HTML elements.
- `README.md` updated to mark Phase 1 completion.

### Changed
- `README.md` updated with Phase 1 plan and details.

## [0.1.0] - YYYY-MM-DD (Conceptual - Phase 0: Foundation Setup)

### Added
- Initial Git repository.
- Basic project folder structure (`src/`, `public/`, `views/`, `routes/`, `models/`, `config/`).
- `README.md` with project description, setup instructions, and phased implementation plan.

[Unreleased]: https://github.com/your-repo-path/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/your-repo-path/releases/tag/v0.3.0
[0.2.0]: https://github.com/your-repo-path/releases/tag/v0.2.0
[0.1.0]: https://github.com/your-repo-path/releases/tag/v0.1.0
