package main

import (
	"fmt"
	"log"
	"os"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	MovieApp "github.com/cezartdev/vite-go"
)


func main() {

	err := godotenv.Load(".env.development")

	if err != nil{
		log.Fatal("Error loading .env.development file")
	}

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

	MovieApp.Routes(moviesGroupV1)

	log.Fatal(app.Listen(":3001"))
}
