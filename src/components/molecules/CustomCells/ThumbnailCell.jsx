import DefaultThumbnail from "../../atoms/Thumbnails/DefaultThumbnail";

export default function ThumbnailCell({ src, alt }) {
  return (
    <td className="flex justify-center h-full pt-1 pb-1">
      <DefaultThumbnail src={src} alt={alt} />
    </td>
  );
}
