/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/dell/Desktop/Hexo/public/2020/12/01/Butterfly-安裝文檔-一-快速開始/index.html","2cee12565f6fe9edcbcd2acaa8039a5e"],["C:/Users/dell/Desktop/Hexo/public/2020/12/01/Ubuntu-18-04-安裝-Docker-支援-GPU/index.html","09daf0837422a1d36b4925e70657a042"],["C:/Users/dell/Desktop/Hexo/public/2020/12/01/categories/index.html","840026032bd6a9199308cc9cda32f6cb"],["C:/Users/dell/Desktop/Hexo/public/2020/12/01/hello-world/index.html","7cc18667a5ad1da6f26e01108ed55faa"],["C:/Users/dell/Desktop/Hexo/public/2020/12/04/NVIDIA-Triton-Inference-Server/index.html","006cb862dadf7e8ced07341aa49f9900"],["C:/Users/dell/Desktop/Hexo/public/2020/12/04/NVIDIA-Triton-Inference-Server2/index.html","e153e55e111e0d78a04ed4a42606901a"],["C:/Users/dell/Desktop/Hexo/public/2020/12/05/01-Tensorflow1-X-PNASNet模型/index.html","2654eecf0062ec91b7c0bbc6788352a4"],["C:/Users/dell/Desktop/Hexo/public/404.html","5dce9ba1831e9bd335f1f15a26839d37"],["C:/Users/dell/Desktop/Hexo/public/about/index.html","c1eca2f618b515f4262e181c5df0120f"],["C:/Users/dell/Desktop/Hexo/public/archives/2020/12/index.html","b52d474dd20c07def35da33bb3d93247"],["C:/Users/dell/Desktop/Hexo/public/archives/2020/index.html","dfe7e0480d4daff8d796627979b3cb95"],["C:/Users/dell/Desktop/Hexo/public/archives/index.html","f7058c7c63148773cb43c836066b0417"],["C:/Users/dell/Desktop/Hexo/public/artitalk/index.html","ba7d6a315e2177b7b9c03871d40076c1"],["C:/Users/dell/Desktop/Hexo/public/categories/index.html","7963c82be2f91a3b9628f810aa1d708c"],["C:/Users/dell/Desktop/Hexo/public/categories/intro/index.html","2ad2e4e1c24f88752c434f3986bd9414"],["C:/Users/dell/Desktop/Hexo/public/css/index.css","9db59381f457baa479d7e22e50afa023"],["C:/Users/dell/Desktop/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/dell/Desktop/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/dell/Desktop/Hexo/public/img/ShowIndexStdImg.jpg","84ec5a14a12dfd92a25f049549169cb5"],["C:/Users/dell/Desktop/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/dell/Desktop/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/Users/dell/Desktop/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/dell/Desktop/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/dell/Desktop/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/dell/Desktop/Hexo/public/img/road.jpg","c093b3031e81567b6e5ba50f741dbe67"],["C:/Users/dell/Desktop/Hexo/public/index.html","09a20da7cc6a0c01e88cfc75d82234c1"],["C:/Users/dell/Desktop/Hexo/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["C:/Users/dell/Desktop/Hexo/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["C:/Users/dell/Desktop/Hexo/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["C:/Users/dell/Desktop/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["C:/Users/dell/Desktop/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["C:/Users/dell/Desktop/Hexo/public/link/index.html","920e0828759b15a0363ab5aff88ffe4f"],["C:/Users/dell/Desktop/Hexo/public/tags/Butterfly/index.html","9cb79928964229877014a751f423b179"],["C:/Users/dell/Desktop/Hexo/public/tags/Tensorflow/index.html","b0af92a9133de9cd262ab8c4385b4b42"],["C:/Users/dell/Desktop/Hexo/public/tags/docker/index.html","be654ae05da8ac30ea07419905a5e382"],["C:/Users/dell/Desktop/Hexo/public/tags/gpu/index.html","8b11a8a8e929089a4ba4daf337e708b6"],["C:/Users/dell/Desktop/Hexo/public/tags/index.html","2beac1e766eb667f16b053abcdac5369"],["C:/Users/dell/Desktop/Hexo/public/tags/intro/index.html","9affb3f1cab3137ea45adf02ed12a9c8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});






