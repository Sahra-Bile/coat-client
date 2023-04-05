import React from 'react'
import { IPlant } from '../../models/IPlant'

interface IPlantProps {
  plant: IPlant
}
export const PlantDisplay = (props: IPlantProps) => {
  return (
    <div className="container">
      <div className="container__wrapper">
        <img src={props.plant.imgurl} alt={props.plant.name} />
      </div>
      <h1 className="container__name">{props.plant.name}</h1>
    </div>
  )
}
