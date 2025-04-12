export type Message = {
  sender: "user" | "bot";
  text: string;
};

export type Location = {
  name: string;
  description: string;
  score: number;
};
