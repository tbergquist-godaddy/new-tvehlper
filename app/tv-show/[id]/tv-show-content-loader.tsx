import ContentLoader from 'react-content-loader';

export default function SearchContentLoader() {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={300}
      viewBox="0 0 600 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="w-full"
    >
      <rect x="4" y="12" rx="0" ry="0" width="300" height="300" />
      <rect x="325" y="18" rx="0" ry="0" width="322" height="16" />
      <rect x="325" y="56" rx="0" ry="0" width="322" height="16" />
      <rect x="325" y="94" rx="0" ry="0" width="322" height="16" />
      <rect x="325" y="132" rx="0" ry="0" width="322" height="16" />
      <rect x="325" y="170" rx="0" ry="0" width="322" height="16" />
      <rect x="325" y="208" rx="0" ry="0" width="322" height="16" />
      <rect x="325" y="246" rx="0" ry="0" width="322" height="16" />
      <rect x="325" y="284" rx="0" ry="0" width="322" height="16" />
    </ContentLoader>
  );
}
