import { Location } from "../types";

type LocationTileProps = {
  location: Location;
  number: number;
  onClick: (location: Location) => void;
};

function LocationTile({ location, number, onClick }: LocationTileProps) {
  return (
    <div
      className="w-full h-20 bg-white/80 p-5 rounded-3xl shadow-xl flex gap-4 cursor-pointer"
      onClick={() => onClick(location)}
    >
      <div className="bg-cyan-800 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
        {Math.round(location.score * 10) / 10}
      </div>
      <div className="flex items-center">
        <h1>{location.name}</h1>
      </div>
    </div>
  );
}

export default LocationTile;
