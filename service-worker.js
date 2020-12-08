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

var precacheConfig = [["C:/Users/geitech/Desktop/Hexo/public/2020/12/01/Butterfly-安裝文檔-一-快速開始/index.html","328e9a0b23e77ee2c7f4cf36c1794d52"],["C:/Users/geitech/Desktop/Hexo/public/2020/12/01/Ubuntu-18-04-安裝-Docker-支援-GPU/index.html","9794b90d586f31374e30b7b943ad047c"],["C:/Users/geitech/Desktop/Hexo/public/2020/12/01/categories/index.html","f0b41b8759bdb944c14107a9c08586e5"],["C:/Users/geitech/Desktop/Hexo/public/2020/12/01/hello-world/index.html","e1bd3cbd024e91c6a7ab3ea834a3b1cd"],["C:/Users/geitech/Desktop/Hexo/public/2020/12/04/NVIDIA-Triton-Inference-Server/index.html","50abac05d599edaad7824c20c086b1c3"],["C:/Users/geitech/Desktop/Hexo/public/2020/12/04/NVIDIA-Triton-Inference-Server2/index.html","38b058734c33c7c21dc7c1e57614a7c0"],["C:/Users/geitech/Desktop/Hexo/public/2020/12/05/01-Tensorflow1-X-PNASNet模型/index.html","350ed00d42e7426b063640f3190cccf5"],["C:/Users/geitech/Desktop/Hexo/public/2020/12/08/02-Tensorflow製作自己的資料集/index.html","1e36ef4720a1e622228cab1693d5b4e5"],["C:/Users/geitech/Desktop/Hexo/public/404.html","2327d9ec919c5912f36a2074e92aba44"],["C:/Users/geitech/Desktop/Hexo/public/about/index.html","693a4622e00bc8ff668bd2559d596328"],["C:/Users/geitech/Desktop/Hexo/public/archives/2020/12/index.html","e1b8e70851632e522bfe7b381f57268c"],["C:/Users/geitech/Desktop/Hexo/public/archives/2020/index.html","8830fc0e24415e1c8e70bb03e25f005e"],["C:/Users/geitech/Desktop/Hexo/public/archives/index.html","1fbf657a098cc4223dd1d9f0e9ac7e72"],["C:/Users/geitech/Desktop/Hexo/public/artitalk/index.html","8af6ef91e12025aaecc7342b69b3ad90"],["C:/Users/geitech/Desktop/Hexo/public/categories/index.html","01c8e6f4f79b52a6cc7504aeea7ee004"],["C:/Users/geitech/Desktop/Hexo/public/categories/intro/index.html","433413fb0aff121ccdb270684dbe1314"],["C:/Users/geitech/Desktop/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/geitech/Desktop/Hexo/public/css/index.css","9db59381f457baa479d7e22e50afa023"],["C:/Users/geitech/Desktop/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/geitech/Desktop/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/geitech/Desktop/Hexo/public/img/ShowIndexStdImg.jpg","84ec5a14a12dfd92a25f049549169cb5"],["C:/Users/geitech/Desktop/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/geitech/Desktop/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/Users/geitech/Desktop/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/geitech/Desktop/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/geitech/Desktop/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/geitech/Desktop/Hexo/public/img/road.jpg","c093b3031e81567b6e5ba50f741dbe67"],["C:/Users/geitech/Desktop/Hexo/public/index.html","e1d3754a59f9ffddfa8a473a92eca675"],["C:/Users/geitech/Desktop/Hexo/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["C:/Users/geitech/Desktop/Hexo/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["C:/Users/geitech/Desktop/Hexo/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["C:/Users/geitech/Desktop/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["C:/Users/geitech/Desktop/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["C:/Users/geitech/Desktop/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/geitech/Desktop/Hexo/public/link/index.html","ab89d82e5e46a7c73e515b82adfe9716"],["C:/Users/geitech/Desktop/Hexo/public/tags/Butterfly/index.html","49f0ef53c41bff8e360fd9f057f577c2"],["C:/Users/geitech/Desktop/Hexo/public/tags/Tensorflow/index.html","a59621d707cd7588680c031f477cdd73"],["C:/Users/geitech/Desktop/Hexo/public/tags/docker/index.html","831c47dc9a577e489fa5cad8ca6544cd"],["C:/Users/geitech/Desktop/Hexo/public/tags/gpu/index.html","da647a06401d76c0005b3ff9f71cc4d6"],["C:/Users/geitech/Desktop/Hexo/public/tags/index.html","303ca9a8c2fade785324347961670e9a"],["C:/Users/geitech/Desktop/Hexo/public/tags/intro/index.html","355af8589704de9627199b18c0b2011f"]];
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







