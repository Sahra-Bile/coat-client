import axios from 'axios'
import { IPlant } from '../models/IPlant'

const BASE_URL = 'http://localhost:4500/plants'
const BASE_URL_2 = 'http://localhost:4500/plants/'

export const getAllPlant = async (): Promise<IPlant[]> => {
  let response = await axios.get<IPlant[]>(BASE_URL)

  return response.data
}

export const getPlantById = async (id: number): Promise<IPlant> => {
  let response = await axios.get(BASE_URL_2 + id)

  return response.data
}
