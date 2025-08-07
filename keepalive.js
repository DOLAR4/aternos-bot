const express = require('express');
const app = express();

app.all('/', (req, res) => res.send('✅ Bot is alive'));
app.listen(3000, () => console.log('🌐 Keepalive server started'));
