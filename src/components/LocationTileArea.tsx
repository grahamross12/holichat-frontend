import LocationTile from "./LocationTile";
import { Location } from "../types";

type LocationTileAreaProps = {
  onClickLocation: (location: Location) => void;
  candidateLocations: Location[];
};

function LocationTileArea({
  onClickLocation,
  candidateLocations,
}: LocationTileAreaProps) {
  return (
    <div className="w-full flex-grow flex flex-col gap-4 justify-start items-start">
      {candidateLocations.map((location, index) => (
        <LocationTile
          location={location}
          number={index + 1}
          onClick={onClickLocation}
          key={index}
        />
      ))}
    </div>
  );
}

export default LocationTileArea;
