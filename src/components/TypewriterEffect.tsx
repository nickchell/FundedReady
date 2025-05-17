import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
}

export const TypewriterEffect = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
}: TypewriterEffectProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingPause, setTypingPause] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        timeout = setTimeout(type, deletingSpeed);
      } else if (typingPause) {
        // Pause at the end of typing
        timeout = setTimeout(() => setTypingPause(false), delayBetweenPhrases);
      } else if (currentText.length < currentPhrase.length) {
        // Typing text
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        timeout = setTimeout(type, typingSpeed);
      } else {
        // Finished typing, pause then start deleting
        setTypingPause(true);
        timeout = setTimeout(() => {
          setIsDeleting(true);
          type();
        }, delayBetweenPhrases);
      }

      // If we've finished deleting, move to next phrase
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, typingPause]);

  return (
    <span className="text-cyan-300 font-medium inline-block min-w-[180px] text-left">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
