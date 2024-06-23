import React, { useState } from 'react';
import { ImageLoaderProps } from '../interfaces/component.interface';
import { Spinner } from './spinner/Spinner';

export const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="image-loader">
      {loading && <div className="loader"><Spinner /></div>}
      {error && <div className="error">Failed to load image.</div>}
      <img
        src={src}
        alt={alt}
        style={loading || error ? { display: 'none' } : {}}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        className="w-24"
      />
    </div>
  );
};