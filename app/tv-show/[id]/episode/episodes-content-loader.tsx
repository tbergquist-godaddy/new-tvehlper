import ContentLoader from 'react-content-loader';

export default function EpisodesContentLoader() {
  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={100}
      viewBox="0 0 1000 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="w-full"
    >
      <circle cx="27" cy="30" r="27" />
      <rect x="69" y="15" rx="0" ry="0" width="400" height="10" />
      <rect x="69" y="35" rx="0" ry="0" width="400" height="10" />
    </ContentLoader>
  );
}
