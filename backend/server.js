const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

const clientRoutes = require('./routes/clientRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const jobRoutes = require('./routes/jobRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Health check route for Render
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Hireverse API is running');
});

// For resumes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/clients', clientRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/jobs', jobRoutes);

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
