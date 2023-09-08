document.addEventListener("DOMContentLoaded", function () {
  // Get references to the HTML elements using data-testid attributes
  const slackName = document.querySelector('[data-testid="slackUserName"]');
  const slackDisplayImage = document.querySelector(
    '[data-testid="slackDisplayImage"]'
  );
  const currentDayOfWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const myTrack = document.querySelector('[data-testid="myTrack"]');
  const githubURL = document.querySelector('[data-testid="githubURL"]');

  // Function to update the current day of the week
  function updateDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    currentDayOfWeek.textContent = dayOfWeek;
  }

  // Function to update the current UTC time in milliseconds
  function updateUTCTime() {
    const currentTime = new Date();
    const hours = currentTime.getUTCHours().toString().padStart(2, "0");
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
    const milliseconds = currentTime
      .getUTCMilliseconds()
      .toString()
      .padStart(3, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    currentUTCTime.textContent = formattedTime;
  }

  // Call the functions to update the content
  updateDayOfWeek();
  updateUTCTime();

  // Set your Slack name and image
  slackName.textContent = "Slack Name: Hussein Yesufu";
  slackDisplayImage.src =
    "https://ca.slack-edge.com/T05FFAA91JP-U05RQE6L4BB-d902c24624d1-512";
  slackDisplayImage.alt = "Hussein";

  // Set your track
  myTrack.textContent = "Frontend";

  // Set your GitHub repository URL
  githubURL.href = "https://github.com/Hussein1710/slack-profile.git";
});
