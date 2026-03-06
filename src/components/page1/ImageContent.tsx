import { MoveRight } from "lucide-react";

interface ImageContentProps {
  number: number;
  description: string;
  label: string;
  badgeColor: string;
  imageUrl: string;
}
const ImageContent = ({
  number,
  description,
  label,
  badgeColor,
  imageUrl,
}: ImageContentProps) => {
  return (
    <div
      className="relative rounded-3xl overflow-hidden w-[320px] h-[480px] shrink-0"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute top-5 left-5 bg-white text-black text-larger font-bold w-6 h-6 rounded-full flex items-center justify-center z-10">
        {number}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <p className="text-white text-large leading-snug mb-4">{description}</p>
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-larger font-bold ${badgeColor}`}
        >
          {label}{" "}
          <button>
            <MoveRight size={20} color="#000000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
