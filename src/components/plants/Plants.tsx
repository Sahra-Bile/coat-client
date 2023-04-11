import React, { useEffect, useState } from 'react'
import { IPlant } from '../../models/IPlant'
import { getAllPlant } from '../../services/plantService'
import { PlantDisplay } from '../plantDisplay/PlantDisplay'
import './plants.scss'

export const Plants = () => {
  const [plants, setPlants] = useState<IPlant[]>([])

  useEffect(() => {
    const getData = async () => {
      let plantFromApi = await getAllPlant()

      const sortedList = plantFromApi.sort(
        (a, b) => a.name.localeCompare(b.name) || a.name.localeCompare(b.name),
      )

      setPlants(sortedList)
    }
    if (plants.length > 0) return

    getData()
  })

  let plantHtml = plants.map((plant) => {
    return <PlantDisplay plant={plant} key={plant.id}></PlantDisplay>
  })

  return <div className="wrapper">{plantHtml} </div>
}
