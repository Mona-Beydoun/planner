# Yehia's Career Path

**Author:** Mona Beydoun

A small Next.js 16 website that helps Yehia, a Computer Science graduate,
organize his job search. It has a home page, a three-step plan, a list of
opportunities with a details page for each, and a dashboard with his
applications.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Questions

**1. Why did you use `await` when reading `params`?**
In Next.js 16, `params` is a Promise, not a plain object. I use `await` so the
page waits for the route information and then I can read the `id` from it.

**2. Why is the route ID a string?**
URL segments are text. `/opportunities/1` gives the value `"1"`, so I kept the
IDs in my data as strings to make the `===` comparison match.

**3. What belongs in the dashboard layout, and what belongs in each dashboard page?**
The layout holds what is shared by all dashboard pages: the Overview and
Applications navigation, with `children` showing the current page. Each page
holds its own content: the overview shows the summary count, and the
applications page shows the list.

## Note on client components

All pages and layouts are Server Components. Only `NavLinks` and
`DashboardNav` use `"use client"`, because they need `usePathname` to
highlight the current page in the menu.