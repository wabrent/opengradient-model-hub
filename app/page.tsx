'use client'

import { useState } from 'react'
import { mockModels, modelTypes, networkStats } from './data/models'
import Stats from './components/Stats'
import Filters from './components/Filters'
import ModelCard from './components/ModelCard'
import ModelModal from './components/ModelModal'

export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedModel, setSelectedModel] = useState<typeof mockModels[0] | null>(null)
  const [zkmlOnly, setZkmlOnly] = useState(false)
  const [teeOnly, setTeeOnly] = useState(false)

  const filtered = mockModels.filter((model) => {
    const matchesSearch =
      model.name.toLowerCase().includes(search.toLowerCase()) ||
      model.type.toLowerCase().includes(search.toLowerCase()) ||
      model.category.toLowerCase().includes(search.toLowerCase())
    const matchesType = selectedType === 'All' || model.type === selectedType
    const matchesZkml = !zkmlOnly || model.zkmlVerified
    const matchesTee = !teeOnly || model.teeAttested
    return matchesSearch && matchesType && matchesZkml && matchesTee
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-8 md:p-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
          OpenGradient Model Hub
        </h1>
        <p className="text-gray-400 text-lg">
          Explore 1500+ verifiable AI models with zkML proofs and TEE attestations
        </p>
      </div>

      {/* Stats */}
      <Stats
        totalModels={networkStats.totalModels}
        totalInferences={networkStats.totalInferences}
        zkmlProofs={networkStats.zkmlProofs}
        teeAttestations={networkStats.teeAttestations}
      />

      {/* Filters */}
      <Filters
        search={search}
        setSearch={setSearch}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        types={modelTypes}
        zkmlOnly={zkmlOnly}
        setZkmlOnly={setZkmlOnly}
        teeOnly={teeOnly}
        setTeeOnly={setTeeOnly}
      />

      {/* Models Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filtered.map((model) => (
          <ModelCard key={model.id} model={model} onClick={() => setSelectedModel(model)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-12 text-lg">
          No models found
        </p>
      )}

      {/* Modal */}
      <ModelModal model={selectedModel} onClose={() => setSelectedModel(null)} />

      {/* Footer */}
      <footer className="text-center mt-16 pt-8 border-t border-white/10 text-gray-500 text-sm">
        OpenGradient Model Hub - Verifiable AI on Blockchain
      </footer>
    </div>
  )
}
