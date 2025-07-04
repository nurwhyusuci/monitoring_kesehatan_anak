import React from 'react';

export const Card = ({ children, className = '', title, value }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 ${className}`}>
      {title && value ? (
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};