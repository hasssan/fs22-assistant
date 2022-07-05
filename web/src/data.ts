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
const data: Source[] = [
	{
		name: 'Wheat',
		average: 1011,
		good: 1452.680625,
		best: 1529.1375,
		first: 'Jan',
		second: 'Dec',
	},
	{
		name: 'Barley',
		average: 939,
		good: 1349.225625,
		best: 1420.2375,
		first: 'Jan',
		second: 'Dec',
	},
	{
		name: 'Oat',
		average: 1596,
		good: 2293.2525,
		best: 2413.95,
		first: 'Jan',
		second: 'Dec',
	},
	{
		name: 'Canola',
		average: 1809,
		good: 2599.306875,
		best: 2736.1125,
		first: 'Dec',
		second: 'Nov',
	},
	{
		name: 'Sorghum',
		average: 1290,
		good: 1868.8875,
		best: 1967.25,
		first: 'Jan',
		second: 'Feb',
	},
	{
		name: 'Grapes',
		average: 1809,
		good: 2577.825,
		best: 2713.5,
		first: 'May',
		second: 'Jun',
	},
	{
		name: 'Olives',
		average: 1809,
		good: 2577.825,
		best: 2713.5,
		first: 'Jun',
		second: 'Jul',
	},
	{
		name: 'Sunflowers',
		average: 2019,
		good: 2877.075,
		best: 3028.5,
		first: 'Mar',
		second: 'Apr',
	},
	{
		name: 'Soybeans',
		average: 2333,
		good: 4404.995625,
		best: 4636.8375,
		first: 'Jul',
		second: 'Jun',
	},
	{
		name: 'Corn',
		average: 1139,
		good: 1798.908125,
		best: 1893.5875,
		first: 'Jan',
		second: 'Jul',
	},
	{
		name: 'Potatoes',
		average: 516,
		good: 747.555,
		best: 786.9,
		first: 'Jan',
		second: 'Feb',
	},
	{
		name: 'Sugar Beet',
		average: 366,
		good: 530.2425,
		best: 558.15,
		first: 'Jan',
		second: 'Feb',
	},
	{
		name: 'Sugar Beet Cut',
		average: 516,
		good: 747.555,
		best: 786.9,
		first: 'Jan',
		second: 'Feb',
	},
	{
		name: 'Cotton',
		average: 3756,
		good: 4950.8775,
		best: 5211.45,
		first: 'Mar',
		second: 'Feb',
	},
	{
		name: 'Sugarcane',
		average: 357,
		good: 445.134375,
		best: 468.5625,
		first: 'Jul Sep',
		second: 'Aug Oct',
	},
	{
		name: 'Eggs',
		average: 3360,
		good: 4987.5,
		best: 5250,
		first: 'Nov',
		second: 'Dec',
	},
	{
		name: 'Wool',
		average: 2820,
		good: 4319.8875,
		best: 4547.25,
		first: 'May',
		second: 'Apr',
	},
	{
		name: 'Milk',
		average: 2100,
		good: 2718.1875,
		best: 2861.25,
		first: 'Oct',
		second: 'Sep',
	},
	{
		name: 'Chaff',
		average: 126,
		good: 169.07625,
		best: 177.975,
		first: 'Feb',
		second: 'Mar',
	},
	{
		name: 'Woodchips',
		average: 240,
		good: 481.65,
		best: 507,
		first: 'Jan',
		second: 'Feb',
	},
	{
		name: 'Silage',
		average: 513,
		good: 676.198125,
		best: 711.7875,
		first: 'Jan Feb',
		second: 'Dec',
	},
	{
		name: 'Wood',
		average: 3000,
		good: 3562.5,
		best: 3750,
		first: '-',
		second: '-',
	},
	{
		name: 'Grass',
		average: 135,
		good: 177.946875,
		best: 187.3125,
		first: 'Jan Feb',
		second: 'Dec',
	},
	{
		name: 'Hay',
		average: 168,
		good: 221.445,
		best: 233.1,
		first: 'Jan Feb',
		second: 'Dec',
	},
	{
		name: 'Straw',
		average: 123,
		good: 176.735625,
		best: 186.0375,
		first: 'Jan Feb',
		second: 'Dec',
	},
	{
		name: 'Manure',
		average: 99,
		good: 130.494375,
		best: 137.3625,
		first: 'Jan Feb',
		second: 'Dec',
	},
	{
		name: 'Slurry',
		average: 99,
		good: 130.494375,
		best: 137.3625,
		first: 'Jan Feb',
		second: 'Dec',
	},
	{
		name: 'Digestate',
		average: 99,
		good: 131.67,
		best: 138.6,
		first: 'Jan Feb',
		second: 'Dec',
	},
	{
		name: 'Stones',
		average: 150,
		good: 178.125,
		best: 187.5,
		first: '-',
		second: '-',
	},
	{
		name: 'Flour',
		average: 1710,
		good: 2063.92725,
		best: 2172.555,
		first: 'Jan',
		second: 'Dec',
	},
	{
		name: 'Bread',
		average: 4560,
		good: 5503.806,
		best: 5793.48,
		first: 'Jan',
		second: 'Dec',
	},
	{
		name: 'Cake',
		average: 9900,
		good: 10764.0225,
		best: 11330.55,
		first: 'Oct',
		second: 'Jan',
	},
	{
		name: 'Butter',
		average: 2700,
		good: 2935.6425,
		best: 3090.15,
		first: 'Oct',
		second: 'Jan',
	},
	{
		name: 'Cheese',
		average: 5400,
		good: 5871.285,
		best: 6180.3,
		first: 'Oct',
		second: 'Jan',
	},
	{
		name: 'Fabric',
		average: 9000,
		good: 11580.975,
		best: 12190.5,
		first: 'May',
		second: 'Apr',
	},
	{
		name: 'Clothes',
		average: 24000,
		good: 30882.6,
		best: 32508,
		first: 'Sep Jul',
		second: 'Aug Oct',
	},
	{
		name: 'Sugar',
		average: 1500,
		good: 1571.0625,
		best: 1653.75,
		first: 'Sep Jul',
		second: 'Aug Oct',
	},
	{
		name: 'Honey',
		average: 3000,
		good: 3351.6,
		best: 3528,
		first: 'Mar',
		second: 'Apr',
	},
	{
		name: 'Cereal',
		average: 7050,
		good: 7876.26,
		best: 8290.8,
		first: 'Mar',
		second: 'Apr',
	},
	{
		name: 'Sunflower Oil',
		average: 5340,
		good: 6391.98,
		best: 6728.4,
		first: 'Mar',
		second: 'Apr',
	},
	{
		name: 'Canola Oil',
		average: 4920,
		good: 5938.317,
		best: 6250.86,
		first: 'Dec',
		second: 'Nov',
	},
	{
		name: 'Olive Oil',
		average: 7320,
		good: 8762.04,
		best: 9223.2,
		first: 'Jun',
		second: 'Jul',
	},
	{
		name: 'Raisins',
		average: 4200,
		good: 4650.345,
		best: 4895.1,
		first: 'Oct',
		second: 'Sep',
	},
	{
		name: 'Grape Juice',
		average: 4800,
		good: 5362.56,
		best: 5644.8,
		first: 'Feb',
		second: 'Nov',
	},
	{
		name: 'Lettuce',
		average: 2970,
		good: 3347.70975,
		best: 3523.905,
		first: 'Feb',
		second: 'Jan',
	},
	{
		name: 'Tomato',
		average: 1500,
		good: 1690.7625,
		best: 1779.75,
		first: 'Feb',
		second: 'Jan',
	},
	{
		name: 'Strawberry',
		average: 750,
		good: 845.38125,
		best: 889.875,
		first: 'Feb',
		second: 'Jan',
	},
	{
		name: 'Chocolate',
		average: 6000,
		good: 6463.8,
		best: 6804,
		first: 'Jun',
		second: 'Jan',
	},
	{
		name: 'Boards',
		average: 3900,
		good: 4279.275,
		best: 4504.5,
		first: 'Jul',
		second: 'Jun',
	},
	{
		name: 'Furniture',
		average: 6000,
		good: 6583.5,
		best: 6930,
		first: 'Jul',
		second: 'Jun',
	},
];

const newData: Product[] = data
	.map((item) => {
		if (!Array.isArray(item.months)) {
			item.months = [];
		}
		const first = item.first.toLowerCase().split(' ');
		const second = item.second.toLowerCase().split(' ');
		const data = {
			...item,
			first: first,
			second: second,
		};
		const months = new Set(item.months);
		const results = [...first, ...second];
		for (const month of results) {
			months.add(month);
		}
		data.average = parseInt(item.average.toFixed());
		data.good = parseInt(item.good.toFixed());
		data.best = parseInt(item.best.toFixed());
		data.months = Array.from(months);

		return data;
	})
	.sort((a, b) => a.name.localeCompare(b.name));

export default newData;
