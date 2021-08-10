import React, { useState } from 'react'

const useCalc = (num = 0, func = (a) => { return a }) => {
  const [msg, setMsg] = useState(null)

  const setValue = (p) => {
    let res = func(p)
    setMsg(<p className="h5">※ {p} の結果は、{res}です。</p>)
  }

  return [msg, setValue]
}

export default useCalc