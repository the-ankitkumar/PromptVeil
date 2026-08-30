import React from 'react';

export function PromptveilLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Blue Shield Base */}
      <path 
        d="M12 2L3.5 5.5V11.5C3.5 17.2 7.5 22 12 23.5C16.5 22 20.5 17.2 20.5 11.5V5.5L12 2Z" 
        fill="#2563EB"
      />
      
      {/* Top-Left Quadrant: WHITE */}
      <path 
        d="M12 3.6V12H5.2C5.2 9.5 6.4 6.7 12 3.6Z" 
        fill="#FFFFFF"
      />
      
      {/* Bottom-Right Quadrant: WHITE */}
      <path 
        d="M12 12H18.8C18.5 15.9 15.9 19.3 12 21.4V12Z" 
        fill="#FFFFFF"
      />

      {/* Blue Grid Line Divider */}
      <path
        d="M12 2V23.5M3.5 12H20.5"
        stroke="#2563EB"
        strokeWidth="1"
      />
    </svg>
  );
}

export function PromptveilLogoWhite({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer White Shield Base */}
      <path 
        d="M12 2L3.5 5.5V11.5C3.5 17.2 7.5 22 12 23.5C16.5 22 20.5 17.2 20.5 11.5V5.5L12 2Z" 
        fill="#FFFFFF"
      />
      
      {/* Top-Left Quadrant: BLUE */}
      <path 
        d="M12 3.6V12H5.2C5.2 9.5 6.4 6.7 12 3.6Z" 
        fill="#2563EB"
      />
      
      {/* Bottom-Right Quadrant: BLUE */}
      <path 
        d="M12 12H18.8C18.5 15.9 15.9 19.3 12 21.4V12Z" 
        fill="#2563EB"
      />

      {/* White Grid Line Divider */}
      <path
        d="M12 2V23.5M3.5 12H20.5"
        stroke="#FFFFFF"
        strokeWidth="1"
      />
    </svg>
  );
}
