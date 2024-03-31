const BaseUrl = '../../../../..'

export default [
  {
    name: 'moveLeft',
    file: `${BaseUrl}/audio/snowboard_move_left.mp3`,
    settings: {
      volume: 0.1,
      spatialSound: true,
    },
    follow: true,
  },
  {
    name: 'moveRight',
    file: `${BaseUrl}/audio/snowboard_move_right.mp3`,
    settings: {
      volume: 0.1,
      spatialSound: true,
    },
    follow: true,
  },
  {
    name: 'background',
    file: `${BaseUrl}/audio/wind_background_loop.mp3`,
    settings: {
      loop: true,
      volume: 1,
    },
  },
  {
    name: 'scream',
    file: `${BaseUrl}/audio/wilhelm-scream.mp3`,
    settings: {
      volume: 0.2,
    },
  },
  {
    name: 'jager',
    file: `${BaseUrl}/audio/jagermeister.mp3`,
    settings: {
      volume: 0.4,
    },
  },
  {
    name: 'boost',
    file: `${BaseUrl}/audio/turboboost.mp3`,
    settings: {
      volume: 0.2,
      spatialSound: true,
    },
    follow: true,
  },
]
