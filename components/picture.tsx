export default function Picture({
  src,
  alt,
  className,
  width,
  height
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const name = src.split(".").slice(0, -1).join(".");

  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );

  return src.endsWith(".svg") ? (
    img
  ) : (
    <picture>
      <source srcSet={`${name}.avif`} type="image/avif" />
      <source srcSet={`${name}.jxl`} type="image/jxl" />
      <source srcSet={`${name}.webp`} type="image/webp" />
      {img}
    </picture>
  );
}
