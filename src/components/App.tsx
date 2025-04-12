import React, { useState, useRef } from "react";
import Chatbox from "./Chatbox";
import Prompt from "./Prompt";
import Header from "./Header";
import { Message, Location } from "../types";
import { getUserId } from "../utils";

async function findMatchingLocation(messages: Message[]): Promise<Location[]> {
  const userId = getUserId();
  const body = JSON.stringify({ userId: userId, messages: messages });
  try {
    const res = await fetch(
      "http://localhost:8000/api/find-matching-location",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );
    if (res.ok) {
      const body = await res.json();
      const locations: Location[] = body.map((location: any) => ({
        name: location.name,
        description: location.description,
        score: location.score,
      }));
      return locations;
    }
  } catch {
    return [];
  }
  return [];
}

async function askBotAboutLocation(
  messages: Message[],
  location: string
): Promise<string> {
  // send the messages to the backend
  const body = JSON.stringify({ messages: messages, location: location });
  const res = await fetch("http://localhost:8000/api/ask-bot-about-location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data.reply;
  }
  return `I don't know anything about ${location}.`;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const findLocationMessages: Message[] = [];
  const [selectedLocation, setSelectedLocation] = useState<null | string>(null);
  const [candidateLocations, setCandidateLocations] = useState<Location[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value) return;
    const input = inputRef.current.value;
    inputRef.current.value = "";
    if (!selectedLocation) {
      findLocationMessages.push({
        sender: "user",
        text: input,
      });
      setCandidateLocations(await findMatchingLocation(findLocationMessages));
    } else {
      const userMessage: Message = {
        sender: "user",
        text: input,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      const reply = await askBotAboutLocation(
        [...messages, userMessage],
        selectedLocation
      );
      const botMessage: Message = { sender: "bot", text: reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  const handleClickLocation = (location: Location) => {
    setSelectedLocation(location.name);
    setMessages([
      {
        sender: "bot" as const,
        text: `What would you like to know about ${location.name}?`,
      },
    ]);
  };
  return (
    <div className="flex flex-col gap-4 pb-5 w-full h-full justify-center items-center">
      <Header />
      <Chatbox
        messages={messages}
        selectedLocation={selectedLocation}
        onClickLocation={handleClickLocation}
        onClickBack={() => setSelectedLocation(null)}
        candidateLocations={candidateLocations}
      />
      <Prompt onSubmit={handleSendMessage} inputRef={inputRef} />
    </div>
  );
}

export default App;
