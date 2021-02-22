import React from 'react'

export const HeaderActiveAccent = React.memo(({ isActive }) => {
  const borderBottomColor = isActive ? 'var(--logo-color)' : 'white'
  return (
    <div
      style={{ borderBottom: `1px solid ${borderBottomColor}`, position: 'relative', paddingBottom: '5px' }}
    />
  )
})
