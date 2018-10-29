import React from "react";
import fetch from "isomorphic-fetch";
import { polyfill } from "es6-promise";

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function parseJSON(response) {
  return response.json();
}

export function httpGet(url) {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON);
}
