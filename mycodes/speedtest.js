// Function to start the speed test
function startSpeedTest() {
    const fileUrl = "https://via.placeholder.com/1000000"; // URL of a dummy file
    const fileSizeInBytes = 1000000; // Size of the file in bytes (1 MB)
    
    const startTime = new Date().getTime(); // Record the start time
  
    // Create an image element to fetch the file
    const img = new Image();
    img.onload = function () {
      const endTime = new Date().getTime(); // Record the end time
      const durationInSeconds = (endTime - startTime) / 1000; // Time taken in seconds
  
      // Calculate the speed in Mbps
      const speedMbps = ((fileSizeInBytes * 8) / (durationInSeconds * 1000000)).toFixed(2);
  
      // Display the result
      document.getElementById("result").innerText = `Your Internet Speed: ${speedMbps} Mbps`;
    };
  
    img.onerror = function () {
      document.getElementById("result").innerText = "Error: Could not perform the speed test. Please try again.";
    };
  
    // Trigger the download by setting the image source
    img.src = `${fileUrl}?cache_bust=${new Date().getTime()}`; // Prevent caching
  }
  
  // Attach the event listener to the button
  document.getElementById("startTest").addEventListener("click", startSpeedTest);
  