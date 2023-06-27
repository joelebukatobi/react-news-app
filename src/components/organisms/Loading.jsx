import React from 'react';
import LoadingGIF from '@/assets/images/loading.gif';

export const Loading = () => {
  return (
    <div aria-label="loading">
      <img src={LoadingGIF} alt="loading" />
    </div>
  );
};
