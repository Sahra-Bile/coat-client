import React, { useEffect, useState } from 'react'
import { IPlant } from '../../models/IPlant'
import { getAllPlant } from '../../services/plantService'
import { PlantDisplay } from '../plantDisplay/PlantDisplay'

export const Plants = () => {
  const [plants, setPlants] = useState<IPlant[]>([])

  useEffect(() => {
    const getData = async () => {
      let plantFromApi = await getAllPlant()
      console.log('denna är den första listan:', plantFromApi)
      setPlants(plantFromApi)
    }
    if (plants.length > 0) return

    getData()
  })

  console.log('den är den andra listan ', plants)

  let plantHtml = plants.map((plant) => {
    return <PlantDisplay plant={plant} key={plant.id}></PlantDisplay>
  })

  return <div>{plantHtml}</div>
}
