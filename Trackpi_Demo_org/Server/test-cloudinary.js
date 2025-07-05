import cloudinary from './config/cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Testing Cloudinary Configuration...\n');

// Check if environment variables are set
console.log('Environment Variables:');
console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME ? '✅ SET' : '❌ NOT SET');
console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY ? '✅ SET' : '❌ NOT SET');
console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? '✅ SET' : '❌ NOT SET');

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.log('\n❌ Missing Cloudinary environment variables!');
  console.log('Please check your .env file and ensure all Cloudinary credentials are set.');
  process.exit(1);
}

// Test Cloudinary connection
async function testCloudinaryConnection() {
  try {
    console.log('\n🔗 Testing Cloudinary connection...');
    
    // Try to get account info (this will verify credentials)
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary connection successful!');
    console.log('Response:', result);
    
    // Test upload folder creation
    console.log('\n📁 Testing upload folder access...');
    const folderResult = await cloudinary.api.root_folders();
    console.log('✅ Folder access successful!');
    console.log('Available folders:', folderResult.folders?.length || 0);
    
    console.log('\n🎉 Cloudinary configuration is working perfectly!');
    console.log('You can now use video uploads in your application.');
    
  } catch (error) {
    console.log('\n❌ Cloudinary connection failed!');
    console.log('Error:', error.message);
    console.log('\nPlease check:');
    console.log('1. Your Cloudinary credentials are correct');
    console.log('2. Your internet connection is working');
    console.log('3. Your Cloudinary account is active');
  }
}

testCloudinaryConnection(); 