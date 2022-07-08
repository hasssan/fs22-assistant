export interface Source {
	name: string;
	average: number;
	good: number;
	best: number;
	first: string;
	second: string;
	months?: string[];
}

export interface Product {
	name: string;
	average: number;
	good: number;
	best: number;
	first: string[];
	second: string[];
	months?: string[];
}

export interface Months {
	name: string;
	name_lower?: string;
	products: Product[];
}
