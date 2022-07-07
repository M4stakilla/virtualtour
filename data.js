var APP_DATA = {
  "scenes": [
    {
      "id": "0-woonkamer",
      "name": "Woonkamer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.344166909256966,
        "pitch": 0.0572420851389559,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2268860689242125,
          "pitch": 0.009653376231263167,
          "rotation": 0,
          "target": "1-keuken"
        },
        {
          "yaw": -3.002203596541978,
          "pitch": 0.04168847160411282,
          "rotation": 0,
          "target": "2-inkomhal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-keuken",
      "name": "Keuken",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.298217291059915,
        "pitch": -0.002009638908736733,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.800553316292369,
          "pitch": 0.020948825773338342,
          "rotation": 0,
          "target": "0-woonkamer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-inkomhal",
      "name": "Inkomhal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6552158804298625,
        "pitch": 0.09164320774249823,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5602324525557734,
          "pitch": 0.004546596795576008,
          "rotation": 0,
          "target": "3-badkamer"
        },
        {
          "yaw": -0.7915397469453289,
          "pitch": -0.0005717581018309659,
          "rotation": 0,
          "target": "4-grote-slaapkamer"
        },
        {
          "yaw": -0.07998680826329263,
          "pitch": 0.029441375949934567,
          "rotation": 0,
          "target": "5-kleine-slaapkamer"
        },
        {
          "yaw": 1.1624562241544911,
          "pitch": 0.004838759198506182,
          "rotation": 0,
          "target": "0-woonkamer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-badkamer",
      "name": "Badkamer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.39646538026767786,
        "pitch": 0.12502269142045463,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6219142890068774,
          "pitch": 0.0025345155816012266,
          "rotation": 6.283185307179586,
          "target": "2-inkomhal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-grote-slaapkamer",
      "name": "Grote slaapkamer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06881832145763767,
        "pitch": 0.10928094082361639,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7872856413870704,
          "pitch": 0.032802514773079494,
          "rotation": 0,
          "target": "2-inkomhal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kleine-slaapkamer",
      "name": "Kleine slaapkamer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.31990065957129943,
        "pitch": 0.07086024231898769,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.092794808314631,
          "pitch": 0.10832307039676259,
          "rotation": 0,
          "target": "2-inkomhal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
