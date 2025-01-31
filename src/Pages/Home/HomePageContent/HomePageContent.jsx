import "./HomePageContent.css";
import CarCard from "../../../Components/CarCard/CardCard";

export default function HomePageContent({ routeData }) {


    return (
        <div className="main-home-page-content">
            <div className="home-page-content">
                <div className="car-card-div">
                    {routeData?.length > 0 ?
                        routeData?.map((car) => (
                            <CarCard key={car.id} carData={car.Car} routeId={car.routeId} />
                        )) :
                        <p>No cars available</p>
                    }
                </div>
            </div>
        </div>
    );
}
