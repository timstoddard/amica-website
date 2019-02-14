// required
export const isRequired = (s: string) => !!s

// equality
export const isEqual = (target: string) => (s: string) => s === target

// min/max length
export const minLength = (n: number) => (s: string) => s.length >= n
export const maxLength = (n: number) => (s: string) => s.length <= n
