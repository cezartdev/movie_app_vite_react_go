package movie

import (
    "github.com/gofiber/fiber/v2"
)

func Routes(router fiber.Router) {

	
	router.Get("/get", GetMovies)
}