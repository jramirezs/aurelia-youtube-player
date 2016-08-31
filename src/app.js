export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Youtube Player';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'views/video-search', title: 'Search' },
      { route: 'video/:id', name: 'video', moduleId: 'views/video-player', title: 'Playing' },
      { route: 'channel/:id', name: 'channel', moduleId: 'views/channel-player', title: 'Channel' }
    ]);
  }
}
