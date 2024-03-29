import React from 'react'

// https://freeicons.io/e-cons-icons-set/the-envelope-icon-35483

// @ts-ignore
export function EmailIcon({ height = '1.25rem', style = {} }) {
  return (
    <svg
      style={{ height, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="36"
      viewBox="0 0 50 36"
    >
      <defs>
        {/* eslint-disable-next-line react/no-danger */}
        <style dangerouslySetInnerHTML={{
          __html:
          '.cls-1{fill:#00c569}.cls-2{fill:#111}',
        }}
        />
      </defs>
      <title>The_envelope</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="The_envelope">
          <path
            className="cls-1"
            d="M25.82 23.62l11-8.89a2.49 2.49 0 0 0 .79-3.44 2.5 2.5 0 0 0-3.44-.8l-11 8.89a2.49 2.49 0 0 0-.8 3.44 2.49 2.49 0 0 0 3.45.8z"
          />
          <path
            className="cls-2"
            d="M25.82 19.38l-11-8.89a2.5 2.5 0 0 0-3.44.8 2.49 2.49 0 0 0 .79 3.44l11 8.89a2.5 2.5 0 0 0 2.64-4.24z"
          />
          <path
            className="cls-2"
            d="M41.78 0H8.22A8.22 8.22 0 0 0 0 8.22v19.56A8.22 8.22 0 0 0 8.22 36h33.56A8.22 8.22 0 0 0 50 27.78V8.22A8.22 8.22 0 0 0 41.78 0zM45 27.78A3.22 3.22 0 0 1 41.78 31H8.22A3.22 3.22 0 0 1 5 27.78V8.22A3.22 3.22 0 0 1 8.22 5h33.56A3.22 3.22 0 0 1 45 8.22z"
          />
        </g>
      </g>
    </svg>
  )
}
