import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-10 mt-24">
            <SectionTitle subHeading="Check it out" heading="Featured" />
            <div className="md:flex justify-center items-center text-white bg-slate-800 bg-opacity-40 pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-3">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, totam nostrum eos aperiam deleniti sed. Doloribus quasi officiis cum nemo eum veritatis voluptatum, excepturi quo rem, quam ducimus adipisci tempore error, ipsum minus? Velit cum eius harum cumque optio iure accusamus ea, fuga, mollitia repellat temporibus, sapiente unde? Quasi, iure!</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;