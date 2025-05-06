package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

type Movie struct {
	ID   int32  `json:"id"`
	Name string `json:"name"`
}

func getMovies(c *fiber.Ctx) error {

	movie := Movie{
		ID:   1,
		Name: "Avengers",
	}

	return c.Status(fiber.StatusOK).JSON(movie)

}

func createMovies(c *fiber.Ctx) error {

	movie := Movie{}

	if err := c.BodyParser(&movie); err != nil {
		fmt.Println(err)
	}

	return c.Status(fiber.StatusOK).JSON(movie)

}

func main() {

	app := fiber.New()

	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowCredentials: true,
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Everything is fine")
	})

	api := app.Group("/api")
	v1 := api.Group("/v1")

	moviesGroupV1 := v1.Group("/movies")

	moviesGroupV1.Get("/get", getMovies)

	log.Fatal(app.Listen(":3001"))
}
