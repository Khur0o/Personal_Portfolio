import React, { useState, useEffect } from 'react';

const TypewriterColored = ({ segments, speed = 40 }) => {
  const [typed, setTyped] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [segmentIndex, setSegmentIndex] = useState(0);

  useEffect(() => {
    if (segmentIndex >= segments.length) return;

    const { text, color } = segments[segmentIndex];

    if (charIndex < text.length) {
      const timer = setTimeout(() => {
        const currentSegment = typed[segmentIndex] || { text: '', color };
        const newTyped = [...typed];
        newTyped[segmentIndex] = {
          text: currentSegment.text + text.charAt(charIndex),
          color,
        };
        setTyped(newTyped);
        setCharIndex(charIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setSegmentIndex(segmentIndex + 1);
      setCharIndex(0);
    }
  }, [charIndex, segmentIndex, segments, typed, speed]);

  return (
    <p style={{ fontFamily: 'Courier Prime', fontSize: '1rem', color: 'white' }}>
      {typed.map((seg, i) => (
        <span key={i} style={{ color: seg.color }}>{seg.text}</span>
      ))}
      <span className="cursor">|</span>
    </p>
  );
};

export default TypewriterColored;
