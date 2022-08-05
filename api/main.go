package main

import (
	"encoding/xml"
	"fmt"
	"os"

	"github.com/hasssan/fs22-assistant/api/models"
)

func checkErr(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	filePath := os.Args[1]

	data, err := os.ReadFile(filePath)
	checkErr(err)

	var mf models.FillTypes

	err = xml.Unmarshal([]byte(data), &mf)
	checkErr(err)

	for _, v := range mf.List {
		fmt.Println("-------------------")
		fmt.Println(v)
		fmt.Println("-------------------")
	}
}
