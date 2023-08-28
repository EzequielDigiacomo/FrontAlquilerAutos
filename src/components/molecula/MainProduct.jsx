import DetailProduct from "./DetailProduct";
import SlideProduct from "./SlideProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 gap-8 md:min-h-[calc(100vh-104px-3px)] items-center md:container md:grid-cols-2 md:mx-auto">
            <SlideProduct />
            <DetailProduct />
        </main>
    )
};

export default MainProduct