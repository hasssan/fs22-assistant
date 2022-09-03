package models

type FillType struct {
	Name    string `xml:"name,attr"`
	Economy struct {
		PricePerLiter float32 `xml:"pricePerLiter,attr"`
		Factors       struct {
			Factor []struct {
				Period int     `xml:"period,attr"`
				Value  float32 `xml:"value,attr"`
			} `xml:"factor"`
		} `xml:"factors"`
	} `xml:"economy"`
}

type FillTypes struct {
	List []FillType `xml:"fillTypes>fillType"`
}
