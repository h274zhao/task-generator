export interface Question1{
  art: boolean,
  sports: boolean,
  puzzles: boolean
}

export interface Activity{
  name: string,
  description?: string,
  link?: string,
  image?: string,
  outdoors: number,
  creativity: number,
  sports: number,
  thinking: number,
  cost: number,

}