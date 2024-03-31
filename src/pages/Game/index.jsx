import Game from '../../components/Game'

export default function GamePage() {
  const user = {
    name: 'Tennis Dimmers',
    shortname: 'swartna',
    modifiers: { jagers: 6, agility: 3, boost: 2 },
  }

  return <Game user={user} />
}
