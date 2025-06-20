export const getVimeoDuration = async (videoId) => {
  const vimeoUrl = `https://vimeo.com/${videoId}`;
  const oembedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}`;

  try {
    const response = await fetch(oembedUrl);
    if (!response.ok) throw new Error('Failed to fetch Vimeo oEmbed');
    const data = await response.json();
    return data.duration || 0;
  } catch (error) {
    console.error(`Error fetching duration for Vimeo video ${videoId}:`, error.message);
    return 0;
  }
};
