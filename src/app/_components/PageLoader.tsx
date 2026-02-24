import Image from "next/image";
import Tijeras from "../../../public/prueba222.webp"; // o renómbrala a scissors.webp

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-background">
      <div className="relative">
        <Image
          src={Tijeras}
          alt="Cargando..."
          width={90}
          height={90}
          priority
          className="select-none pointer-events-none animate-spin-accel-stop "
        />
      </div>
    </div>
  );
}
