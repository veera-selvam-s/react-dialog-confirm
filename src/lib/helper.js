import React from 'react';

export const getIcon = (icon) => {
  switch (icon) {
    case 'success':
      return (
        <svg viewBox="0 0 512 512" width={56} height={56}
          xmlns="http://www.w3.org/2000/svg">
          {/* eslint-disable-next-line max-len */}
          <path d="M256 6.998c-137.533 0-249 111.467-249 249 0 137.534 111.467 249 249 249s249-111.467 249-249c0-137.534-111.467-249-249-249zm0 478.08c-126.309 0-229.08-102.771-229.08-229.081 0-126.31 102.771-229.08 229.08-229.08 126.31 0 229.08 102.771 229.08 229.08 0 126.31-102.77 229.081-229.08 229.081z"
            fill="#22c55e" className="fill-425661"></path>
          <path fill="#22c55e"
            d="M384.235 158.192 216.919 325.518l-89.057-89.037-14.142 14.143 103.199 103.179L398.28 172.334z"
            className="fill-425661"></path></svg>
      )
    case 'warning':
      return (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width={56} height={56}
          enableBackground="new 0 0 64 64">
          {/* eslint-disable-next-line max-len */}
          <path d="M-196-222.1c-13.2 0-23.9-10.7-23.9-23.9s10.7-23.9 23.9-23.9 23.9 10.7 23.9 23.9-10.7 23.9-23.9 23.9zm0-45.2c-11.7 0-21.3 9.6-21.3 21.3s9.6 21.3 21.3 21.3 21.3-9.6 21.3-21.3-9.6-21.3-21.3-21.3z"
            transform="translate(228 278)" fill="#eab308" className="fill-134563" />
          <path d="M-197.4-236.1h2.8v2.8h-2.8zM-195.2-238.9h-1.6l-.6-11.3v-8.5h2.8v8.5l-.6 11.3"
            transform="translate(228 278)" fill="#eab308" className="fill-134563" />
        </svg>
      )
    case 'error':
      return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width={56} height={56}>
          <g data-name="1">
            {/* eslint-disable-next-line max-len */}
            <path d="M257 461.46c-114 0-206.73-92.74-206.73-206.73S143 48 257 48s206.73 92.74 206.73 206.73S371 461.46 257 461.46ZM257 78c-97.45 0-176.73 79.28-176.73 176.73S159.55 431.46 257 431.46s176.73-79.28 176.73-176.73S354.45 78 257 78Z"
              fill="#ef4444" className="fill-000000"/>
            {/* eslint-disable-next-line max-len */}
            <path d="M342.92 358a15 15 0 0 1-10.61-4.39L160.47 181.76a15 15 0 1 1 21.21-21.21L353.53 332.4a15 15 0 0 1-10.61 25.6Z"
              fill="#ef4444" className="fill-000000"/>
            {/* eslint-disable-next-line max-len */}
            <path d="M171.07 358a15 15 0 0 1-10.6-25.6l171.84-171.85a15 15 0 0 1 21.22 21.21L181.68 353.61a15 15 0 0 1-10.61 4.39Z"
              fill="#ef4444" className="fill-000000"/>
          </g>
        </svg>
      )
    case 'info':
      return (
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" width={56} height={56}>
          <circle cx="25" cy="25" fill="none" r="24" stroke="#0ea5df" strokeLinecap="round"
            strokeMiterlimit="10" strokeWidth="2" className="stroke-000000"></circle>
          <path fill="none" d="M0 0h50v50H0z"></path>
          {/* eslint-disable-next-line max-len */}
          <path d="M23.779 16.241c-.216 0-.357-.144-.357-.359v-2.618c0-.215.142-.359.357-.359h2.439c.215 0 .359.144.359.359v2.618c0 .215-.145.359-.359.359h-2.439zm.073 21.052c-.215 0-.358-.143-.358-.358V20.473c0-.215.144-.359.358-.359h2.295c.216 0 .359.144.359.359v16.462c0 .216-.144.358-.359.358h-2.295z"
            fill="#0ea5df" className="fill-000000"></path></svg>
      )
    default:
  }
}
