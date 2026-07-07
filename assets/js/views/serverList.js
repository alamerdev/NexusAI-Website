const FAKE_SERVERS = [
  { id: '1', name: 'NexusAI HQ', hasNexusAI: true, isAdmin: true },
  { id: '2', name: 'Community Server', hasNexusAI: true, isAdmin: true },
  { id: '3', name: 'Random Server', hasNexusAI: false, isAdmin: true }
];

export function viewServerList(app) {
  const servers = FAKE_SERVERS.filter(s => s.hasNexusAI && s.isAdmin);

  app.innerHTML = `
    <div class="hero">
      <h1>Deine NexusAI-Server</h1>
      <p>Nur Server, auf denen NexusAI installiert ist und du Admin bist.</p>

      <div class="server-grid">
        ${servers.map(s => `
          <div class="server-card">
            <h2>${s.name}</h2>
            <p>NexusAI aktiv</p>
            <a href="#/server/${s.id}" class="btn">Dashboard öffnen</a>
          </div>
        `).join('')}
      </div>

      <div style="margin-top:40px;">
        <a href="#/" class="btn">Zurück zur Startseite</a>
      </div>
    </div>
  `;
}
