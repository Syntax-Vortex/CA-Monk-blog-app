export function formatExactDate(dateString: string): string {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) return "Invalid date"

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}
