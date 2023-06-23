export default function DefaultThumbnail({ src, alt }) {
  return (
    <img
      src={src}
      style={{ width: "60px", height: "60px" }}
      alt={alt}
      loading="lazy"
    />
  );
}
