import React from 'react';

export default function Logo() {
  return (
    <div className="text-2xl logo">
      <svg width="80" height="40" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
        {/* Store Icon */}
        <rect x="0" y="10" width="20" height="20" rx="2" fill="#0d8aff" />
        <rect x="8" y="5" width="4" height="5" fill="#0d8aff" />
        <rect x="3" y="18" width="14" height="2" fill="#fff" />
        <rect x="5" y="22" width="10" height="2" fill="#fff" />

        {/* Text */}
        <text x="26" y="27" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#0d8aff">IG</text>
        <text x="50" y="27" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#ff9100">60</text>
        <text x="70" y="27" fontFamily="Arial, sans-serif" fontSize="8" fill="#94a3b8">.com</text>
      </svg>
    </div>
  );
}