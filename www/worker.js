// Sends www.meh-app.com to meh-app.com, with the same path and query.
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = "meh-app.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  },
};
