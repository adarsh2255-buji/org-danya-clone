import cloudinary from '../config/cloudinary.js';

export const getCloudinaryVideoDuration = async (cloudinaryId) => {
  try {
    const result = await cloudinary.api.resource(cloudinaryId, { resource_type: 'video' });
    return result.duration || 0;
  } catch (error) {
    console.error('Error getting video duration from Cloudinary:', error);
    return 0;
  }
};

export const getCloudinaryVideoInfo = async (cloudinaryId) => {
  try {
    const result = await cloudinary.api.resource(cloudinaryId, { resource_type: 'video' });
    return {
      duration: result.duration || 0,
      width: result.width || 0,
      height: result.height || 0,
      format: result.format || '',
      size: result.bytes || 0,
      url: result.secure_url || result.url || '',
    };
  } catch (error) {
    console.error('Error getting video info from Cloudinary:', error);
    return null;
  }
}; 