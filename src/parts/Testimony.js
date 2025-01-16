import React from 'react';

import Star from 'elements/Star';

export default function Testimony() {
  return (
    <div>
      {/* Komponen Star dengan nilai rating yang diberikan */}
      <Star value={4.75} height={20} width={20} spacing={4} />
    </div>
  );
}
