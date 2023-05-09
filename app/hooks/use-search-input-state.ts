import { useState, useRef } from 'react'

/**
 * Custom React hook that manages the state of a search input and calls an onChange function
 * with the updated value after a user stops typing for a certain period of time.
 *
 * @param initialValue The initial value of the search input.
 * @param onChange The function to call when the input changes (debounced) should accept a string as an argument.
 * @param delay The delay time (in milliseconds) before calling the onChange function. Default: 500ms.
 * @returns An array with the current value of the search input and a function to update it.
 */
export const useSearchInputState = (
  initialValue: string,
  onChange: (val: string) => any,
  delay = 500
) => {
  const [value, setValueState] = useState<string>(initialValue)

  const timerRef = useRef<any>(null)

  const setValue = (value: string) => {
    setValueState(value)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      onChange(value)
    }, delay)
  }

  return [value, setValue] as [string, (value: string) => any]
}
