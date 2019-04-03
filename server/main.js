'use strict';

const Hapi = require('hapi');
var exec = require('child_process').exec;
const server = new Hapi.Server();
const args = require('minimist')(process.argv.slice(2));
const options = {
    port: args.p || 8080
}
process.env.NODE_ENV = args.e || 'LOCAL';

server.connection(options);

// declare the routes
server.route({
    method: 'POST',
    path: '/createLocalDB',
    config: {
        cors: true
    },
    handler: (request, reply) => {
        var processCmd = 'node ./server/create-db.js',
        successReplyMsg = 'DB request received',
        failureReplyMsg = 'Invalid request, Missing parameters!';
        exec(`${processCmd}`, function (error, stdout, stderr) {
            if (error) {
                console.log('Something went wrong..' + error);
            }
            if (stderr) {
                console.log('child process threw some error..' + stderr);
            }
            console.log(stdout);
        });
        reply(successReplyMsg);
    }
});

server.route({
    method: 'POST',
    path: '/getFormula',
    config: {
        cors: true
    },
    handler: (request, reply) => {
        var processCmd = 'node ./server/get-formula.js',
        payload = request.payload,
        successReplyMsg = 'DB request received',
        failureReplyMsg = 'Invalid request, Missing parameters!';
        exec(`${processCmd} ${payload.height}`, function (error, stdout, stderr) {
            if (error) {
                console.log('Something went wrong..' + error);
            }
            if (stderr) {
                console.log('child process threw some error..' + stderr);
            }
            console.log(stdout);
            reply(stdout);
        });
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
