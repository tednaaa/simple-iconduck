chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "clearCookies") clearCookies();
});

function clearCookies() {
  chrome.cookies.remove({
    url: "https://iconduck.com",
    name: "client-downloadCount",
  });
}
