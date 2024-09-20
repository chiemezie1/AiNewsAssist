// src/components/ui/textarea.js
import React from 'react';

const Textarea = ({ value, onChange, placeholder, ...props }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border border-gray-300 rounded-md"
      {...props}
    />
  );
};

export default Textarea;
