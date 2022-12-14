const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Product Search </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);
 export default SearchBar;
// 
// const SearchBar = ({ searchQuery, setSearchQuery }) => (
//     <form action="/" method="get">
//         <label htmlFor="header-search">
//             <span className="visually-hidden">Search blog posts</span>
//         </label>
//         <input
//             value={searchQuery}
//             onInput={e => setSearchQuery(e.target.value)}
//             type="text"
//             id="header-search"
//             placeholder="Search blog posts"
//             name="s"
//         />
//         <button type="submit">Search</button>
//     </form>
// );
