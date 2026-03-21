'use client'

import { Model } from '../data/models'

interface ModelModalProps {
  model: Model | null
  onClose: () => void
}

export default function ModelModal({ model, onClose }: ModelModalProps) {
  if (!model) return null

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-white">{model.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl leading-none transition-colors"
          >
            ×
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          {model.zkmlVerified && (
            <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-md text-xs font-semibold text-indigo-400">
              zkML Verified ✓
            </span>
          )}
          {model.teeAttested && (
            <span className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-md text-xs font-semibold text-emerald-400">
              TEE Attested ✓
            </span>
          )}
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {model.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <InfoCard label="Type" value={model.type} />
          <InfoCard label="Category" value={model.category} />
          <InfoCard label="Parameters" value={model.parameters} />
          <InfoCard label="Size" value={model.size} />
          <InfoCard label="Accuracy" value={`${model.avgAccuracy}%`} highlight color="text-emerald-400" />
          <InfoCard label="Inferences" value={formatNumber(model.totalInferences)} />
          <InfoCard label="Creator" value={model.creator} />
          <InfoCard label="License" value={model.license} />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {model.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/25">
          Deploy Model
        </button>
      </div>
    </div>
  )
}

interface InfoCardProps {
  label: string
  value: string
  highlight?: boolean
  color?: string
}

function InfoCard({ label, value, highlight, color = 'text-white' }: InfoCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="text-xs text-gray-500 mb-1 font-medium">{label}</div>
      <div className={`text-lg font-semibold ${highlight ? color : 'text-white'}`}>
        {value}
      </div>
    </div>
  )
}
