package models

type Product struct {
	ID         int
	Name       string
	AVGPrice   float32
	BestPrice  float32
	GoodPrice  float32
	FirstBest  []string
	SecondBest []string
}
