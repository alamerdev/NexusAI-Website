export function viewLogin(app) {
  app.innerHTML = `
    <div class="hero">
      <h1>Login mit Discord</h1>
      <p>Hier kommt später der echte Discord-Login über den Worker.</p>

      <div class="buttons">
        <a href="#/servers" class="btn discord">Fake-Login → Server anzeigen</a>
        <a href="#/" class="btn">Zurück zur Startseite</a>
      </div>
    </div>
  `;
}
