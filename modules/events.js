const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

setTimeout(() => eventEmitter.emit("start", 1, 100), 2000);
