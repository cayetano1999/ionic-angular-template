import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.infordapp',
  appName: 'Info RD',
  webDir: 'www',
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: false,
    
  },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None 
    
    }
  },

  server: {
    cleartext: true,
    allowNavigation: ['35.202.111.227'],
  },
};

export default config;
