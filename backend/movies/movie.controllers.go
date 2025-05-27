package movie

import "github.com/gofiber/fiber/v2"

func GetMovies(c *fiber.Ctx) error {
	movie := Movie{
		ID:          1,
		Name:        "Avengers",
		Description: "Sample description",
	}
	return c.Status(fiber.StatusOK).JSON(movie)
}
