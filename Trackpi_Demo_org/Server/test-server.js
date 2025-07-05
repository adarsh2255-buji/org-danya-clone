import express from 'express';

const app = express();
const PORT = 5001;

// Test route
app.get('/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'Test server is working!' });
});

// Google auth test route
app.get('/auth/google', (req, res) => {
  console.log('Google auth route hit');
  res.json({ message: 'Google auth route is working!' });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
}); 