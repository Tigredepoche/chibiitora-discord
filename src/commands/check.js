const { Command, Client } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Check your current level.' });
    }

    run(message) {
    console.log(Client.defaultGuildSchema)
    }

};