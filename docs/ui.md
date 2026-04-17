# UI Coding Standards

## Component Library

**Only shadcn/ui components may be used for UI in this project.**

- Do NOT create custom components
- Do NOT use raw HTML elements styled with Tailwind as standalone components
- All UI must be built exclusively from shadcn/ui components
- Install new shadcn/ui components via `npx shadcn@latest add <component>`

Currently installed components live in `src/components/ui/`.

## Date Formatting

All dates must be formatted using [date-fns](https://date-fns.org/).

### Required Format

Dates must display with an ordinal day, abbreviated month, and full year:

```
1st Sep 2025
2nd Aug 2025
3rd Jan 2026
4th Jun 2024
```

### Implementation

```ts
import { format } from "date-fns";

function formatDate(date: Date): string {
  const day = date.getDate();
  const ordinal =
    day % 100 >= 11 && day % 100 <= 13
      ? "th"
      : ["th", "st", "nd", "rd"][Math.min(day % 10, 3)];

  return `${day}${ordinal} ${format(date, "MMM yyyy")}`;
}
```
