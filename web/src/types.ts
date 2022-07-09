export interface Product {
	name: string;
	average: number;
	good: number;
	best: number;
	first: string[];
	second: string[];
	months?: string[];
	plant?: string[];
	harvest?: string[];
}

export interface Crops {
	name: string;
	plants: string[];
	harvests: string[];
}

export interface Months {
	name: string;
	name_lower?: string;
	products: Product[];
	harvests?: Crops[];
	plants?: Crops[];
}
