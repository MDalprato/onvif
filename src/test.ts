import { Onvif, Discovery } from './index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serverMockup = require('../test/serverMockup');

(async () => {
  const cam = new Onvif({
    hostname : 'localhost',
    username : 'admin',
    password : '9999',
    port     : 10101,
  });

  // cam.on('rawResponse', console.log);
  // cam.on('rawRequest', console.log);
  await cam.connect();
  const profiles = await cam.media.getProfiles();
  console.log((await cam.device.getDeviceInformation()).firmwareVersion);
  // console.log(profiles);
  // Discovery.on('device', console.log);
  // const cams = await Discovery.probe({ timeout : 1000 });
  // console.log(cams);
  serverMockup.close();
})().catch(console.error);
