import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={56}
    height={56}
    viewBox="0 0 56 56"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="28" cy="28" r="28" />
  </ContentLoader>
);

export default MyLoader;
