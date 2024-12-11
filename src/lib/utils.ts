import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const getCurrentMonth = (): string => {
  const currentDate = new Date();
  return new Intl.DateTimeFormat('nl-NL', { month: 'long' }).format(currentDate);
};
export const getCurrentYear = (): number => {
  return new Date().getFullYear();

}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
