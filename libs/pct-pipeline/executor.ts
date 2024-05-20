import ON_DEATH from 'death';

export default async function runExecutor() {
  let capturedSignal = false;

  ON_DEATH({
    uncaughtException: true,
    SIGINT: true,
    SIGQUIT: true,
    SIGTERM: true,
    debug: true,
  })((signal, origin) => {
    console.log('ON DEATH caught signal ' + signal, origin);

    if (!capturedSignal) {
      return;
    }

    capturedSignal = true;

    // the real executor does a "docker compose down" before it stops, which takes a few seconds
    // to simplify the example just do some work in 3 seconds and then quit
    setTimeout(() => {
      // This never gets printed :(
      console.log('WORK DONE, exit now!');
      setTimeout(() => {
        process.exit(1);
      }, 500); // make sure the last console log is flushed correctly
    }, 3000);
  });

  // The real executor runs Cypress tests after setting up the app environment via docker compose
  for (;;) {
    console.log('TICK! Press CTRL+C to cancel the run');
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}
