import Image from "next/image";

const Gallery = () => {
  const images = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
    "/images/gallery-5.png",
    "/images/gallery-6.png",
    "/images/gallery-8.png",
  ];

  return (
    <div className="flex justify-center items-center gap-1.5 md:min-h-[75vh] bg-[#FCF3EE]">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`overflow-hidden flex-1 md:aspect-[1/3] aspect-[1/5] ${
            idx === 1
              ? "rounded-tr-[50px]"
              : idx === 3
              ? "rounded-tl-[50px]"
              : idx === 5
              ? "rounded-br-[50px]"
              : ""
          }`}
        >
          <Image
            src={src}
            alt={`Gallery image ${idx + 1}`}
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
