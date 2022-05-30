export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img src={src} style={{
        borderRadius: `${borderRadius}%`,
        objectFit: fit,
      }} alt={alt} width={`${width * 100}px`} height={`${height * 100} px`} />
    </div>
  );
};
