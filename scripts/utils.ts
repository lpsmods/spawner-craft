import { PROJECT_ID } from "./constants";

export function makeId(name: string): string {
  return `${PROJECT_ID}:${name}`;
}
