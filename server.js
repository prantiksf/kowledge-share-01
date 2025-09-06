const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main demo page (exact Figma recreation)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'exact-figma.html'));
});

// Route for the original demo page
app.get('/original', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the previous attempt
app.get('/demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo.html'));
});

// API endpoint to get project info
app.get('/api/info', (req, res) => {
    res.json({
        name: 'Kowledge Share 01 - Slack Demo',
        description: 'Figma to Code Demo - Pixel Perfect Slack Desktop App Recreation',
        version: '1.0.0',
        features: [
            'React Components',
            'Tailwind CSS Styling',
            'Pixel Perfect Design',
            'Figma Asset Integration',
            'Interactive Demo'
        ],
        repository: 'https://github.com/prantiksf/kowledge-share-01',
        demo: 'https://kowledge-share-slack-demo-726bae97a00d.herokuapp.com/'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Handle 404s
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Slack Demo Server running on port ${PORT}`);
    console.log(`📱 Demo available at: http://localhost:${PORT}`);
    console.log(`🎨 Figma to Code Demo - Pixel Perfect Recreation`);
});
