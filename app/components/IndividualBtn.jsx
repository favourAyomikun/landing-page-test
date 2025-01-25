'use client'
import { useState, useEffect } from 'react'

const IndividualBtn = () => {
  const [hash, setHash] = useState('')
  
  useEffect(() => {
    setHash(window.location.hash)
    const handleHashChange = () => {
      setHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])
  
  return (
    <>
      <button
        className={`hover:bg-grey15 transition-all rounded-l-full hover:px-5 py-3 rounded-r-full ${
          hash === "#" ? "bg-grey15 px-5" : "bg-transparent"
        }`}
      >
        For Individuals
      </button>
      <button className="px-5 py-2 bg-transparent w-fit font-lexend text-normal  text-white rounded-l-full rounded-r-full">
        For businesses
      </button>
    </>
  );
};

export default IndividualBtn;