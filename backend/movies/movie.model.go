package movie

type Movie struct {
	ID   int32  `json:"id" gorm:"primaryKey"`
	Name string `json:"name"`
	Description string `json:"description"`
}

func (Movie) TableName() string{
	return "movies"
}