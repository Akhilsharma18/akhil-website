import React, { useMemo } from 'react';

const CHARS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '>', '/', '{', '}', '[', ']', '(', ')', '=', '+', '*', '&', '%', '$', '#', '@', '!',
  'const', 'let', 'function()', '() => {}', 'await', 'async', '<div>', '</span>', 'console.log()', 'npm install',
  'git push', 'res.json()', 'app.use()', 'import', 'export'
];

function FloatingLetters() {
  const letters = useMemo(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
      left: `${Math.random() * 100}%`,
      animationDuration: `${12 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 20}s`,
      fontSize: `${0.8 + Math.random() * 1.5}rem`,
      opacity: 0.05 + Math.random() * 0.15,
    }));
  }, []);

  return (
    <div className="floating-letters-container" aria-hidden="true">
      {letters.map((l) => (
        <span
          key={l.id}
          className="float-letter"
          style={{
            left: l.left,
            animationDuration: l.animationDuration,
            animationDelay: l.animationDelay,
            fontSize: l.fontSize,
            color: `rgba(0, 255, 0, ${l.opacity})`,
          }}
        >
          {l.char}
        </span>
      ))}
    </div>
  );
}

export default FloatingLetters;
