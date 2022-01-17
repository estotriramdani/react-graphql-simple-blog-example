import React from 'react';

export default function BlogDetailSkeleton() {
  return (
    <div>
      <div className="bg-gray-200 animate-pulse w-full h-10 mb-3"></div>
      <div className="bg-gray-200 animate-pulse w-full h-32 mb-3"></div>
      <div className="bg-gray-200 animate-pulse w-full h-24 mb-3"></div>
      <div className="bg-gray-200 animate-pulse w-full h-32 mb-3"></div>
      <div className="flex gap-2 flex-wrap">
        <div className="bg-gray-200 flex-shrink-0 animate-pulse w-20 h-8"></div>
        <div className="bg-gray-200 flex-shrink-0 animate-pulse w-20 h-8"></div>
        <div className="bg-gray-200 flex-shrink-0 animate-pulse w-20 h-8"></div>
        <div className="bg-gray-200 flex-shrink-0 animate-pulse w-20 h-8"></div>
      </div>
    </div>
  );
}
