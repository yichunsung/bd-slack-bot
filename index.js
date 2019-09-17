let SlackBot = require("slackbots");
let channel = "general";
let iconUrl = 'https://firebasestorage.googleapis.com/v0/b/ycsung-studio.appspot.com/o/appleIcon180.png?alt=media&token=038b9083-25bd-4133-af3e-6f0d9c5ddd46';
let bot = new SlackBot({
    token: "xoxb-389597258145-764400409831-dF1F50IiPhidkozT9wURIEFy",
    name: "bd-helper",
    as_user: true
});

bot.on("start", function() {
	let params = {
        //icon_emoji: ':cat:'
        icon_url: iconUrl
    };
    bot.postMessageToChannel(channel, "Hello world!", params);
    console.log("Hello world!");
});

bot.on("message", function(data) {
    if (data.type !== "message") {
        return;
    }

    handleMessage(data.text);
});

function handleMessage(message) {
    switch(message) {
        case "hi":
        case "hello":
            sendGreeting();
            break;
        default:
            return;
    }
}
function sendGreeting() {
    var greeting = getGreeting();
    let params = {
        //icon_emoji: ':cat:'
        icon_url: iconUrl
    };
    bot.postMessageToChannel(channel, greeting, params);
}

function getGreeting() {
    var greetings = [
        "hello!",
        "hi there!",
        "cheerio!",
        "how do you do!",
        "¡hola!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}
	