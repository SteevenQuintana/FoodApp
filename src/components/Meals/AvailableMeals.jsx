import React from 'react'
import Card from '../UI/Card'
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import useMeals from '../../hooks/useMeals'
import { toast } from 'react-hot-toast'

const AvailableMeals = () => {
  const { meals, isLoading, error } = useMeals()

  if (isLoading) {
    return <section className={styles.mealsLoading}>loading...</section>
  }

  if (error) {
    toast.error(error)
    return
  }

  const mealsList = meals.map((meal, i) => (
    <MealItem key={`${meal.id} ${i}`} meal={meal} />
  ))

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
