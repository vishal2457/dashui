import { useRef } from 'react';
import randomId from '../random-id';

export function useId(id?: string, generateId: () => string = randomId) {
  const generatedId = useRef(generateId());
  return id || generatedId.current;
}