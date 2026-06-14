# W2S Assignment

A React + Vite app that pulls user and product records from the DummyJSON API
and displays them in a searchable, filterable, paginated table — styled like a
field index / data ledger rather than a typical admin dashboard.

## Live data sources
- Users    — `https://dummyjson.com/users?limit=100&select=id,firstName,lastName,email,phone,age,gender,address`
- Products — `https://dummyjson.com/products?limit=100&select=id,title,description,category,price,brand,sku,warrantyInformation,availabilityStatus,images`

## Tech stack
- React 19 + Vite
- Redux Toolkit (async thunks + slices for users/products/UI state)
- Tailwind CSS v4
- JavaScript

## Features
- **Two tabs** — Users and Products, switchable via the side index drawer
- **Dynamic table** — one reusable `DataTable` component; columns are read
  from the API response, no hardcoded schema
- **Global search** — filters across every field in the current dataset
- **Category filter** — dropdown (Products tab) built dynamically from the
  data's `category` values
- **Column selector** — show/hide individual columns
- **Pagination** — 10 rows per page
- **Loading skeleton** and **error state** with a friendly "void" message
- **Light/Day & Dark/Night theme toggle**

## Getting started

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build
```

