import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPlant } from '../../models/IPlant'
import { getPlantById } from '../../services/plantService'
import './singelPlant.scss'

export const SingelPlant = () => {
  const [singelPlant, setSingelPlants] = useState<IPlant>()

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      if (id) {
        let plantData = await getPlantById(+id)
        console.log('vem är du:', plantData)
        setSingelPlants(plantData)
      }
    }
    getData()
  }, [id])

  console.log('och du är?', singelPlant)
  return (
    <div className="singel-container">
      <div className="singel-container__wrapper">
        <img
          className="singel-container__wrapper__img"
          src={singelPlant?.imgurl}
          alt={singelPlant?.name}
        />
      </div>
      <div className="singel-container__text-wrapper">
        <h2 className="singel-container__text-wrapper__name">
          {singelPlant?.name}
        </h2>
        <p className="singel-container__text-wrapper__desc">
          {singelPlant?.description}
        </p>
      </div>
    </div>
  )
}
