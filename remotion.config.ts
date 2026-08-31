import { Config } from '@remotion/cli/config';

// Video rendering configuration
Config.setVideoImageFormat('jpeg');
Config.setCrf(18);
Config.setPixelFormat('yuv420p');
Config.setCodec('h264');
Config.setAudioCodec('aac');
Config.setAudioBitrate('192k');
Config.setVideoBitrate('8M');
