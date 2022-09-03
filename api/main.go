package main

import (
	"encoding/xml"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"

	"github.com/hasssan/fs22-assistant/api/models"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	APIPort := os.Getenv("API_PORT")

	app := fiber.New()

	app.Get("/products", func(c *fiber.Ctx) error {
		products := loadProduct()
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"success": true,
			"data":    products,
		})
	})

	app.Listen(":" + APIPort)
}

func loadProduct() []models.FillType {
	data, err := os.ReadFile(os.Getenv("PRODUCT_SOURCE_XML"))
	if err != nil {
		log.Fatal("Failed to load PRODUCT_SOURCE_XML")
	}

	var mf models.FillTypes

	err = xml.Unmarshal([]byte(data), &mf)
	if err != nil {
		log.Fatal("Failed to parse PRODUCT_SOURCE_XML")
	}
	return mf.List
}
