

const Banner = () => {
    return (
        <div>

            <div className="bg-center h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/dfHYBT8/revslider-h1-2.jpg)' }}>
                
                <div className="text-black relative">
                    <div className="lg:max-w-2xl absolute lg:mt-40 lg:ml-40 mt-28 ml-14">
                        <h1 className="mb-5 text-5xl font-bold">Rich Blend of the <br />Finest Flavours</h1>
                        <p className="mb-5">We deliver all natural tea to you anytime, anywhere..</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;