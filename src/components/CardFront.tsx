import photo from "@/assets/card-front-photo.png";

export function CardFront() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <img
        src={photo}
        alt="Mateus Assunção"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
