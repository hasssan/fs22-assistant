import products from '../data';
import type { Months } from '../types';

const monthData: Record<string, Months> = {
	jan: { name: 'Jan', products: [] },
	feb: { name: 'Feb', products: [] },
	mar: { name: 'Mar', products: [] },
	apr: { name: 'Apr', products: [] },
	may: { name: 'May', products: [] },
	jun: { name: 'Jun', products: [] },
	jul: { name: 'Jul', products: [] },
	aug: { name: 'Aug', products: [] },
	sep: { name: 'Sep', products: [] },
	oct: { name: 'Oct', products: [] },
	nov: { name: 'Nov', products: [] },
	dec: { name: 'Dec', products: [] },
	'-': { name: '-', products: [] },
};

const months: Months[] = Object.values(monthData);

for (const key in monthData) {
	const productOfMonth = products.filter((p) => p.months?.includes(key));
	monthData[key].products = productOfMonth;
	monthData[key].name_lower = monthData[key].name.toLowerCase();
}

export { months, monthData };
