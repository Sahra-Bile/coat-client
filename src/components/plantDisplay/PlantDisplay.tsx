import React from 'react'
import { IPlant } from '../../models/IPlant'
import { Link } from 'react-router-dom'

interface IPlantProps {
  plant: IPlant
}
export const PlantDisplay = (props: IPlantProps) => {
  return (
    <div className="container">
      <Link to={`/plants/${props.plant.id}`}>
        <div>
          <div className="container__wrapper">
            <img src={props.plant.imgurl} alt={props.plant.name} />
          </div>
          <h1 className="container__name">{props.plant.name}</h1>
        </div>
      </Link>
    </div>
  )
}
