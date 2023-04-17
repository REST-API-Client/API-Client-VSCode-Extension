function getUrl(requestUrl: string) {
  if (
    requestUrl.indexOf("http://") === -1 &&
    requestUrl.indexOf("https://") === -1
  ) {
    requestUrl = `http://${requestUrl}`;
  }

  return requestUrl;
}

export default getUrl;
