import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

export const LIGHT_THEME = 'light'
export const DARK_THEME = 'dark'

const BASE_URL = 'https://restcountries.com/v2/'
export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`

export const searchByCountry = name => `${BASE_URL}name/${name}`
export const searchByCodes = codes => `${BASE_URL}alpha?codes=/${codes.join(',')}`

export const ROUT_ELEMENTS = [
	{
		component: Home,
		exact: true,
		path: '/',
	},
	{
		component: Details,
		exact: true,
		path: '/country/:name',
	},
	{
		component: NotFound,
		path: '*',
		exact: false,
	},
]