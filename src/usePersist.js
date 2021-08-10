import React, { useState } from 'react'

const usePersist = (ky, initval) => {
  const key = 'hooks:' + ky
  const value = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initval
    } catch (err) {
      console.log(err)
    }
  }

  const setValue = (val) => {
    try {
      setSavedValue(val)
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (err) {
      console.log(err)
    }
  }

  const [savedValue, setSavedValue] = useState(value)
  return [savedValue, setValue]
}

export default usePersist