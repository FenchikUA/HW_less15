const base_url = 'https://restcountries.com/v2/';
export const all_countris = base_url + 'all?fields=name,capital,flags,population,region';
export const searchCountry = (name) => base_url + 'name/' + name;
// export const filterCode = (codes) => base_url + 'alpha?codes' + codes.join(',');