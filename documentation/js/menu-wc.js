'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tutorial_nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' : 'data-bs-target="#xs-controllers-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' :
                                            'id="xs-controllers-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' :
                                        'id="xs-injectables-links-module-AppModule-74da053dc3e6c4922e2fe997d380209803f994a03d04c319888c634909f8d0acdcec835a7c4a8e9e28eb97ee2ee036fc30c5fd75e4dba3a57103939620a1be7d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CommonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SingletonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingletonService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AudioModule.html" data-type="entity-link" >AudioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' : 'data-bs-target="#xs-controllers-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' :
                                            'id="xs-controllers-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' }>
                                            <li class="link">
                                                <a href="controllers/AudioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' : 'data-bs-target="#xs-injectables-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' :
                                        'id="xs-injectables-links-module-AudioModule-014db993a64765e4c9c34d76facca5abd7a4b70dd46003e642f9421db1e26ebd30bb8fd19c5605f2b79f5f80ddc29dec857de1bacb1e44d24053e49ba61f0d07"' }>
                                        <li class="link">
                                            <a href="injectables/AudioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' :
                                            'id="xs-controllers-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' :
                                        'id="xs-injectables-links-module-AuthModule-cc002c2aa6a14e76954a9fdc3f49b7fa6fdc1beb4739cdcd261d82ad8bfcda2c2bf5577768322827f6f2346cbe3f96ce7aa788b0ec1a78a748ff2b8acab5949b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CatsModule-5297a0d40aa2e78340f8695577a0559e55df55620ae86cf525f13fc0672d4baf60fc08c47233da64559d2841b0311f91f90290b9d2f7dc73c18bd8859f470b37"' : 'data-bs-target="#xs-controllers-links-module-CatsModule-5297a0d40aa2e78340f8695577a0559e55df55620ae86cf525f13fc0672d4baf60fc08c47233da64559d2841b0311f91f90290b9d2f7dc73c18bd8859f470b37"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-5297a0d40aa2e78340f8695577a0559e55df55620ae86cf525f13fc0672d4baf60fc08c47233da64559d2841b0311f91f90290b9d2f7dc73c18bd8859f470b37"' :
                                            'id="xs-controllers-links-module-CatsModule-5297a0d40aa2e78340f8695577a0559e55df55620ae86cf525f13fc0672d4baf60fc08c47233da64559d2841b0311f91f90290b9d2f7dc73c18bd8859f470b37"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CircularModule.html" data-type="entity-link" >CircularModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' : 'data-bs-target="#xs-controllers-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' :
                                            'id="xs-controllers-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' }>
                                            <li class="link">
                                                <a href="controllers/CircularController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CircularController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' : 'data-bs-target="#xs-injectables-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' :
                                        'id="xs-injectables-links-module-CircularModule-cf0c1b42721c5ab220eb205178cd9c1cb28ea9142c04b289a59d96072e6cdf8c09c0b848e4da462187ff22bdaee6db6d11db812181285b346bbf762791685e4c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthServiceForWardRef.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthServiceForWardRef</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LazyLoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LazyLoaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResolveService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResolveService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RetrievingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RetrievingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShareService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShareService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserServiceForwardRef.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserServiceForwardRef</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' :
                                            'id="xs-controllers-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' :
                                        'id="xs-injectables-links-module-OrdersModule-352065f2f6346733dc5f9769661d9e7b70a34bd452de6d3de57ec947daa1ae5fbf6ee1eda0ad8bbdfe2db51c632020a1122d6604bdcaaab521c3088d51016116"' }>
                                        <li class="link">
                                            <a href="injectables/OrderCreatedListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderCreatedListener</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PhotoModule.html" data-type="entity-link" >PhotoModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PhotoModule-986f1fde243f262ac60fb1991fce9a4efbd56cad0817557224bdc6eb17b7b20a76b43d3dd7d3e0975e338af6b66cb1d9446645d98e3ff6d06bfe30cbcc764895"' : 'data-bs-target="#xs-injectables-links-module-PhotoModule-986f1fde243f262ac60fb1991fce9a4efbd56cad0817557224bdc6eb17b7b20a76b43d3dd7d3e0975e338af6b66cb1d9446645d98e3ff6d06bfe30cbcc764895"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PhotoModule-986f1fde243f262ac60fb1991fce9a4efbd56cad0817557224bdc6eb17b7b20a76b43d3dd7d3e0975e338af6b66cb1d9446645d98e3ff6d06bfe30cbcc764895"' :
                                        'id="xs-injectables-links-module-PhotoModule-986f1fde243f262ac60fb1991fce9a4efbd56cad0817557224bdc6eb17b7b20a76b43d3dd7d3e0975e338af6b66cb1d9446645d98e3ff6d06bfe30cbcc764895"' }>
                                        <li class="link">
                                            <a href="injectables/PhotoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhotoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScopeModule.html" data-type="entity-link" >ScopeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' : 'data-bs-target="#xs-controllers-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' :
                                            'id="xs-controllers-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' }>
                                            <li class="link">
                                                <a href="controllers/ScopeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScopeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' : 'data-bs-target="#xs-injectables-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' :
                                        'id="xs-injectables-links-module-ScopeModule-7a2ea198279f5623b51451690ae5b3bf7b902ed5ca49afebfdb55f47656eee275b9f9da78d6d737944866a61792783cc7679ccf14fce36417824bed0fa68763d"' }>
                                        <li class="link">
                                            <a href="injectables/RequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SingletonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingletonService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeeModule.html" data-type="entity-link" >SeeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SeeModule-67facd5e756b4a9d4db57d072fae71b83bf50558c14b025039ba2e3e04b2ae0354de2a69a32013939ec2df27af68c2fe4e13347b706fa1d518efc4dd6bd8cf3e"' : 'data-bs-target="#xs-controllers-links-module-SeeModule-67facd5e756b4a9d4db57d072fae71b83bf50558c14b025039ba2e3e04b2ae0354de2a69a32013939ec2df27af68c2fe4e13347b706fa1d518efc4dd6bd8cf3e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeeModule-67facd5e756b4a9d4db57d072fae71b83bf50558c14b025039ba2e3e04b2ae0354de2a69a32013939ec2df27af68c2fe4e13347b706fa1d518efc4dd6bd8cf3e"' :
                                            'id="xs-controllers-links-module-SeeModule-67facd5e756b4a9d4db57d072fae71b83bf50558c14b025039ba2e3e04b2ae0354de2a69a32013939ec2df27af68c2fe4e13347b706fa1d518efc4dd6bd8cf3e"' }>
                                            <li class="link">
                                                <a href="controllers/SeeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeeController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TasksModule-fec96373ac6982f52f4376724b4cb59e816210f1b2f7eed301f7a11a94756faae078111ce698d09e7545679a07b09f0c42eabcffceb5fbe4fc6510b664241148"' : 'data-bs-target="#xs-injectables-links-module-TasksModule-fec96373ac6982f52f4376724b4cb59e816210f1b2f7eed301f7a11a94756faae078111ce698d09e7545679a07b09f0c42eabcffceb5fbe4fc6510b664241148"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-fec96373ac6982f52f4376724b4cb59e816210f1b2f7eed301f7a11a94756faae078111ce698d09e7545679a07b09f0c42eabcffceb5fbe4fc6510b664241148"' :
                                        'id="xs-injectables-links-module-TasksModule-fec96373ac6982f52f4376724b4cb59e816210f1b2f7eed301f7a11a94756faae078111ce698d09e7545679a07b09f0c42eabcffceb5fbe4fc6510b664241148"' }>
                                        <li class="link">
                                            <a href="injectables/TasksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' :
                                            'id="xs-controllers-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' :
                                        'id="xs-injectables-links-module-UsersModule-a75e3838f3efcbc31ff037c22455f17909b5f1b104cb330ceb615fd021022bc17a96712944c6105b7e4f9b5cdc7c049800d3d1cfd6c771afd94bf005a0d4a3be"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ConfigController.html" data-type="entity-link" >ConfigController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Photo.html" data-type="entity-link" >Photo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RoleEntity.html" data-type="entity-link" >RoleEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AudioProcessor.html" data-type="entity-link" >AudioProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneParams.html" data-type="entity-link" >FindOneParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderCreatedEvent.html" data-type="entity-link" >OrderCreatedEvent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService-2.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatsService.html" data-type="entity-link" >CatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ConfigOptions.html" data-type="entity-link" >ConfigOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnvConfig.html" data-type="entity-link" >EnvConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});