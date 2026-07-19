import { useEffect, useRef, useState } from 'react';
import { aboutStats } from '../data';

const frustrationLines = ["It's not working", 'Bohot ho gaya', "I'm so done with this shit"];

// Ranked by how natural they tend to sound compared to the robotic default voices.
// Female voices only.
const PREFERRED_VOICE_NAMES = [
  'Samantha',
  'Ava',
  'Ava (Premium)',
  'Zoe (Premium)',
  'Google UK English Female',
  'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Jenny Online (Natural) - English (United States)',
  'Microsoft Zira Desktop - English (United States)',
];

// Substrings known to belong to male voices — excluded from the fallback below.
const KNOWN_MALE_VOICE_NAMES = [
  'Alex',
  'Daniel',
  'Fred',
  'Nicky',
  'Ralph',
  'Aaron',
  'Guy',
  'Madhur',
  'Prabhat',
  'David',
  'Mark',
  'Google US English',
];

function isKnownMale(name: string): boolean {
  if (/\bmale\b/i.test(name)) return true;
  return KNOWN_MALE_VOICE_NAMES.some((m) => name.includes(m));
}

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  for (const name of PREFERRED_VOICE_NAMES) {
    const match = voices.find((v) => v.name === name);
    if (match) return match;
  }
  const enVoices = voices.filter((v) => v.lang.startsWith('en'));
  const explicitFemale = enVoices.find((v) => /\bfemale\b/i.test(v.name));
  if (explicitFemale) return explicitFemale;
  const likelyFemale = enVoices.find((v) => !isKnownMale(v.name));
  return likelyFemale ?? null;
}

export default function Stats() {
  const frustrationIndex = aboutStats.findIndex((s) => s.label.startsWith('Times screamed'));
  const [frustrationCount, setFrustrationCount] = useState(() =>
    parseInt(aboutStats[frustrationIndex].value, 10)
  );
  const lastLineIndex = useRef<number | null>(null);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const loadVoice = () => {
      const picked = pickVoice(window.speechSynthesis.getVoices());
      if (picked) setVoice(picked);
    };

    loadVoice();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoice);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoice);
  }, []);

  const handleFrustrationClick = () => {
    setFrustrationCount((c) => c + 1);

    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    let index = Math.floor(Math.random() * frustrationLines.length);
    while (index === lastLineIndex.current) {
      index = Math.floor(Math.random() * frustrationLines.length);
    }
    lastLineIndex.current = index;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(frustrationLines[index]);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = 'en-US';
    }
    utterance.rate = 0.95;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="px-12 border-t border-hairline box-border">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {aboutStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-6 px-6 flex flex-col justify-center items-center min-w-0 ${
              i < aboutStats.length - 1 ? 'sm:border-r border-hairline' : ''
            }`}
          >
            {i === frustrationIndex ? (
              <button
                type="button"
                onClick={handleFrustrationClick}
                aria-label={`${stat.label}, currently ${frustrationCount}. Click to add one.`}
                className="font-semibold text-[2.6rem] leading-none text-center -mt-1.5 pb-1.5 bg-transparent border-0 p-0 cursor-pointer text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-95 transition-transform"
              >
                {frustrationCount}
              </button>
            ) : (
              <div className="font-semibold text-[2.6rem] leading-none text-center -mt-1.5 pb-1.5">
                {stat.value}
              </div>
            )}
            <div className="text-[12.5px] text-ink leading-relaxed text-center text-pretty">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
