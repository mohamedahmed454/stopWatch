 // Get the HTML elements
 const stopwatchElement = document.getElementById("stopwatch");
 const startButton = document.getElementById("startButton");
 const stopButton = document.getElementById("stopButton");
 const resetButton = document.getElementById("resetButton");

 let startTime;
 let elapsedTime = 0;
 let timerInterval;

 // Format the time values
 function formatTime(time) {
   return time.toString().padStart(2, "0");
 }

 // Update the stopwatch display
 function updateStopwatch() {
   const currentTime = Date.now();
   const deltaTime = currentTime - startTime + elapsedTime;

   const hours = Math.floor(deltaTime / (1000 * 60 * 60));
   const minutes = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((deltaTime % (1000 * 60)) / 1000);

   stopwatchElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
 }

 // Start the stopwatch
 function startStopwatch() {
   startTime = Date.now() - elapsedTime;
   timerInterval = setInterval(updateStopwatch, 1000);
   startButton.disabled = true;
   stopButton.disabled = false;
 }

 // Stop the stopwatch
 function stopStopwatch() {
   clearInterval(timerInterval);
   elapsedTime = Date.now() - startTime;
   startButton.disabled = false;
   stopButton.disabled = true;
 }

 // Reset the stopwatch
 function resetStopwatch() {
   clearInterval(timerInterval);
   elapsedTime = 0;
   stopwatchElement.textContent = "00:00:00";
   startButton.disabled = false;
   stopButton.disabled = true;
 }

 // Add event listeners to the buttons
 startButton.addEventListener("click", startStopwatch);
 stopButton.addEventListener("click", stopStopwatch);
 resetButton.addEventListener("click", resetStopwatch);