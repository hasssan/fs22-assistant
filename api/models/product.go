package models

type Product struct {
	ID         int
	Name       string
	AVGPrice   int
	BestPrice  int
	GoodPrice  int
	FirstBest  []string
	SecondBest []string
}
