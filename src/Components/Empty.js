const Empty=({title, subtitle})=>{
    return(
        <div className="text-center mt-24 mx-12">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
    
}

export default Empty;