package movie

type Movie struct {
	ID   int32  `json:"id"`
	Name string `json:"name"`
	Description string `json:"description"`
}