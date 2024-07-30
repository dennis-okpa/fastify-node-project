const PORT = process.env.PORT || 5000;

const server = require('./src/app')({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  },
});

server.listen({ port: PORT }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
