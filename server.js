const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main demo page (simple HTML topbar)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'simple-topbar.html'));
});

// Route for the original demo page
app.get('/original', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the previous attempt
app.get('/demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo.html'));
});

// Route for the previous exact figma attempt
app.get('/exact-figma', (req, res) => {
    res.sendFile(path.join(__dirname, 'exact-figma.html'));
});

// Route for the pixel perfect attempt
app.get('/pixel-perfect', (req, res) => {
    res.sendFile(path.join(__dirname, 'pixel-perfect-figma.html'));
});

// API endpoint to get project info
app.get('/api/info', (req, res) => {
    res.json({
        name: 'Top Bar Component',
        version: '1.0.0'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Handle 404s
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'simple-topbar.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
