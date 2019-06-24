import React , {useContext,useState,useEffect} from 'react'

const FilterContext = React.createContext(null);

export const  useFilter =()=> {
	const contextValue = useContext(FilterContext);
	return contextValue;
}

export const  FilterProvider=(props)=> {

	const { children } = props;
	const contextValue = useState('');
	const [filter, setFilter] = contextValue;

	useEffect(
		() => {
			// const router = new Router({
			// 	'/': () => {
			// 		setFilter('');
			// 	},
			// 	'/active': () => {
			// 		setFilter('active');
			// 	},
			// 	'/completed': () => {
			// 		setFilter('completed');
			// 	}
			// });
			// router.init();
		},
		[filter]
	);

	return (
		<FilterContext.Provider value={contextValue}>
			{children}
		</FilterContext.Provider>
	);
}