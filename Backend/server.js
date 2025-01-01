import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const data = {
  settings: [
    { label: 'Region', value: 'europe - de' },
    { label: 'punkbuster', value: 'on' },
    { label: 'fairfight', value: 'on' },
    { label: 'password', value: 'off' },
    { label: 'preset', value: 'normal' },
  ],
  advanced: [
    { label: 'minimap', value: 'on' },
    { label: 'only squad leader spawn', value: 'off' },
    { label: 'vehicles', value: 'on' },
    { label: 'team balance', value: 'on' },
    { label: 'minimap spotting', value: 'on' },
    { label: 'hud', value: 'on' },
    { label: '3p vehicle cam', value: 'on' },
    { label: 'regenerative health', value: 'on' },
    { label: 'kill cam', value: 'on' },
    { label: 'friendly fire', value: 'off' },
    { label: '3d spotting', value: 'on' },
    { label: 'enemy name tags', value: 'on' },
  ],
  rules: [
    { label: 'tickets', value: '400' },
    { label: 'vehicle spawn delay', value: '25' },
    { label: 'bullet damage', value: '100' },
    { label: 'kick after team kills', value: '5' },
    { label: 'player health', value: '100' },
    { label: 'player respawn time', value: '100' },
    { label: 'kick after idle', value: '300' },
    { label: 'ban after kicks', value: '3' },
  ],
};

// Endpoints
app.get('/api/settings', (req, res) => res.json(data.settings));
app.get('/api/advanced', (req, res) => res.json(data.advanced));
app.get('/api/rules', (req, res) => res.json(data.rules));


const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
