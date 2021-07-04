import axios from "axios";
import {applyCORSToUrl, unixToDateString} from "../utils";
import {FETCH_BLOCK} from "../constants/types";
import {URL_LOCAL_NODE} from "../constants/api";

const normalizeBlock = block => ({
  summary: {
    bits: block.bits,
    size: block.size,
    height: block.height,
    difficulty: block.difficulty,
    iterations: block.iterations,
    minerPubkey: block.pubkeyHex,
    randomness: block.randomnessHex,
  },
  hashes: {
    hash: block.hash,
    previousBlockHash: block.previousblockhash,
    nextBlockHash: block.nextblockhash,
  }
});

export const fetchBlock = hash => {
  return dispatch => {
    const data = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "getblock",
      "params": [hash, true],
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
        dispatch({type: FETCH_BLOCK, payload: normalizeBlock(data.result)});
      })
      .catch(error => {
        throw error;
      });
  };
};
