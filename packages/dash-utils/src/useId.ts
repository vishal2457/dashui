import { useRef } from 'react';
import randomId from './random-id';

export const useId = (id?: string, generateId: () => string = randomId) => {
  const generatedId = useRef(generateId());
  return id || generatedId.current;
}