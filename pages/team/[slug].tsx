import { useRouter } from 'next/router'
import teamsData from '../../data/teams.json'
import PlayerTable from '../../components/PlayerTable'
import Link from 'next/link'

export default function TeamPage() {
  const router = useRouter()
  const { slug } = router.query

  if (!slug) {
    return <div>Loading...</div>
  }

  const team = teamsData.find((t) => t.slug === slug)

  if (!team) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p>Team not found.</p>
        <Link href="/">
          <a className="text-blue-600 hover:underline">Go back home</a>
        </Link>
      </div>
    )
  }

  const avgScore =
    team.players.reduce((sum, p) => sum + p.score, 0) / team.players.length || 0

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{team.name}</h1>
      <p className="mb-4">Average Team Score: {avgScore.toFixed(1)}</p>

      <PlayerTable players={team.players} />

      <Link href="/">
        <a className="inline-block mt-6 text-blue-600 hover:underline">
          ← Back to teams
        </a>
      </Link>
    </div>
  )
}
