import { useState } from 'react'
import TeamCard from '../components/TeamCard'
import teamsData from '../data/teams.json'

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredTeams = teamsData.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recruiting Scores</h1>

      <input
        type="text"
        placeholder="Search teams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-6 w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  )
}
