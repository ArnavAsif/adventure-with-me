import { Link, useLoaderData, useParams } from "react-router";


const ExploreMore = () => {
    const { id } = useParams();
    const idPar = parseInt(id);
    const data = useLoaderData();
    const allData = data.find(item => item.id === idPar)
    const { image, adventureTitle, shortDescription, maxGroupSize, adventureCost, specialInstructions } = allData

    return (
        <div className="hero bg-base-200 p-8">
            <div className="hero-content flex-col lg:flex-row-reverse gap-15">
                <img
                    src={image}
                    className="max-w-2xl rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{adventureTitle}</h1>
                    <p className="bg-amber-100 p-2 rounded-2xl text-center mt-6">Max Group Size:{maxGroupSize}</p>
                    <p className="py-6 font-bold">
                        Description:  {shortDescription}
                    </p>
                    <div className="p-3">
                        <p className="text-lg font-bold mb-5">Special Instructions: </p>
                        {
                            specialInstructions.map(item => <p className="badge badge-soft badge-warning block mb-2">#{item}</p>)
                        }
                    </div>
                    <p className="bg-blue-100 p-2 rounded-2xl text-center mb-5">Adventure Cost: 💰 {adventureCost}$</p>
                    <Link to='/'><button className="btn btn-primary w-full">Back to Main Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ExploreMore;