import axios from "axios";
import {unixToDateString} from "../utils";
import {FETCH_BLOCKS} from "../constants/types";
import {URL_LOCAL_NODE} from "../constants/api";

// height, hash, randomness
const normalizeBlocks = (blocks) =>
  blocks.map(({height, hash, randomnessHex}) => ({
    height: parseInt(height),
    hash,
    randomness: randomnessHex,
  }));

export const fetchBlocks = (start = 0, num = 10) => {
  return dispatch => {
    const data = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "getblocks",
      "params": [start, num],
      "id": 1
    });
    var config = {
      method: 'post',
      url: URL_LOCAL_NODE,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    };

    return axios(config)
      .then(({data}) => {
        dispatch({
          type: FETCH_BLOCKS,
          payload: normalizeBlocks(data.result),
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
