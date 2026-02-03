import { useEffect, useState } from "react";

export default function TypingIntro({
  sentences,
  typingSpeed = 60,
  deletingSpeed = 40,
  pauseTime = 2000,
}) {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];

    let timeout;

    // ĐANG GÕ
    if (!isDeleting && charIndex < currentSentence.length) {
      timeout = setTimeout(() => {
        setText(currentSentence.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    // GÕ XONG → PAUSE
    else if (!isDeleting && charIndex === currentSentence.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    }

    // ĐANG XÓA
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentSentence.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    }

    // XÓA XONG → CÂU TIẾP THEO
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    sentenceIndex,
    sentences,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <p className="text-lg md:text-xl text-slate-300 font-black min-h-[1.6em]">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </p>
  );
}
