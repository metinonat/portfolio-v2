export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

// This is a simple helper to determine the current page by comparing pathname / route
export const isCurrent = (item: string, pathname: string): boolean => {
  const page: string = item.replace(/\s+/g, "-").toLowerCase();
  return pathname.includes(page);
};
