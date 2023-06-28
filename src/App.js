import './App.css';
import MovieTable from "./Components/MovieTable/MovieTable";
import {useState} from "react";
import MovieTableDefaultLayout from "./Components/MovieTable/MovieTableDefaultLayout";

function App() {

    const [changeLayout, setChangeLayout] = useState(false);

    return (
        <>
            <div className="form-check form-switch position-absolute m-3 mx-5">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                       onChange={() => setChangeLayout(!changeLayout)}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change layout</label>
            </div>
            {changeLayout ? (
                <MovieTable></MovieTable>
            ) : (
                <MovieTableDefaultLayout></MovieTableDefaultLayout>
            )}
        </>
    );
}

export default App;
