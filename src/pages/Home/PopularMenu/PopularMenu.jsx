import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mt-24">
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center">
                <Link to='/menu' ><button className="btn btn-outline border-0 border-b-4 mt-5">View Full Menu</button></Link>
            </div>
        </section>

    );
};

export default PopularMenu;