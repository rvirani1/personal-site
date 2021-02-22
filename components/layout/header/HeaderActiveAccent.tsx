import React from 'react'

type Props = {
  isActive: boolean
}

export const HeaderActiveAccent = React.memo(({ isActive }: Props) => {
  const borderBottomColor = isActive ? 'var(--logo-color)' : 'white'
  return (
    <div
      style={{ borderBottom: `1px solid ${borderBottomColor}`, position: 'relative', paddingBottom: '5px' }}
    />
  )
})
