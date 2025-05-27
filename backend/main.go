package main

import (
	"log"

	database "github.com/cezartdev/vite-go/db"
	movie "github.com/cezartdev/vite-go/movies"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func main() {

	//Env variables
	err := godotenv.Load(".env.development")

	if err != nil {
		log.Fatal("Error loading .env.development file")
	}

	//Database connection
	database.Connect()
	database.DB.AutoMigrate(&movie.Movie{})

	//Server
	app := fiber.New()
	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowCredentials: true,
	}))

	//Health Check Route
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Everything is fine")
	})

	api := app.Group("/api")
	v1 := api.Group("/v1")

	/*Routes*/
	//Movies
	moviesGroupV1 := v1.Group("/movies")
	movie.Routes(moviesGroupV1)

	//Genres
	//genreGroupV1 := v1.Group("/genres")

	log.Fatal(app.Listen(":3001"))
}
