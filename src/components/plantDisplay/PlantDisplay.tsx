import React from 'react'
import { IPlant } from '../../models/IPlant'
import { Link } from 'react-router-dom'
import './plantDisplay.scss'

interface IPlantProps {
  plant: IPlant
}
export const PlantDisplay = (props: IPlantProps) => {
  return (
    <div className="container">
      <Link className="container__link" to={`/plants/${props.plant.id}`}>
        <div className="container__link__card">
          <h1 className="container__link__card__name">{props.plant.name}</h1>
          <div className="container__link__card__wrapper">
            <img
              className="container__link__card__wrapper__img"
              src={props.plant.imgurl}
              alt={props.plant.name}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}
