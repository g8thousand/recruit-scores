interface Player {
  id: string
  name: string
  score: number
}

interface PlayerTableProps {
  players: Player[]
}

export default function PlayerTable({ players }: PlayerTableProps) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 text-left">Player Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{player.name}</td>
            <td className="border border-gray-300 px-4 py-2">{player.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
