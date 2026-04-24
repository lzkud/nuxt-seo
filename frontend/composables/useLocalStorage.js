export const useLocalStorage = () => {
  const setItem = (key, value) => {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error('localStorage setItem error:', error)
    }
  }

  const getItem = (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('localStorage getItem error:', error)
      return defaultValue
    }
  }

  const removeItem = (key) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('localStorage removeItem error:', error)
    }
  }

  const clear = () => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('localStorage clear error:', error)
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
    clear
  }
}