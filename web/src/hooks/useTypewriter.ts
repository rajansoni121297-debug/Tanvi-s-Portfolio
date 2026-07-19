import { useEffect, useState } from 'react';

const TYPE_SPEED_MS = 60;
const DELETE_SPEED_MS = 35;
const HOLD_MS = 2000;
const WAIT_MS = 400;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

/**
 * Types out `words` one at a time, pausing on each full word, deleting it,
 * then moving to the next. Cursor should blink only while `isPaused` (idle
 * between typing/deleting bursts) to read like a live terminal.
 */
export function useTypewriter(words: string[]) {
  const reducedMotion = usePrefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  const target = words[wordIndex % words.length];
  const isComplete = phase === 'typing' && text === target;
  const isEmpty = phase === 'deleting' && text === '';

  useEffect(() => {
    if (reducedMotion) return;

    if (isComplete) {
      const t = window.setTimeout(() => setPhase('deleting'), HOLD_MS);
      return () => window.clearTimeout(t);
    }

    if (isEmpty) {
      const t = window.setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }, WAIT_MS);
      return () => window.clearTimeout(t);
    }

    const speed = phase === 'typing' ? TYPE_SPEED_MS : DELETE_SPEED_MS;
    const t = window.setTimeout(() => {
      setText((prev) =>
        phase === 'typing' ? target.slice(0, prev.length + 1) : target.slice(0, prev.length - 1)
      );
    }, speed);
    return () => window.clearTimeout(t);
  }, [text, phase, wordIndex, reducedMotion, target, isComplete, isEmpty, words.length]);

  return {
    text: reducedMotion ? target : text,
    index: wordIndex,
    isPaused: reducedMotion ? true : isComplete || isEmpty,
  };
}
