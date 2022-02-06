import { app } from 'electron';
import Runtime, { winService } from '@modern-js/runtime/electron-main';
import * as services from './services';

const runtime = new Runtime({
  windowsConfig: [
    {
      name: 'main',
    },
  ],
  mainServices: {
    mainServices: services,
  },
});

app.whenReady().then(async () => {
  await runtime.init();

  winService.createWindow({
    name: 'main',
  });
});
