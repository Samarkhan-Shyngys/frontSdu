import Book from "../Components/Book";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
export default function Allbooks(){
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-10">
                <Book />
                <Book />
                <Book />
                <Book />

            </div>
            <Footer />
        </>

    );
};
