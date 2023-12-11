// contentScripts/myContentScript.ts

// Function to modify the DOM of the current page
function modifyDOM() {
    // Example: Change the background color of the page
    console.log('src/contentScripts/myContentScript.ts said: Content script DOM modification');

    // You can do more complex DOM manipulations here
}

// Call the function to modify the DOM
modifyDOM();

// Function to send a message to the background script
function sendMessageToBackground() {
    chrome.runtime.sendMessage({ message: 'Hello from content script' }, (response) => {
        console.log('Received response from background:', response);
    });
}

// Example of sending a message
sendMessageToBackground();

// You can also listen for messages from the background script or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in content script:', request);

    // Example action based on the received message
    if (request.command === 'changeColor') {
        // document.body.style.backgroundColor = request.color;
        console.log('Changing color to', request.color);
    }

    // Respond back if necessary
    sendResponse({ status: 'Message received' });
});
