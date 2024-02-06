export interface CardsGridControlProps {
  selectedTimezone: string | null
  setSelectedTimezone: React.Dispatch<React.SetStateAction<string | null>>
  uniqueTimezones: string[]
}

export interface LoginForm {
  email: string
  password: string
}

export interface ErrorResponse {
  error: string
}
