package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	APIPort := os.Getenv("API_PORT")

	app := fiber.New()

	app.Get("/products", func(c *fiber.Ctx) error {
		return c.SendString("GET products")
	})

	app.Listen(":" + APIPort)
}
