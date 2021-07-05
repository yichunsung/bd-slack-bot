const { createEventAdapter } = require('@slack/events-api');

// Read the signing secret from the environment variables
const slackSigningSecret = '7929510bc7b158f0b2ae629c6fab8691';

// Initialize
const slackEvents = createEventAdapter(slackSigningSecret);

// Read the port from the environment variables, fallback to 3000 default.
const port = process.env.PORT || 9090;

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event) => {
  console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});

(async () => {
  const server = await slackEvents.start(port);
  console.log(`Listening for events on ${server.address().port}`);
})();