import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDO",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
