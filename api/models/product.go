package models

type Product struct {
	ID         string   `json:"id"`
	Name       string   `json:"name"`
	AVGPrice   float32  `json:"avgPrice"`
	BestPrice  float32  `json:"bestPrice"`
	GoodPrice  float32  `json:"goodPrice"`
	FirstBest  []string `json:"first"`
	SecondBest []string `json:"second"`
}
