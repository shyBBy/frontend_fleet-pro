import React from 'react';


export const VehicleTableOptions = (props: any) => {
  
  const {search, setSearch} = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);
  const {maxPage, handleChangePage} = props;
  
  const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };
    
    
  
  return(
    <>
      <Box>
        <Pagination count={maxPage} onChange={handleChangePage} />
        <form className="search" onSubmit={setSearchFromLocalState}>
          <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/> <Btn text="Szukaj"/>
        </form>
      </Box>
    </>
    )
}