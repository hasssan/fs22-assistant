package models

type Growth struct {
	Seasonal struct {
		Fruits []struct {
			Name         string `xml:"name,attr"`
			InitialState string `xml:"initialState,attr"`
			Period       []struct {
				Index           string `xml:"index,attr"`
				PlantingAllowed string `xml:"plantingAllowed,attr"`
				Update          []struct {
					Range string `xml:"range,attr"`
					Add   string `xml:"add,attr"`
					Set   string `xml:"set,attr"`
				} `xml:"update"`
			} `xml:"period"`
		} `xml:"fruit"`
	} `xml:"seasonal"`
	NonSeasonal struct {
		Fruits []struct {
			Name   string `xml:"name,attr"`
			Update []struct {
				Range string `xml:"range,attr"`
				Set   string `xml:"set,attr"`
				Add   string `xml:"add,attr"`
			} `xml:"update"`
		} `xml:"fruit"`
	} `xml:"nonSeasonal"`
}
