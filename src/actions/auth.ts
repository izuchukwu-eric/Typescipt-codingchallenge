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
  const URL = "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes";
  const query = "?filterByFormula=";
  const filterBy = `FIND("${name}", {Students} )`;
  const link = `${URL}${query}${filterBy}`;

  try {
    const res = await axios.get(`${link}`, config).then((response) => {
      return response.data.records;
    });

    console.log(res);
    // let result: any[] = [];
    // res.map(async (element: String) => {
    //   await axios
    //     .get(
    //       `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes/${element}`,
    //       config
    //     )
    //     .then((response) => {
    //       result.push(response.data.fields);
    //       console.log(result);
    //     });
    //   dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: result,
    //   });
    // });
  } catch (err: any) {
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
