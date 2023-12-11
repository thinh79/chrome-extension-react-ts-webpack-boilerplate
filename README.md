
# My Chrome Extension

Author: Thinh Bui

## Descriptio

This Chrome Extension is a React-based (TypeScript, Webpack) application integrated with Tailwind CSS for styling. It utilizes the power of Chrome's extensive APIs to enhance user browsing experience by providing custom functionality directly within the browser.

## Features

- **Popup UI**: A user-friendly interface accessible via the browser toolbar.
- **Options Page**: Customizable settings for the extension.
- **Background Script**: Handles background processing and inter-script messaging.
- **Content Script**: Interacts with web page content.

## Installation

To install and run the extension locally:

1. Clone the repository:
   ```
   git clone [repository URL]
   ```
2. Navigate to the project directory:
   ```
   cd [project directory]
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the project:
   ```
   npm run build
   ```

## Loading the Extension into Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" at the top-right corner.
3. Click on "Load unpacked" and select the `dist` folder in the project directory.

## Usage

- Click on the extension icon in the Chrome toolbar to open the popup.
- Go to the extension details in `chrome://extensions/` to access the Options page.
- The content script activates automatically on specified web pages.

## Development

- Use `npm run build` to build the project. The output files will be in the `dist` directory.
- For development purposes, you can use `npm run dev` (setup required in `package.json`) for continuous building.

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin new-feature`.
5. Submit a pull request.
