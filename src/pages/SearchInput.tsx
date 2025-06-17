import { useEffect, useState } from "react"


const SearchInput = () => {
    const [input, setInput]: any = useState();
    const [result, setResult]: any = useState();
    const [showResult, setShowResult] = useState(false);
    const [cache, setCache]: any = useState();
    const fetchData = async () => {
        if (cache?.[input]) {
            console.log(cache[input]);

            setResult(cache[input]);
            return;
        }
        let result = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        let json = await result.json();
        setResult(json.recipes);
        setCache((prev: any) => ({ ...prev, [input]: json.recipes }))
    }

    useEffect(() => {
        const timer = setTimeout(fetchData, 300);
        return () => clearTimeout(timer);
    }, [input]);

    return (
        <div>
            <input type="text"
                placeholder='Search'
                className='border border-gray-300 p-2 rounded-md'
                value={input}
                onChange={(e: any) => setInput(e.target.value)}
                onFocus={() => setShowResult(true)}
                onBlur={() => setShowResult(false)}
            />
            {showResult && <div className="min-h-[200px] max-h-[200px] overflow-y-scroll">
                {result && result?.map((item: any) => {
                    return (
                        <div key={item.id} className="p-1 hover:bg-gray-200">
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default SearchInput