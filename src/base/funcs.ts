import type { LoadType } from './types'

export type load = (rickAndMortyType: LoadType, page: number) => Promise<[]>
