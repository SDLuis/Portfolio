import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoadImageComponent({src, placeholderSrc, classStyle, alt}) {
  return <LazyLoadImage className={classStyle} placeholderSrc={placeholderSrc} src={src} alt={alt} effect="blur" />;
}