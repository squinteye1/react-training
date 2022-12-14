import axios from "axios";
import { REMOTE_HOST, EP_SALES } from "./endpoints";

export const getSales = async (setGetError) => {
  try {
    const res = await axios.get(REMOTE_HOST + EP_SALES);
    return res.data.length
      ? { sales: res.data }
      : { error: `There are no todos stored` };
  } catch (e) {
    setGetError(`Data not available from server: ${e.message}`);
    return { error: `Data not available from server: ${e.message}` };
  }
};
