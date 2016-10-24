define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Youtube Player';
      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'views/video-search', title: 'Search' }, { route: 'video/:id', name: 'video', moduleId: 'views/video-player', title: 'Playing' }, { route: 'channel/:id', name: 'channel', moduleId: 'views/channel-player', title: 'Channel' }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('components/nav-bar',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NavBar = exports.NavBar = function NavBar() {
    _classCallCheck(this, NavBar);

    this.title = 'Youtube Player';
  };
});
define('components/search-bar',['exports', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SearchBar = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var SearchBar = exports.SearchBar = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = (_class2 = function () {
    function SearchBar(ea) {
      _classCallCheck(this, SearchBar);

      _initDefineProp(this, 'term', _descriptor, this);

      this.ea = ea;
    }

    SearchBar.prototype.onFormSubmit = function onFormSubmit() {
      this.ea.publish('searchTermChanged', { term: this.term });
    };

    return SearchBar;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'term', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('components/suggested-videos-list',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SuggestedVideosList = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var SuggestedVideosList = exports.SuggestedVideosList = (_class = function SuggestedVideosList() {
    _classCallCheck(this, SuggestedVideosList);

    _initDefineProp(this, 'videos', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'videos', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('components/suggested-videos',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SuggestedVideosList = exports.SuggestedVideosList = function SuggestedVideosList() {
    _classCallCheck(this, SuggestedVideosList);
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('views/channel-player',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ChannelView = exports.ChannelView = function ChannelView() {
    _classCallCheck(this, ChannelView);
  };
});
define('views/video-player',['exports', 'aurelia-framework', 'axios'], function (exports, _aureliaFramework, _axios) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.VideoPlayer = undefined;

  var axios = _interopRequireWildcard(_axios);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var API_KEY = 'AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc';
  var ROOT_URL = 'https://www.googleapis.com/youtube/v3/';

  var VideoPlayer = exports.VideoPlayer = (_dec = (0, _aureliaFramework.inject)(axios), _dec(_class = function () {
    function VideoPlayer(http) {
      _classCallCheck(this, VideoPlayer);

      this.state = {};
      this.http = http;
    }

    VideoPlayer.prototype.activate = function activate(params) {
      var _this = this;

      this.id = params.id;

      this.http.get(ROOT_URL + 'search', {
        params: {
          part: 'snippet',
          key: API_KEY,
          relatedToVideoId: this.id,
          type: 'video',
          maxResults: 10
        }
      }).then(function (response) {
        _this.state.suggestedVideos = response.data.items;
      }).then().catch(function (error) {});

      return this.http.get(ROOT_URL + 'videos', {
        params: {
          part: 'snippet,statistics',
          key: API_KEY,
          id: this.id,
          type: 'video'
        }
      }).then(function (response) {
        _this.state.selectedVideo = response.data.items[0];
        _this.isSearching = false;
      }).then().catch(function (error) {});
    };

    return VideoPlayer;
  }()) || _class);
});
define('views/video-search',['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'axios'], function (exports, _aureliaFramework, _aureliaEventAggregator, _axios) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.VideoSearch = undefined;

  var axios = _interopRequireWildcard(_axios);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var API_KEY = 'AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc';
  var ROOT_URL = 'https://www.googleapis.com/youtube/v3';

  var VideoSearch = exports.VideoSearch = (_dec = (0, _aureliaFramework.inject)(axios, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function VideoSearch(http, ea) {
      var _this = this;

      _classCallCheck(this, VideoSearch);

      this.state = {};
      this.http = http;
      this.ea = ea;

      this.subscriber = this.ea.subscribe('searchTermChanged', function (data) {
        _this.state.searchTerm = data.term || '';
        _this.search();
      });
    }

    VideoSearch.prototype.activate = function activate(params) {
      if (params.q) {
        this.state.searchTerm = params.q;
        return this.search();
      }

      return this.searchPopular();
    };

    VideoSearch.prototype.searchPopular = function searchPopular() {
      var _this2 = this;

      return this.http.get(ROOT_URL + '/videos', {
        params: {
          part: 'snippet,statistics',
          key: API_KEY,
          type: 'video',
          maxResults: 12,
          regionCode: 'CO',
          chart: 'mostPopular'
        }
      }).then(function (response) {
        _this2.state.popularVideos = response.data.items;
      }).then().catch(function (error) {});
    };

    VideoSearch.prototype.search = function search() {
      var _this3 = this;

      this.isSearching = true;
      history.pushState(null, null, '#?q=' + this.state.searchTerm);

      return this.http.get(ROOT_URL + '/search', {
        params: {
          part: 'snippet',
          key: API_KEY,
          q: this.state.searchTerm,
          type: 'video',
          maxResults: 15
        }
      }).then(function (response) {
        _this3.state.videos = response.data.items;
        _this3.isSearching = false;
      }).then().catch(function (error) {});
    };

    VideoSearch.prototype.detach = function detach() {
      this.subscriber.dispose();
    };

    return VideoSearch;
  }()) || _class);
});
define('resources/value-converters/NumberValueConverter',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NumberValueConverter = exports.NumberValueConverter = function () {
    function NumberValueConverter() {
      _classCallCheck(this, NumberValueConverter);

      this.defaultOptions = {
        locale: 'en-US',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      };
    }

    NumberValueConverter.prototype.toView = function toView(value) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (value) {
        return Number(value).toLocaleString(options.locale || this.defaultOptions.locale, {
          maximumFractionDigits: options.maximumFractionDigits || this.defaultOptions.maximumFractionDigits,
          minimumFractionDigits: options.minimumFractionDigits || this.defaultOptions.minimumFractionDigits
        });
      }
    };

    return NumberValueConverter;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./themes/default.css\"></require>\n  <require from=\"./components/nav-bar\"></require>\n  \n  <nav-bar></nav-bar>\n  <router-view></router-view>\n</template>\n"; });
define('text!themes/default.css', ['module'], function(module) { module.exports = "* {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif; }\n\nbody {\n  background-color: #F1F1F1;\n  color: #333; }\n\na {\n  color: #333; }\n\n.p-none {\n  padding: 0 !important; }\n\n.section {\n  background-color: white;\n  padding: 0.5em 1em;\n  border: 1px solid #e2e2e2;\n  margin-bottom: 2em; }\n  .section .section-title {\n    margin-top: 10px;\n    margin-bottom: 20px; }\n\n.navbar-default {\n  background-color: #cc181e;\n  color: white !important;\n  border-radius: 0; }\n  .navbar-default .navbar-brand {\n    padding: 0;\n    color: white;\n    font-size: 14px; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:active, .navbar-default .navbar-brand:visited {\n      color: white; }\n    .navbar-default .navbar-brand > img {\n      height: 100%;\n      padding: 5px;\n      width: auto;\n      margin-left: 10px;\n      display: inline-block; }\n\n.form-control {\n  border-radius: 0; }\n\n.btn {\n  border-radius: 0; }\n\n.thumbnail {\n  border: none; }\n"; });
define('text!components/nav-bar.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"http://www.isf.com.co/images/isf-logo.svg\" alt=\"ISF Logo\">\n          Player\n        </a>\n      </div>\n    </div>\n  </nav>\n</template>\n"; });
define('text!components/search-bar.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <form submit.delegate=\"onFormSubmit()\">\n     <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" value.bind=\"term\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">\n          Go\n        </button>\n      </span>\n    </div>\n    </form>\n  </div>\n</template>\n"; });
define('text!components/suggested-video.html', ['module'], function(module) { module.exports = "<template>\n  \n</template>\n"; });
define('text!components/suggested-videos-list.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"section\">\n    <h4 class=\"section-title\">Recommended Videos</h4>\n    <div class=\"row\" repeat.for=\"video of videos\" style=\"margin-bottom: 15px;\">\n      <a href.bind=\"'#/video/' + video.id.videoId\">\n        <div with.bind=\"video.snippet\">\n          <div class=\"col-md-4 col-sm-4 col-xs-4\">\n            <img class=\"img-responsive\" src.bind=\"thumbnails.high.url\" alt=\"\">\n          </div>\n          <div class=\"col-md-8 col-sm-8 col-xs-8 text-ellipsis\">\n            <strong class=\"\">${title}</strong>\n            <p>\n              <a target=\"_blank\" href.bind=\"'https://www.youtube.com/channel/' + channelId\">${channelTitle}</a>\n            </p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</template>\n"; });
define('text!components/videos-grid.html', ['module'], function(module) { module.exports = "<template bindable=\"videos\">\n  <require from=\"../resources/value-converters/NumberValueConverter\"></require>\n\n  <style>\n    .text-ellipsis {\n      text-overflow: ellipsis; \n      display: block; \n      overflow: hidden; \n      position: relative; \n      white-space: normal; \n      word-wrap: break-word;\n    }\n  </style>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-4 col-xs-6\" repeat.for=\"video of videos\">\n      <a href.bind=\"'#/video/' + video.id\">\n      <div class=\"thumbnail\" with.bind=\"video.snippet\"> \n        <img src.bind=\"thumbnails.high.url\" class=\"img-responsive\"> \n        <div class=\"caption\"> \n          <strong style=\"height: 3em;\" class=\"text-ellipsis\">${title}</strong>\n          <p class=\"text-ellipsis\" style=\"height: 1.5em;\">\n              <a target=\"_blank\" href.bind=\"'https://www.youtube.com/channel/' + channelId\">${channelTitle}</a>\n          </p>\n          <span class=\"text-muted\">${video.statistics.viewCount | number} views</span>\n        </div> \n      </div>\n      </a>\n    </div>\n  </div>\n</template>\n"; });
define('text!components/videos-panel.html', ['module'], function(module) { module.exports = "<template bindable=\"term, videos\">\n  <div class=\"section\">\n    <h4 class=\"section-title\">Results for <span show.bind=\"term\">- ${term}</span></h4>\n\n    <div class=\"panel\" repeat.for=\"video of videos\">\n      <a href.bind=\"'#/video/' + video.id.videoId\">\n        <div with.bind=\"video.snippet\" class=\"panel-body\">\n          <div class=\"col-md-4 col-sm-4 col-xs-4\">\n            <img class=\"img-responsive\" src.bind=\"thumbnails.high.url\" alt=\"\">\n          </div>\n          <div class=\"col-md-8 col-sm-8 col-xs-8\">\n            <span class=\"h4\">${title}</span>\n            <p>\n              <a target=\"_blank\" href.bind=\"'https://www.youtube.com/channel/' + channelId\">${channelTitle}</a>\n            </p>          \n            <p class=\"text-muted\">${description}</p>\n          </div>\n        </div>\n      </a>\n  </div>\n</template>\n"; });
define('text!views/channel-player.html', ['module'], function(module) { module.exports = "<template></template>\n"; });
define('text!views/video-player.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../components/suggested-videos-list\"></require>\n  <require from=\"../resources/value-converters/NumberValueConverter\"></require>\n\n  <div class=\"container\">\n    <div class=\"\">\n      <div class=\"col-md-8\">\n        <div>\n          <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe className=\"embed-responsive-item\" src.bind=\"'https://www.youtube.com/embed/' + id\"></iframe>\n          </div>\n        </div>\n        <br />\n        <div with.bind=\"state.selectedVideo.snippet\" class=\"video-detail section\">\n          <h3>${title}</h3>\n          <a target=\"_blank\" href.bind=\"'https://www.youtube.com/channel/' + channelId\"><h4>${channelTitle}</h4></a>\n          <span class=\"text-muted\">${state.selectedVideo.statistics.viewCount | number} views</span>\n          <br>\n          <br>\n          <p class=\"text-muted\" style=\"white-space: pre-line;\">${description}</p>\n          <br>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <suggested-videos-list videos.bind=\"state.suggestedVideos\"></suggested-videos-list>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!views/video-search.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../components/search-bar\"></require>\n  <require from=\"../components/videos-panel.html\"></require>\n  <require from=\"../components/videos-grid.html\"></require>\n  <require from=\"../themes/default.css\"></require>\n\n  <div class=\"container\">\n    <search-bar term.bind=\"state.searchTerm\">\n    </search-bar>\n    \n    <br>\n    <h3 show.bind=\"isSearching\">Loading</h3>\n\n    <div class=\"section\" if.bind=\"!state.videos && !isSearching\" >\n      <h4 class=\"section-title\">Popular Videos</h4>\n      <videos-grid videos.bind=\"state.popularVideos\"></videos-grid>\n    </div>\n\n    <videos-panel show.bind=\"state.videos && !isSearching\" \n      term.one-way=\"state.searchTerm\" \n      videos.bind=\"state.videos\">\n    </videos-panel>\n  </div>    \n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map