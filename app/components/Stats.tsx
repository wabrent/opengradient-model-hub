'use client'

interface StatsProps {
  totalModels: number
  totalInferences: number
  zkmlProofs: number
  teeAttestations: number
}

export default function Stats({ totalModels, totalInferences, zkmlProofs, teeAttestations }: StatsProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+'
    }
    return num.toString()
  }

  const stats = [
    { label: 'Total Models', value: formatNumber(totalModels), color: 'text-indigo-500' },
    { label: 'Inferences', value: formatNumber(totalInferences), color: 'text-violet-500' },
    { label: 'zkML Proofs', value: formatNumber(zkmlProofs), color: 'text-cyan-500' },
    { label: 'TEE Attestations', value: formatNumber(teeAttestations), color: 'text-emerald-500' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-white/20 transition-colors"
        >
          <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
