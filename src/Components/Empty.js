const Empty=({title, subtitle})=>{
    return(
        <div className="text-center mt-24 mx-12">
            <h1 className="text-2xl font-semibold text-text_main">{title}</h1>
            <p className="text-lg font-normal text-text_gray">{subtitle}</p>
        </div>
    );
    
}

export default Empty;