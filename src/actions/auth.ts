import { LOGIN_SUCCESS, LOGIN_ERROR } from "./types";
import { Dispatch } from "redux";
import axios from "axios";

//Login Students
export const login = (name: String) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer keyRha6sNAIv7Pwhg",
    },
  };
  const URL = "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students";
  const query = "?filterByFormula=";
  const filterBy = `FIND("${name}", {Name} )`;
  const link = `${URL}${query}${filterBy}`;

  try {
    const res = await axios.get(`${link}`, config).then((response) => {
      return response.data.records[0].fields.Classes;
    });

    res.map(async (element: String) => {
      const result = await axios
        .get(
          `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes/${element}`,
          config
        )
        .then((response) => {
          return response.data;
        });

      console.log(result);
      // const data = result
    });

    dispatch({
      type: LOGIN_SUCCESS,
      // payload: data,
    });
  } catch (err: any) {
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
