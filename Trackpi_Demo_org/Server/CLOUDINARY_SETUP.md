# Cloudinary Video Upload Setup

This guide explains how to set up Cloudinary for video uploads in your course management system.

## Prerequisites

1. A Cloudinary account (sign up at https://cloudinary.com/)
2. Node.js and npm installed
3. Your existing project setup

## Setup Instructions

### 1. Install Dependencies

The required packages are already installed:
- `cloudinary` - Main Cloudinary SDK
- `multer-storage-cloudinary` - Multer storage engine for Cloudinary

### 2. Environment Variables

Create a `.env` file in the `Server` directory with your Cloudinary credentials:

```env
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Other existing environment variables
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 3. Get Cloudinary Credentials

1. Log in to your Cloudinary dashboard
2. Go to the "Dashboard" section
3. Copy your:
   - Cloud Name
   - API Key
   - API Secret

### 4. Features Implemented

#### Backend Features:
- ✅ Video upload to Cloudinary
- ✅ Automatic video duration extraction
- ✅ Video format validation (MP4, AVI, MOV, WMV, FLV, WebM, MKV)
- ✅ File size limit (100MB per video)
- ✅ Video deletion from Cloudinary when course section is deleted
- ✅ Multiple video upload support (up to 10 videos per course section)

#### Frontend Features:
- ✅ Course section creation form with video upload
- ✅ Course section listing with video playback
- ✅ Video duration display
- ✅ File size validation
- ✅ Progress feedback

### 5. API Endpoints

#### Create Course Section with Videos
```
POST /admin/course-section
Content-Type: multipart/form-data

Body:
- courseTitle: string
- courseDescription: string
- courseDuration: number (minutes)
- videos: array of video files
- videos: JSON string with video metadata
```

#### Get All Course Sections
```
GET /admin/course-sections
```

#### Get Course Section by ID
```
GET /admin/course-section/:id
```

#### Update Course Section
```
PUT /admin/course-section/:id
Content-Type: multipart/form-data

Body: Same as create
```

#### Delete Course Section
```
DELETE /admin/course-section/:id
```

### 6. Usage Examples

#### Frontend Component Usage

```jsx
import CourseSectionForm from './Pages/CourseSectionForm';
import CourseSectionList from './Pages/CourseSectionList';

// In your app
<CourseSectionForm />
<CourseSectionList />
```

#### Backend Usage

The system automatically:
- Uploads videos to Cloudinary
- Extracts video duration
- Stores Cloudinary URLs and IDs
- Handles video deletion when course sections are removed

### 7. Video Storage

Videos are stored in Cloudinary with:
- Folder: `course-videos`
- Automatic format optimization
- Quality optimization
- Resolution scaling (1280x720)

### 8. Error Handling

The system includes comprehensive error handling for:
- Invalid file formats
- File size limits
- Upload failures
- Cloudinary API errors
- Database errors

### 9. Security Features

- File type validation
- File size limits
- Secure Cloudinary URLs
- Environment variable protection

### 10. Testing

To test the implementation:

1. Start your server: `npm start`
2. Navigate to the course section form
3. Upload video files
4. Check the course section list to see uploaded videos
5. Verify videos play correctly

### 11. Troubleshooting

#### Common Issues:

1. **"Cloudinary not configured" error**
   - Check your `.env` file has correct credentials
   - Restart the server after adding environment variables

2. **"File too large" error**
   - Reduce video file size (max 100MB)
   - Compress video before upload

3. **"Invalid file type" error**
   - Ensure video is in supported format
   - Check file extension matches actual format

4. **Videos not playing**
   - Check Cloudinary URL is accessible
   - Verify video format is web-compatible

### 12. Performance Optimization

- Videos are automatically optimized by Cloudinary
- Thumbnails are generated automatically
- CDN delivery for fast loading
- Adaptive quality based on device

### 13. Cost Considerations

- Cloudinary has a free tier with limits
- Monitor your usage in Cloudinary dashboard
- Consider upgrading for higher limits

### 14. Next Steps

Consider implementing:
- Video progress tracking
- Video quality selection
- Bulk video operations
- Video analytics
- Custom video player 