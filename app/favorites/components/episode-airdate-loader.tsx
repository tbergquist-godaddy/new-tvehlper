import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={24}
    viewBox="0 0 500 24"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="w-full"
  >
    <rect x="0" y="0" rx="0" ry="0" width="500" height="24" />
  </ContentLoader>
);

export default MyLoader;
