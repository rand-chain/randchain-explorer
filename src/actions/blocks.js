import axios from "axios";
import {applyCORSToUrl, unixToDateString} from "../utils";
import {FETCH_BLOCKS} from "../constants/types";
import {URL_LOCAL_NODE} from "../constants/api";

const normalizeBlocks = ({blocks}) =>
  blocks.map(({height, time, hash}) => ({
    height,
    time: unixToDateString(time),
    hash
  }));

export const fetchBlocks = (timestamp = new Date().getTime()) => {
  return dispatch => {
    // const url = applyCORSToUrl(`${URL_BLOCKS}/${timestamp}`);

    const data = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "getblocks",
      "params": [0],
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
          payload: normalizeBlocks(data)
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
