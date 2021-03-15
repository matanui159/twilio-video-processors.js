import { BackgroundProcessor, BackgroundProcessorOptions } from './processors/background/BackgroundProcessor';
import { GaussianBlurBackgroundProcessor, GaussianBlurBackgroundProcessorOptions } from './processors/background/GaussianBlurBackgroundProcessor';
import { VirtualBackgroundProcessor, VirtualBackgroundProcessorOptions } from './processors/background/VirtualBackgroundProcessor';
import { GrayscaleProcessor } from './processors/grayscale';
import { Processor } from './processors/Processor';
import { ImageFit, Resolution } from './types';
/**
 * @private
 */
declare global {
    interface Window {
        Twilio: Object & {
            VideoProcessors?: any;
        };
    }
}
export { BackgroundProcessor, BackgroundProcessorOptions, GaussianBlurBackgroundProcessor, GaussianBlurBackgroundProcessorOptions, GrayscaleProcessor, ImageFit, Processor, Resolution, VirtualBackgroundProcessor, VirtualBackgroundProcessorOptions, };
