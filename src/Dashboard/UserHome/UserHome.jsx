import UseCart from "../../Hooks/UseCart/UseCart";

const UserHome = () => {
    const [cart] = UseCart()
    return (
        <div>
            <h1>user home {cart.length}</h1>
        </div>
    );
};

export default UserHome;