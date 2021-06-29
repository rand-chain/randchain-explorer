import axios from "axios";
import {applyCORSToUrl, unixToDateString} from "../utils";
import {FETCH_BLOCK} from "../constants/types";
import {URL_LOCAL_NODE} from "../constants/api";

const normalizeBlock = block => ({
  summary: {
    bits: block.result.bits,
    size: block.result.size,
    height: block.result.height,
    difficulty: block.result.difficulty,
    iterations: block.result.iterations,
    minerPubkey: block.result.pubkeyHex,
    randomness: block.result.randomnessHex,
  },
  hashes: {
    hash: block.result.hash,
    previousBlockHash: block.result.previousblockhash,
    nextBlockHash: block.result.nextblockhash,
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
        dispatch({type: FETCH_BLOCK, payload: normalizeBlock(data)});
      })
      .catch(error => {
        throw error;
      });
  };
};
