import { Config } from 'remotion';

Config.Rendering.setImageFormat('png');
Config.Rendering.setCrf(18);
Config.Rendering.setPixelFormat('yuv420p');
Config.Rendering.setCodec('h264');
Config.Rendering.setProResProfile('hq');
Config.Rendering.setNumberOfGifLoops(null);
Config.Rendering.setQuality('high');
Config.Rendering.setChromiumDisableParallelRendering(false);
Config.Rendering.setAudioCodec('aac');
Config.Rendering.setAudioBitrate('192k');
Config.Rendering.setVideoBitrate('8M');

Config.Log.setLevel('info');
Config.Log.enableFfmpeg();
