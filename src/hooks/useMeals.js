import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const useMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          'https://food-app-9d417-default-rtdb.firebaseio.com/meals.json'
        )
        if (!response.ok) {
          throw new Error('Something went wrong!')
        }

        const data = await response.json()

        const loadedMeals = []

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price
          })
        }
        setMeals(loadedMeals)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMeals()
  }, [])

  return { meals, isLoading, error }
}

export default useMeals
