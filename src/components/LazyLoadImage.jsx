import lazyload from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
const { LazyLoadImage } = lazyload

export default function LazyLoadImageComponent({
  src,
  placeholderSrc,
  classStyle,
  alt,
  width,
  height,
}) {
  return (
    <LazyLoadImage
      className={classStyle}
      placeholderSrc={placeholderSrc}
      width={width}
      height={height}
      src={src}
      alt={alt}
      effect="blur"
    />
  );
}
