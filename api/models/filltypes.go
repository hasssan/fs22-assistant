package models

type fillType struct {
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
	List []fillType `xml:"fillTypes>fillType"`
}
