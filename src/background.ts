// background.ts

// This runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed');
    // Perform actions on installation, like setting default settings
  } else if (details.reason === 'update') {
    console.log('Extension updated');
    // Perform actions on update if necessary
  }
});

// Listener for messages from content scripts or popup
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log('Received message:', request);

    // Responding to the message received from the popup
    if (request.message === 'buttonClicked') {
      // Perform some action in response to the button click
      sendResponse({ data: 'Acknowledged button click' });
      console.log('Responding to popup button click');
    }

    // Return true to indicate you wish to send a response asynchronously
    return true;
  }
);

// Any other background logic can be added here
