export function viewHome(app) {
  app.innerHTML = `
    <div class="hero">
      <h1>NexusAI – Your Chat AI Bot</h1>
      <p>Willkommen auf deiner NexusAI-Webseite!</p>

      <div class="buttons">
        <a href="#/login" class="btn discord">Login with Discord</a>
        <a href="#" class="btn invite">INVITE NEXUS AI!</a>
      </div>

      <div style="margin-top:50px; opacity:0.7;">
        <a href="#/servers" class="btn">Zu deinen Servern</a>
      </div>
    </div>
  `;
}
