export default {
  fetch() {
    const response_start = Date.now();
    const response = new Response();
    response.headers.set("Response-Start", response_start)
    response.headers.set("Response-End", Date.now())
    return response;
  },
};