# Crankscript blank template

This is a simple template for a Crankscript project.

## Quick start

Install dependencies:

```bash
npm install
```

Build and run the simulator:

```bash
npm run simulator
```

Optionally use the `--watch` flag to automatically rebuild and restart the simulator when files change:

```bash
npm run simulator -- --watch
```

When the `--background` flag is used, the simulator will not be brought to the foreground (note that this is only supported on MacOS):

```bash
npm run simulator -- --watch --background
```