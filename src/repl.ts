export function cleanInput(input: string): string[] {
  return input
  .toLowerCase()
  .split(" ")
  .filter(i => i);
}
