const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

const clientRoutes = require('./routes/clientRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const jobRoutes = require('./routes/jobRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// For resumes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/clients', clientRoutes);    // http://localhost:4000/api/clients/
app.use('/api/candidates', candidateRoutes); // http://localhost:4000/api/candidates/
app.use('/api/jobs', jobRoutes);          // http://localhost:4000/api/jobs/

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
