'use client'

import { Model } from '../data/models'

interface ModelCardProps {
  model: Model
  onClick: () => void
}

export default function ModelCard({ model, onClick }: ModelCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-pointer hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200 group"
    >
      <div className="flex gap-2 mb-3">
        {model.zkmlVerified && (
          <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-md text-xs font-semibold text-indigo-400">
            zkML ✓
          </span>
        )}
        {model.teeAttested && (
          <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-md text-xs font-semibold text-emerald-400">
            TEE ✓
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
        {model.name}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {model.description}
      </p>
      
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span className="px-2 py-1 bg-white/5 rounded-md">{model.type}</span>
        <span>•</span>
        <span>{model.parameters}</span>
        <span>•</span>
        <span className="text-emerald-400 font-semibold">{model.avgAccuracy}%</span>
      </div>
    </div>
  )
}
