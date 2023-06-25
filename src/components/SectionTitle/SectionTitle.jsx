

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-2/6 mt-12 mb-12 mx-auto space-y-3">
            <p className="text-orange-400">---{subHeading}---</p>
            <h1 className="text-5xl text-gray-600 font-bold uppercase border-y-4 py-4 ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;