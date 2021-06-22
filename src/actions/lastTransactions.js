import axios from "axios";
import { applyCORSToUrl, unixToDateString } from "../utils";
import { FETCH_LAST_TRANSACTIONS } from "../constants/types";
import { URL_LAST_TRANSACTIONS } from "../constants/api";

const normalizeLastTransactionsPayload = ({ txs: transactions }) =>
  transactions.map(({ weight, time, hash }) => ({
    weight,
    time: unixToDateString(time),
    hash,
  }));

export const fetchLastTransactions = () => {
  return dispatch => {
    const url = applyCORSToUrl(`${URL_LAST_TRANSACTIONS}`);
    return axios
      .get(url)
      .then(({data}) => {
        dispatch({
          type: FETCH_LAST_TRANSACTIONS,
          payload: normalizeLastTransactionsPayload(data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
