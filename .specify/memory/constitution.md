<!--
Sync Impact Report:
- Version change: N/A → 0.1.0
- List of modified principles:
  - PRINCIPLE_1: Offline-First Excellence
  - PRINCIPLE_2: Atomic Design & Modularity
  - PRINCIPLE_3: Accessibility & Inclusion
  - PRINCIPLE_4: Synchronized Progress
  - PRINCIPLE_5: Type-Safe & Scalable
- Added sections: Technology Stack, Development Workflow
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->

# Gyan Setu Constitution

## Core Principles

### I. Offline-First Excellence
Every core feature must be functional without an active internet connection. Data must be persisted locally using IndexedDB or LocalStorage. The application must prioritize local availability and performance over server round-trips.

### II. Atomic Design & Modularity
UI must strictly follow the Atomic Design methodology (Atoms -> Molecules -> Organisms -> Pages). Components must be modular, reusable, and independently testable. Avoid monolithic components that combine data fetching and presentation.

### III. Accessibility & Inclusion
The platform must be designed for users with varying digital literacy. Support for local languages is mandatory. Follow Material Design principles to ensure an intuitive and accessible user experience across different devices.

### IV. Synchronized Progress
Local data must be synchronized with the server whenever a connection is detected. Sync conflicts must be handled gracefully, prioritizing the preservation of user-generated content and learning progress.

### V. Type-Safe & Scalable
Use TypeScript for all components and business logic. Strict typing is required to prevent runtime errors and ensure codebase maintainability as the project scales.

## Technology Stack
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 4 and DaisyUI 5
- **Routing**: React Router 7 (planned)
- **Local Storage**: IndexedDB (for content/sync)
- **Tooling**: TypeScript, Storybook, ESLint

## Development Workflow
- **Feature Isolation**: Develop and verify components in isolation using Storybook.
- **Component Consistency**: Follow the established Atomic Design folder structure.
- **Routing Integration**: All pages must be integrated into the central routing configuration in `App.tsx`.
- **Verification**: Run build and lint checks before every major change.

## Governance
The Gyan Setu Constitution supersedes all other development practices. Any deviations must be justified and documented. Amendments to this constitution require alignment with the PRD and the project's mission of bridging the digital divide in rural India.

**Version**: 0.1.0 | **Ratified**: 2025-12-25 | **Last Amended**: 2025-12-25