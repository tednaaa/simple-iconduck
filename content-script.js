function handleMutation(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const targetElement = mutation.target.querySelector(
        '[data-component-name="AuthPromptModal"]'
      );
      if (targetElement) {
        chrome.runtime.sendMessage({ action: "clearCookies" });

        document
          .querySelector('[data-component-name="AuthPromptModal"]')
          .remove();
      }
    }
  }
}

const observer = new MutationObserver(handleMutation);
observer.observe(document.body, { childList: true, subtree: true });
