import DetailProduct from "./DetailProduct";
import SlideProduct from "./SlideProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SlideProduct />
            <DetailProduct />
        </main>
    )
};

export default MainProduct