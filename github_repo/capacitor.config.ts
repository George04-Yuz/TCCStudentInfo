import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tcc.sis',
  appName: 'Torres Capitol College SIS',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
