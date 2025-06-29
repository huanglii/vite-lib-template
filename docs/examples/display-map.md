
# 显示地图

显示卫星地图

<iframe src="/demos/display-map.html" width="100%" style="border:none; height:400px"></iframe>

```html
<!DOCTYPE html>
<html lang="zh-Hans-CN">

<head>
  <title>显示地图</title>
  <meta property="og:description" content="显示卫星地图" />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@5.3.0/dist/maplibre-gl.css" />
  <script src="https://unpkg.com/maplibre-gl@5.3.0/dist/maplibre-gl.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
    }

    html,
    body,
    #map {
      height: 100%;
    }
  </style>
</head>

<body>
  <div id="map"></div>
  <script>
    const MAPTILER_KEY = 'get_your_own_OpIi9ZULNHzrESv6T2vL'
    const map = new maplibregl.Map({
      style: '/styles/satellite.json',
      center: [118.9819, 25.39847],
      container: 'map'
    })
  </script>
</body>

</html>
```
