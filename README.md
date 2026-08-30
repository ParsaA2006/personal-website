# Parsa Ahmadi – Personal Website

This repository contains my personal portfolio website, built with Next.js, React, Tailwind CSS, and TypeScript. The site includes a homepage, About page, Projects pages, a Resume page, and an Ask Parsa AI assistant.

## Features

- Personal portfolio with project detail pages
- Resume page with a stable public PDF link
- About page with centralized biography, education, skills, and experience content
- Ask Parsa AI assistant powered by Groq and restricted to public portfolio data

## Content Source Of Truth

Portfolio content is centralized in [`lib/portfolio-data.ts`](lib/portfolio-data.ts). Pages and Ask Parsa consume this data so experience, project, education, and resume information stay consistent across the site.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

1. Clone the repository.
   ```bash
   git clone https://github.com/ParsaA2006/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Create `.env.local` and add your Groq configuration.
   ```bash
   GROQ_API_KEY=your_groq_api_key
   GROQ_MODEL=openai/gpt-oss-120b
   ```
   `GROQ_MODEL` is optional. If omitted, the site falls back to `openai/gpt-oss-120b`.
4. Start the development server.
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000).

## Resume

The public resume is served from the stable path [`/Parsa-Ahmadi-Resume.pdf`](public/Parsa-Ahmadi-Resume.pdf).

## Notes

- Ask Parsa may only share the public resume PDF.
- Private application or transcript materials are not part of the public website content.
