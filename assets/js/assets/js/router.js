import { viewHome } from './views/home.js';
import { viewLogin } from './views/login.js';
import { viewServerList } from './views/serverList.js';
import { viewServerSettings } from './views/serverSettings.js';

export function router() {
  const app = document.getElementById('app');
  const hash = window.location.hash || '#/';

  if (hash === '#/' || hash === '') return viewHome(app);
  if (hash === '#/login') return viewLogin(app);
  if (hash === '#/servers') return viewServerList(app);

  if (hash.startsWith('#/server/')) {
    const id = hash.split('/')[2];
    return viewServerSettings(app, id);
  }

  // Fallback
  viewHome(app);
}
