'use client'

interface FiltersProps {
  search: string
  setSearch: (value: string) => void
  selectedType: string
  setSelectedType: (value: string) => void
  types: string[]
  zkmlOnly: boolean
  setZkmlOnly: (value: boolean) => void
  teeOnly: boolean
  setTeeOnly: (value: boolean) => void
}

export default function Filters({
  search,
  setSearch,
  selectedType,
  setSelectedType,
  types,
  zkmlOnly,
  setZkmlOnly,
  teeOnly,
  setTeeOnly,
}: FiltersProps) {
  return (
    <>
      {/* Search */}
      <input
        type="text"
        placeholder="Search models by name, type, or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xl mx-auto px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors mb-6"
      />

      {/* Type Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedType === type
                ? 'bg-indigo-600 text-white'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-indigo-500/50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Verification Filters */}
      <div className="flex gap-6 justify-center mb-8">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={zkmlOnly}
            onChange={(e) => setZkmlOnly(e.target.checked)}
            className="w-5 h-5 rounded border-white/20 bg-white/5 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0"
          />
          <span className="text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
            zkML Only
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={teeOnly}
            onChange={(e) => setTeeOnly(e.target.checked)}
            className="w-5 h-5 rounded border-white/20 bg-white/5 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0"
          />
          <span className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
            TEE Only
          </span>
        </label>
      </div>
    </>
  )
}
