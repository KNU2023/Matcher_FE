import Skeleton from "../../atoms/skeleton/Skeleton";

const SkeletonBox = ({ height, width, margin, padding, borderRadius }) => {
  return (
    <>
      <Skeleton
        height={height}
        width={width}
        margin={margin}
        padding={padding}
        borderRadius={borderRadius}
        backgroundColor="#e3e3e3"
        overflow="hidden"
        position="relative"
      />
    </>
  );
};

export default SkeletonBox;
