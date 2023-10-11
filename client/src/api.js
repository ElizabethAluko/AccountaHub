// client/src/api.js
// Simulated API endpoint
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export { fetchData };
