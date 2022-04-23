export default function Container({children}){
    return(
        <div className="max-w-7xl mx-auto px:8 md:px-6 lg:px-0">
            {children}
        </div>
    );
}