
const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    // console.log(image);
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] h-[100px] bg-slate-300" src={image} alt="image" />
            <div>
                <h2 className="uppercase">{name}----------</h2>
                <p>{recipe} </p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;