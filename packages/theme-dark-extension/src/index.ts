

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';



const plugin: JupyterLabPlugin<void> = {
  id: 'theme-dark-extension',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'JupyterLab Dark',
      load: function() {
        return manager.loadCSS('./lab/api/themes/jupyterlab-theme-dark-extension/style/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
