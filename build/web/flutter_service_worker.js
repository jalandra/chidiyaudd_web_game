'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "780a8d1ee731797bba7c006a4e692d6d",
"version.json": "1b762e5f01ea39aa973763caffd335dc",
"index.html": "e1df1d61789ebc44c4086169004cd0f7",
"/": "e1df1d61789ebc44c4086169004cd0f7",
"main.dart.js": "f82713df2000f72919f38ffacd94aa64",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82cc3250a7f4a38396b17f475163623d",
"assets/AssetManifest.json": "498fb47bcde43e1e663bec4021fad10e",
"assets/NOTICES": "b390eeb65f67804a80c461e6539e5427",
"assets/FontManifest.json": "c20dc34b5278e676a13e72bf5b8db8b3",
"assets/AssetManifest.bin.json": "6896379df69fa544775835ff37d12a52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flame_splash_screen/assets/layer1.png": "31625c711892b1d250fe3bb58ad32850",
"assets/packages/flame_splash_screen/assets/layer3.png": "24a8fdc53b85d6d749cc2857c708de49",
"assets/packages/flame_splash_screen/assets/layer2.png": "51efb74c8ec5a2fd21f622392678f607",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/l10n/or.json": "7391d4811d8ead940c9d1ea719ebcf33",
"assets/lib/l10n/mr.json": "81a0a8b86c48a017d6d8f316bdfa841a",
"assets/lib/l10n/bn.json": "f7b195cbd7c8c25f9f401e7509bb072f",
"assets/lib/l10n/ta.json": "ef21659285da63860fce2f918b02d76c",
"assets/lib/l10n/ur.json": "4e1b9a0325cf1b1e9363da6624863da6",
"assets/lib/l10n/ml.json": "7b3a3350594ecf67aaf2d71eaf5e2528",
"assets/lib/l10n/en.json": "7502de0237bf922c3b507c023572c3d3",
"assets/lib/l10n/pa.json": "e88bee225011acabd616fecee165356e",
"assets/lib/l10n/kn.json": "a7550a1ee4a3cc37e0dbddaddc2e4966",
"assets/lib/l10n/gu.json": "70cd58dbe8596b409489665c3f7addca",
"assets/lib/l10n/hi.json": "d8501dace323f6a74d4cb17c53871047",
"assets/lib/l10n/te.json": "ac9797d1b7f3cb3d516e9f0992ed6740",
"assets/lib/l10n/as.json": "41b55e2652ae69b5fff19484ab0197ee",
"assets/AssetManifest.bin": "5d7a87c4f482c8bfea046a7ce1f549da",
"assets/fonts/MaterialIcons-Regular.otf": "c5685ef162207cd1ae794fba8ec8aa33",
"assets/assets/images/ic_google.png": "86a67e0703cbfd5010f91b55bfb07dcc",
"assets/assets/images/ic_single_player.png": "78e1dfb46a166d3cbabae4c710e868e4",
"assets/assets/images/ic_hs_center_bg.png": "fbe478c1df4fa01dec0ceedeefcc663c",
"assets/assets/images/ic_finger_up.png": "920208eaf7ad37a54b5717ebccd3d137",
"assets/assets/images/ic_object_circle_start.png": "d108780e4bd243f3f2c742e2aa368bbb",
"assets/assets/images/ic_profile_background_gs_right.png": "42d5ccfd5afdf836e9c7dd101a6b77ba",
"assets/assets/images/ic_profile_computer1.png": "11425c00dcaeaffb2cbceb68dfca522e",
"assets/assets/images/ic_rate_us.png": "7c429ccd539aa7b0c1b77796e916df24",
"assets/assets/images/ic_computer_player_girl.png": "5e6a08442207438fa3619535b52ac8b9",
"assets/assets/images/ic_vs.png": "26ea3da6d0e18e96203c49d776563774",
"assets/assets/images/ic_finger_down.png": "aa237d4d1d739392740f415ea1da81dd",
"assets/assets/images/ic_global_score.png": "34a00fc0789c07ba783da0034a1be6b6",
"assets/assets/images/ic_touchpoint.png": "7a3a499ebf0f43e78648c7a4d49e899a",
"assets/assets/images/ic_home.png": "86d8f807454fcf136b7c0696a9c03b69",
"assets/assets/images/ic_speech_on.png": "6388160099252bf4bdc007dfa3d11da3",
"assets/assets/images/ic_music_off.png": "deeb7ded09b88e109088ed8a2ddb80c6",
"assets/assets/images/ic_profile_computer.png": "e0f56eb140bda4b48fd16cc3cd4967b0",
"assets/assets/images/ic_bronze_medal.png": "e2d62f715963e41586ebee7df6b68cf6",
"assets/assets/images/ic_top_bar.png": "aab10f2eb6e2c42daba5694f67f1f48b",
"assets/assets/images/ic_downloading.png": "72f7543b7ce7ba5bddbd680cf1fc646b",
"assets/assets/images/ic_share_app.png": "5b8e807315e13af2fc1f294fedd009d1",
"assets/assets/images/ic_gold_medal.png": "6c032247af40213b3860264b2d1d9c28",
"assets/assets/images/ic_multi_player.png": "c3cfe970c6424c5f04049a0aace938db",
"assets/assets/images/ic_profile_background.png": "9c81889aec7e44eb6f364cc8be455a93",
"assets/assets/images/ic_hs_content_divider.png": "c0165ea0f908414d90c256ee9f32f288",
"assets/assets/images/ic_fire.png": "9bd58a2a94c0b9d8ab0d36c89b0ba805",
"assets/assets/images/ic_profile.png": "58f056b091fdc23b86334651d31062c8",
"assets/assets/images/ic_facebook.png": "a4b53ff0915a765e2177bca4b92ebce0",
"assets/assets/images/ic_toggle_off.png": "859cc2fb92c2535bc08d8a71e95d8bae",
"assets/assets/images/ic_speaker_on.png": "8acf5208870e02369c144d4c912b3a12",
"assets/assets/images/ic_toggle_on.png": "98194a6590e3640c34bbdee9aeb57964",
"assets/assets/images/ic_finger_up_right.png": "8bf6917169dd4c02efad4fefd246b1cd",
"assets/assets/images/ic_login_btn.png": "bc776a77fac422b9683831eef63ff9c0",
"assets/assets/images/ic_chidiya_udd_hs_logo.png": "f818518af1c204cc524232bd340ba554",
"assets/assets/images/ic_multi_player_online.png": "560ba6d9e5f6e105db78ee7cc3dcd590",
"assets/assets/images/ic_hs_global_scoreboard.png": "3e97ecbd62284023a2bff6ac6d50582c",
"assets/assets/images/main_background.png": "dbd3b3afb4b458625c44d951270e5a83",
"assets/assets/images/ic_profile_background_left.png": "faf63e9ef2e493e793bded8d29b7762b",
"assets/assets/images/ic_speech_off.png": "f1a444f5686406057221611f93793a88",
"assets/assets/images/ic_settings.png": "413d6038566dd951e0c1bebccea17556",
"assets/assets/images/ic_silver_medal.png": "ca30ba04279252f127367973f8153d31",
"assets/assets/images/ic_bottom_bar.png": "ab8ce37fcf0cda984b8feb05bd867e8d",
"assets/assets/images/ic_restart.png": "cf755ce219bc9cee26141eacfd9509ab",
"assets/assets/images/ic_back_next.png": "fb250fded592874dbfb90e2fca5df815",
"assets/assets/images/ic_name_container.png": "a33b38201471d5ed82ee62aaeaf3b9c9",
"assets/assets/images/ic_language_select.png": "4e2733965b41d9c0011697787f88dc4e",
"assets/assets/images/ic_finger_down_right.png": "026867ef4082582db40e282a0cef88fc",
"assets/assets/images/ic_main_background.png": "6ea58f7d429af87c6c6e4a2db5142470",
"assets/assets/images/ic_logo.png": "bf6e9c64c65ae8f02824a2bdffd73b33",
"assets/assets/images/ic_music_on.png": "c77aded814abfe6c5610de577dbe1a0f",
"assets/assets/images/ic_cross_red.png": "ac5d5c2f794dac9009a6b48b4be12cdf",
"assets/assets/images/ic_user_profile.png": "74b440b7cd2b014602f49d1c7c0cf4e0",
"assets/assets/images/ic_computer_player_boy.png": "0bf8c363773d1b67043c053603947c40",
"assets/assets/images/ic_touchpoint_corner.png": "4c053fb686e122d1eddba3055de56973",
"assets/assets/images/vs.png": "1004153335269f98cede53b07351cb36",
"assets/assets/images/ic_speaker_off.png": "5a44882b7bc0c4f6a4b442c2c2c8dbd8",
"assets/assets/images/ic_board_background.png": "8ab992998b7d183f16ea3cd546e8b7e7",
"assets/assets/images/ic_circle_background.png": "171b952d76a5dad97397f2e83b11971c",
"assets/assets/images/ic_speak_icon.png": "889540b0e0b7a657b7c9c672692945a1",
"assets/assets/images/ic_profile_background_gs_left.png": "d9dd6245298893ab773064ee749ba6be",
"assets/assets/audio/birds_music.mp3": "3d75aea229c8b10828683f8ab7644797",
"assets/assets/lottie/splash_lottie_animation.json": "841cf39d512951347dfc3bc0beaa980b",
"assets/assets/fonts/Jungle%2520Hope%2520Free%2520Version.ttf": "5c417386726170227325b0a48af48618",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
