import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function $<T extends Element>(
  selector: string,
  context: Document | HTMLElement = document,
): T | null {
  return context.querySelector<T>(selector);
}

export const $$ = <T extends Element>(
  selector: string,
  context: Document | HTMLElement = document,
) => context.querySelectorAll<T>(selector);
