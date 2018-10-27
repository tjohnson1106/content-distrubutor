import { httpGet } from "../utils";

const Actions = {
  getDistributionsStatus: isrcs => {
    var isrcs = isrcs.split(/[\s,]+/);
    return dispatch => {
      httpGet("/api/v1/status?isrcs=" + isrcs)
        .then(data => {
          if (data.errors)
            dispatch({
              type: "DISTRIBUTIONS_ERROR",
              errors: data.errors
            });
          else
            dispatch({
              type: "DISTRIBUTIONS",
              distributions: data.distributions
            });
        })
        .catch(data => {
          dispatch({
            type: "DISTRIBUTIONS_ERROR",
            errors: data
          });
        });
    };
  }
};

export default Actions;
