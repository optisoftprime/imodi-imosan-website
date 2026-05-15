import Image from "next/image";

interface PlaceholderImgProps {
    src: string;
    width: number;
    height: number;
    className?: string;
    label?: string;
    rounded?: string;
}

const PlaceholderImg = ({
    src,
    width,
    height,
    className = "",
    label = "Image",
    rounded = "rounded-2xl",
}: PlaceholderImgProps) => {
    return (
        <div
            className={`relative overflow-hidden flex-shrink-0 bg-gray-300 ${rounded}`}
            style={{ width, height }}
        >
            <Image
                src={src}
                alt={label}
                fill
                className={`object-cover ${className}`}
            />
        </div>
    );
};

export default PlaceholderImg;