import Link from 'next/link'

interface Player {
  id: string
  name: string
  score: number
}

interface Team {
  id: string
  name: string
  slug: string
  players: Player[]
}

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  const avgScore =
    team.players.reduce((sum, p) => sum + p.score, 0) / team.players.length || 0

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
      <p className="mb-2">Players: {team.players.length}</p>
      <p className="mb-4">Average Score: {avgScore.toFixed(1)}</p>
      <Link href={`/team/${team.slug}`}>
        <a className="text-blue-600 hover:underline">View Roster</a>
      </Link>
    </div>
  )
}
