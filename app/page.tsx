'use client'

import { useState } from 'react'

const models = [
  { id: '1', name: 'LLaMA-7B Chat', type: 'LLM', zkml: true, tee: true },
  { id: '2', name: 'GPT-2 Sentiment', type: 'NLP', zkml: true, tee: true },
  { id: '3', name: 'ResNet-50', type: 'Computer Vision', zkml: true, tee: true },
  { id: '4', name: 'Whisper Small', type: 'Audio', zkml: true, tee: false },
  { id: '5', name: 'Stable Diffusion XL', type: 'Generative', zkml: false, tee: true },
  { id: '6', name: 'BERT Base', type: 'NLP', zkml: true, tee: true },
]

export default function Home() {
  const [search, setSearch] = useState('')

  const filtered = models.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '16px' }}>
        OpenGradient Model Hub
      </h1>

      <p style={{ textAlign: 'center', color: '#888', marginBottom: '32px' }}>
        Explore verifiable AI models with zkML proofs and TEE attestations
      </p>

      <input
        type="text"
        placeholder="Search models..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: 'block',
          margin: '0 auto 32px',
          padding: '12px 20px',
          width: '100%',
          maxWidth: '400px',
          background: '#1a1a2e',
          border: '1px solid #333',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '16px'
        }}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {filtered.map((model) => (
          <div
            key={model.id}
            style={{
              background: '#1a1a2e',
              border: '1px solid #333',
              borderRadius: '12px',
              padding: '20px'
            }}
          >
            <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#fff' }}>
              {model.name}
            </h3>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '12px' }}>
              {model.type}
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {model.zkml && (
                <span style={{
                  padding: '4px 10px',
                  background: '#6366f122',
                  border: '1px solid #6366f1',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#818cf8'
                }}>
                  zkML ✓
                </span>
              )}
              {model.tee && (
                <span style={{
                  padding: '4px 10px',
                  background: '#10b98122',
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#34d399'
                }}>
                  TEE ✓
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '40px' }}>
          No models found
        </p>
      )}

      <footer style={{
        textAlign: 'center',
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid #333',
        color: '#666',
        fontSize: '14px'
      }}>
        OpenGradient Model Hub - Verifiable AI on Blockchain
      </footer>
    </div>
  )
}
