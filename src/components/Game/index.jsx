import { useRef, useEffect } from 'react'
import './index.css'

import Game from './js/Game'
import Avatar from '../Avatar'

export default function GameComponent({ user }) {
  const element = useRef()

  useEffect(() => {
    if (!window.MIRASKI_GAME) {
      window.MIRASKI_GAME = new Game(element.current, {
        modifiers: user.modifiers,
      })
    }
  }, [])

  // Modifiers can be 0-6
  const svgModifiers = [
    user.modifiers.jagers,
    user.modifiers.agility,
    user.modifiers.boost,
  ]

  return (
    <>
      <div className="game__mobile-text">
        <div className="wrapper">
          <article>
            <h1>Sorry</h1>
            <p className="introduction">
              Unfortunately, the game works only on a device with at least
              1024px of screen width and a keyboard.
            </p>
          </article>
        </div>
      </div>

      <section ref={element} className="game">
        <canvas></canvas>
        <div className="game__score-container">
          score:
          <span className="game__score"></span>
        </div>

        <span className="game__sound game__sound--disabled">
          <input
            type="checkbox"
            className="game__sound-toggle"
            name="sound"
            data-sound
            id="sound"
            defaultChecked
          />
          <label className="game__sound-state" htmlFor="sound"></label>
        </span>

        <div className="game__boost">
          <Avatar name={user.name} shortname={user.shortname} />
          <p className="game__boost-text">t-t-turboboost</p>
          <div className="game__boost-bar">
            <span className="game__boost-fill" data-boost></span>
          </div>
        </div>

        <div className="gameover gameover--disabled">
          <div className="gameover__background"></div>

          <div className="gameover__text">
            <h2 className="gameover__heading">Game over!</h2>
            <p className="gameover__finalscoretext">your final score:</p>
            <p className="gameover__finalscore" data-final-score>
              0
            </p>
          </div>

          <form className="gameover__form" action="/game/save" data-save-score>
            <ol className="form-fields">
              <li className="form-field">
                <label htmlFor="game__username">Name</label>
                <input
                  type="text"
                  data-name
                  id="game__username"
                  className="game__username game__username--hidden"
                  pattern="^[a-zA-Z0-9]{2,15}$"
                  placeholder="Bruseker"
                />
              </li>
              <li className="form-field">
                <button className="btn" type="submit">
                  Save score
                </button>
              </li>
              <li className="form-field">
                <a href="/#/leaderboard">Check out the leaderboard</a>
              </li>
            </ol>
          </form>
        </div>

        <div className="game__menu game__menu--hidden">
          <div className="game__user-info">
            <Avatar name={user.name} shortname={user.shortname} />
            <div className="game__stats">
              <h3>{user.name}</h3>
              <div className="game__modifiers">
                <div className="game__modifier">
                  <svg
                    width="42px"
                    height="42px"
                    viewBox="0 0 42 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" transform="translate(4.000000, 3.000000)">
                      <g transform="translate(-777.000000, -355.000000)">
                        <g transform="translate(541.000000, 296.000000)">
                          <g>
                            <polygon
                              stroke="#A8E0FB"
                              strokeWidth="5"
                              points="239.303847 62.4269713 252.812475 60 269.191257 67.2828118 267.780095 85.8368906 247.49637 95.5442063 236 82.1767894"
                            ></polygon>
                            <polygon
                              className="game__stats-value"
                              stroke="#1F94CA"
                              strokeWidth="5"
                              strokeDashoffset={
                                110 - (svgModifiers[0] / 6) * 110
                              }
                              points="239.303847 62.4269713 252.812475 60 269.191257 67.2828118 267.780095 85.8368906 247.49637 95.5442063 236 82.1767894"
                            ></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p>Jäger</p>
                </div>
                <div className="game__modifier">
                  <svg
                    width="42px"
                    height="42px"
                    viewBox="0 0 42 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" transform="translate(4.000000, 3.000000)">
                      <g transform="translate(-680.000000, -355.000000)">
                        <g transform="translate(541.000000, 296.000000)">
                          <g>
                            <g transform="translate(131.000000, 50.000000)">
                              <polygon
                                stroke="#A8E0FB"
                                strokeWidth="5"
                                points="25.1735314 9.38220229 41.928762 19.3144939 40.7923905 34.4660643 22.0530551 44.8630813 10.2266467 34.4278822 8.44841462 16.0409104"
                              ></polygon>
                              <polygon
                                className="game__stats-value"
                                stroke="#1F94CA"
                                strokeWidth="5"
                                strokeDashoffset={
                                  110 - (svgModifiers[1] / 6) * 110
                                }
                                points="25.1735314 9.38220229 41.928762 19.3144939 40.7923905 34.4660643 22.0530551 44.8630813 10.2266467 34.4278822 8.44841462 16.0409104"
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p>Agility</p>
                </div>
                <div className="game__modifier">
                  <svg
                    width="42px"
                    height="42px"
                    viewBox="0 0 42 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      transform="translate(-872.000000, -353.000000)"
                    >
                      <g transform="translate(541.000000, 296.000000)">
                        <g transform="translate(326.300781, 50.444231)">
                          <g>
                            <polygon
                              stroke="#A8E0FB"
                              strokeWidth="5"
                              points="19.9690017 9.69910387 39.4902793 16.9736928 39.626149 34.5614267 29.3881426 44.2964417 10.5323527 34.5233102 9.01571914 21.6237177"
                            ></polygon>
                            <polygon
                              className="game__stats-value"
                              stroke="#1F94CA"
                              strokeWidth="5"
                              strokeDashoffset={
                                110 - (svgModifiers[2] / 6) * 110
                              }
                              points="19.9690017 9.69910387 39.4902793 16.9736928 39.626149 34.5614267 29.3881426 44.2964417 10.5323527 34.5233102 9.01571914 21.6237177"
                            ></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p>Boost</p>
                </div>
              </div>
            </div>
          </div>

          <div className="game__buttons">
            <button className="btn" type="button" data-start>
              Spielen!
            </button>
            <button className="btn btn--secondary" type="button" data-rules>
              About this game
            </button>
          </div>

          <div className="game__about-game">
            <div className="content">
              <h1>About</h1>
              <p>
                Carve your way through the digital MiraSki slopes as you collect
                the Jäger shots for extra points. Weave past trees, rocks and
                snow storms in this 3rd person slalom adventure.
              </p>
              <p>
                The objective is to get as far as possible without dying, the
                game is infinite. You play as a snowboarder and must navigate
                between the obstacles on the piste which cause immediate death.
                You automatically slide down down the mountain, but you can go
                left or right to any avoid collision with the trees and earn
                points. Use the arrow keys ([→] [←]) on your keyboard to guide
                your character down the mountain.
              </p>
              <p>
                Use the up arrow key ([↑]) to activate your turbo-boost, which
                is the bar at the top of the screen. The bar refills slowly by
                itself, but fills quicker when you collect Jäger shots.
              </p>
              <p>
                At the end you can add your score to the leaderboard with the
                other players that have played the MiraSki game.
              </p>
              <p>
                <a href="/#/leaderboard">Check out the leaderboard</a>
              </p>
              <button className="btn game__start" type="button" data-start>
                Spielen!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
