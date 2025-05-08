package movie

func GetMovies(c *fiber.Ctx) error {
    movie := Movie{
        ID:   1,
        Name: "Avengers",
        Description: "Sample description",
    }
    return c.Status(fiber.StatusOK).JSON(movie)
}