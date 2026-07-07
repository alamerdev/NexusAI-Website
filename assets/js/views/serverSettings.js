const FAKE_SETTINGS = {
  '1': {
    language: 'Deutsch',
    channel: '#nexusai-chat',
    personality: 'Du bist NexusAI, ein freundlicher, moderner Chat-AI-Bot.',
    groqKey: '••••••••••••'
  },
  '2': {
    language: 'English',
    channel: '#ai-bot',
    personality: 'You are NexusAI, a helpful and playful AI assistant.',
    groqKey: '••••••••••••'
  }
};

export function viewServerSettings(app, id) {
  const settings = FAKE_SETTINGS[id];

  if (!settings) {
    app.innerHTML = `
      <div class="hero">
        <h1>Server nicht gefunden</h1>
        <p>Für diese ID gibt es keine NexusAI-Einstellungen.</p>
        <a href="#/servers" class="btn">Zurück zur Serverliste</a>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="hero">
      <h1>NexusAI Einstellungen – Server ${id}</h1>

      <div class="settings-panel">
        <h2>Sprache</h2>
        <p>${settings.language}</p>

        <h2>AI-Channel</h2>
        <p>${settings.channel}</p>

        <h2>Personality</h2>
        <p>${settings.personality}</p>

        <h2>Groq API Key</h2>
        <p>${settings.groqKey}</p>
      </div>

      <div style="margin-top:40px;">
        <a href="#/servers" class="btn">Zurück zur Serverliste</a>
        <a href="#/" class="btn">Zur Startseite</a>
      </div>
    </div>
  `;
}
