//external imports
import axios from "axios";
//internal imports
import { config } from "../config/config";

interface IAddEventData {
  email: string;
  time: number;
  eventName: string;
  description: string;
}

export const AddEventAction = async (data: IAddEventData) => {
  return axios
    .post(`${config.serverURL}/addevent`, data)
    .then((res) => {
      Promise.resolve(res);
    })
    .catch((err) => console.error(err));
};
