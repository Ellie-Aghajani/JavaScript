// Import Axios for HTTP requests
const axios = require("axios");

// Function to fetch and decode the data from the Google Doc
async function decodeSecretMessage(url) {
  try {
    // Fetch data from the URL
    const response = await axios.get(url);
    const data = response.data;

    // Split the document content into lines
    const lines = data.split("\n");

    // Parse rows with valid x-coordinate, y-coordinate, and character
    const rows = [];
    for (const line of lines) {
      const parts = line.trim().split(/\s+/); // Split by whitespace
      if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[2])) {
        rows.push({
          x: parseInt(parts[0], 10),
          char: parts[1],
          y: parseInt(parts[2], 10),
        });
      }
    }

    // Determine grid dimensions
    const maxX = Math.max(...rows.map((row) => row.x)) + 1;
    const maxY = Math.max(...rows.map((row) => row.y)) + 1;

    // Initialize grid with spaces
    const grid = Array.from({ length: maxY }, () => Array(maxX).fill(" "));

    // Fill the grid with characters
    rows.forEach(({ x, char, y }) => {
      grid[y][x] = char;
    });

    // Convert the grid into a compact string representation
    const decodedMessage = grid.map((row) => row.join("").trimEnd()).join("\n");

    // Output the decoded message
    console.log("Decoded Message:");
    console.log(decodedMessage);
  } catch (error) {
    console.error("Error fetching or processing the document:", error.message);
  }
}

// URL of the Google Doc
const url =
  "https://docs.google.com/document/d/e/2PACX-1vQGuck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJklb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub";

// Call the function with the URL
decodeSecretMessage(url);
