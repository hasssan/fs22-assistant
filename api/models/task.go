package models

type Task struct {
	ID        int
	ProfileID int
	FieldID   int
	Crops     []string
	Desc      string
	Priority  int
}
