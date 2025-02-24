---
isDraft: false
title: "Personal Website"
description: "The website you are currently viewing!"
image:
  src: "/grand_duc_circle.svg"
  alt: "Xamcost logo"
link: "https://xamcost.github.io/"
tags: ["Web development", "Astro"]
---

This is the website you are currently viewing! It is built using [Astro](https://astro.build/). The website is hosted on GitHub Pages and the source code is available [here](https://github.com/xamcost/xamcost.github.io).

## Why Astro?

Apart from showcasing projects and blog posts, the primary goal of this website is to serve as a playground for web development, to strengthen my skills in front-end development. Astro was chosen for several reasons:
1. it shines for static websites, both in performance and convenience.
2. it is minimal: it doesn't ship javascript to the client by default. You can do everything with HTML and CSS, and use it mostly to handle routing.
3. it is flexible: shall I want to go further in styling, I can use whatever framework I want (React, Vue, Svelte, etc.) and integrate it with Astro.
4. it supports markdown, making it easy to write project descriptions or blog posts.

## Structure

The website is structured as follows:
- `src`: contains the source code of the website.
  - `blog`: the markdown files for the blog posts.
  - `components`: the components used across various pages.
  - `layouts`: the `astro` component for the layout of the website.
  - `pages`: the `astro` files for the pages of the website. It includes the templates for the projects and blog posts.
  - `projects`: the markdown files for the projects' pages.
  - `styles`: the CSS files.
- `public`: contains the static files (images, etc.) used in the website.

Feel free to explore the source code of the website and to suggest improvements, or to fork it for your own use!

## Deployment 

The website is deployed on GitHub Pages. The deployment is done automatically using GitHub Actions ([workflow file here](https://github.com/xamcost/xamcost.github.io/blob/main/.github/workflows/deploy_website.yaml)). The website is built from the `main` branch of the repository.
