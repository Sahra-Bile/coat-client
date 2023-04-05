import axios from 'axios'
import { IPlant } from '../models/IPlant'

const BASE_URL = 'http://localhost:4500/plants'

export const getAllPlant = async (): Promise<IPlant[]> => {
  let response = await axios.get<IPlant[]>(BASE_URL)

  return response.data
}
