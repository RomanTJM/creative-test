import axios from "axios";
import { cardData } from '../Database/Database';

export const SidebarImages = async () =>
  axios
    .get({cardData})
    .then((response) => response.data)

    .catch((error) => {
      console.log(error);
    });