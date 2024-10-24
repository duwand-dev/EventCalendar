import axios from "axios";
import { config } from "../config/config";
import { Description } from "@mui/icons-material";

interface IAddEventData {
  email: string;
  time: number;
  eventName: string;
  description: string;
}
export const AddEventAction = async (data: IAddEventData) => {
  return axios.post(`${config.serverURL}/addevent`, data).then((res) => {
    Promise.resolve(res);
  });
};
