import MessageArea from "./MessageArea";
import LocationTileArea from "./LocationTileArea";
import { Message, Location } from "../types";

type ChatboxProps = {
  messages: Message[];
  selectedLocation: null | string;
  onClickLocation: (location: Location) => void;
  onClickBack: () => void;
  candidateLocations: Location[];
};

function Chatbox({
  messages,
  selectedLocation,
  onClickLocation,
  onClickBack,
  candidateLocations,
}: ChatboxProps) {
  return (
    <div className="w-full h-100% flex-grow flex rounded-3xl  bg-white/50 justify-start items-center flex-col gap-4 overflow-scroll p-10 shadow-xl">
      {selectedLocation ? (
        <MessageArea messages={messages} onClickBack={onClickBack} />
      ) : (
        <LocationTileArea
          onClickLocation={onClickLocation}
          candidateLocations={candidateLocations}
        />
      )}
    </div>
  );
}

export default Chatbox;
