import React from 'react'

const ConatctInfo = () => {
  return (
    <div className="space-y-14">
    <div className="text-center">
  <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
    Contact us
  </h1>
  <p className="mt-1 text-gray-600 ">
    We'd love to talk about how we can help you.
  </p>
</div>
    <div className="flex gap-x-5">
      <svg className="flex-shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      <div className="grow">
        <h4 className="text-white font-semibold">Our address:</h4>

        <address className="mt-1 text-neutral-400 text-sm not-italic">
          Rua Mororia 2831 -029<br/>
          Lisbon, Portugal
        </address>
      </div>
    </div>
 
    <div className="flex gap-x-5">
      <svg className="flex-shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
      <div className="grow">
        <h4 className="text-white font-semibold">Email us:</h4>

        <a className="mt-1 text-neutral-400 text-sm" href="#mailto:example@site.co" target="_blank">
          takeandpay@gmail.com
        </a>
      </div>
    </div>

  
  
  </div>
  )
}

export default ConatctInfo