console.log("Connected");
// Function to calculate No-Decompression Limit (NDL) in minutes
function calculateNDL(depth) {
  // Depth in meters and their matching NDLs in minutes
  const depthLimits = [10, 12, 14, 16, 18, 20, 22, 25, 30, 35, 40, 42]; // depth limits
  const ndlValues = [219, 147, 98, 72, 56, 45, 37, 29, 20, 14, 9, 8]; // matching NDLs

  // Find the appropriate depth limit and matching NDL
  for (let i = 0; i < depthLimits.length; i++) {
    if (depth <= depthLimits[i]) {
      return ndlValues[i];
    }
  }
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Stop refreshing

  // Get depth value from the form
  const depth = parseInt(document.getElementById("depth").value);
  //ParseInt to make sure its a number

  if (isNaN(depth) || depth <= 0) {
    document.getElementById("result").textContent =
      "Please enter a valid depth.";
    return;
  }

  // Calculate NDL
  const ndl = calculateNDL(depth);

  // Display result
  if (ndl > 0) {
    document.getElementById(
      "result"
    ).textContent = `No-Decompression Limit (NDL): ${ndl} minutes at ${depth} meters.`;
  } else {
    document.getElementById(
      "result"
    ).textContent = `Recreational diving recommended depth limits are 40m.`;
  }
}

document
  .getElementById("divePlannerForm")
  .addEventListener("submit", handleSubmit);

console.log(calculateNDL);
