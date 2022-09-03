package models

type FillType struct {
	Name    string `xml:"name,attr"`
	Economy struct {
		PricePerLiter string `xml:"pricePerLiter,attr"`
		Factors       struct {
			Factor []struct {
				Period string `xml:"period,attr"`
				Value  string `xml:"value,attr"`
			} `xml:"factor"`
		} `xml:"factors"`
	} `xml:"economy"`
}

type FillTypes struct {
	List []FillType `xml:"fillTypes>fillType"`
}
