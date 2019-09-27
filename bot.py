API_TOKEN = "YOUR_APITOKEN"
DEFAULT_REPLY = "I'm testing Bot for Pixnet."

from slackbot import bot
from slackbot.bot import Bot

from slackbot.bot import respond_to
from slackbot.bot import listen_to
import re

bot.settings.API_TOKEN = API_TOKEN;
bot.settings.DEFAULT_REPLY = DEFAULT_REPLY;

def main():
    bot = Bot()
    bot.run()

if __name__ == "__main__":
    main()

@respond_to('hi', re.IGNORECASE)
def hi(message):
    message.reply('I can understand hi or HI!')
    # react with thumb up emoji
    message.react('+1')


@default_reply(r'hello.*)')
def my_default_handler(message):
    message.reply("HAHAHAHA")