import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading, size, color = "blue", className = "" }) => {
    return (
        <div className="flex items-center justify-center">
            <ClipLoader
                color={color}
                loading={loading}
                size={size}
                aria-label="Loading Spinner"
                data-testid="loader"
                className={className}
            />
        </div>
    );
};

export default Loader;
