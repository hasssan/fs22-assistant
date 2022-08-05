package models

type FillTypes struct {
	FillTypes []struct {
		Text      string `xml:",chardata"`
		Name      string `xml:"name,attr"`
		Title     string `xml:"title,attr"`
		UnitShort string `xml:"unitShort,attr"`
		Economy   struct {
			Text          string `xml:",chardata"`
			PricePerLiter string `xml:"pricePerLiter,attr"`
			Factors       struct {
				Text   string `xml:",chardata"`
				Factor []struct {
					Text   string `xml:",chardata"`
					Period string `xml:"period,attr"`
					Value  string `xml:"value,attr"`
				} `xml:"factor"`
			} `xml:"factors"`
		} `xml:"economy"`
	} `xml:"fillTypes>fillType"`
}
