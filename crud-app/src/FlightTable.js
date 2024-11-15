import {useState, useEffect} from 'react';
import axios from 'axios';

const FlightTable = () => {
    const [flights, setFlights] = useState([]);
    const [editRecord, setEditRecord] = useState(null);
    const [form, setForm] = useState({ id: null, airline: '', source: '', destination: '',
                                       fare: null, duration:''});


    //Fetch the data from API.
    useEffect(() => {
        fetchFlights()
    }, []);




    //Gets the list of trainers from the backend (Express --> Mongoose --> MongoDB)
    const fetchFlights = async () => {
        try {
            const response = await axios.get("http://localhost:8001/getAllFlights");
            console.log(response.data);
            setFlights(response.data);
        } catch (error) {
            console.error("Error fetching flights..", error);
        }
    }

    //to handle delete operation
    const handleDelete = async(id) => {
        await axios.delete("http://localhost:8001/deleteFlight/"+id);
        fetchFlights();
    }

    //Whenever there is a change in the text, form data is updated.
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    //Setting the Edit record field..
    const handleEdit = (form) => {
        setForm(form);
        setEditRecord(true);
    }

    //submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editRecord) {
            await axios.put(`http://localhost:8001/updateFlight/${form.id}`, form);
        } else {
            await axios.post("http://localhost:8001/insertData/", form);
        }
        setForm({ id: 0, name: '', technology: '', phone_number: 0, location: '' });
        setEditRecord(false);
        fetchFlights();
    }



    return (
        <div>
            <h1> Flights List...</h1> &nbsp;
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Airline </th>
                        <th> Source </th>
                        <th> Destination </th>
                        <th> Fare </th>
                        <th> Duaration</th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id}>
                            <td>{flight.id}</td>
                            <td>{flight.airline}</td>
                            <td>{flight.source}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.fare}</td>
                            <td>{flight.duration}</td>
                            <td>
                                <button onClick={() => handleEdit(flight)}>Edit</button> &nbsp;
                                <button onClick ={() => handleDelete(flight.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br /><br />
            <div id='first'>
            <h1> Form to add/edit Records...</h1>
            <form onSubmit={handleSubmit}>


                Flight Id : <input name='id' value={form.id} onChange={handleChange} placeholder='Enter Id' /> <br />
                Airline : <input name='airline' value={form.airline} onChange={handleChange} placeholder='Enter airline'/><br />
                Source :  <input name='source' value={form.source} onChange={handleChange} placeholder='Enter source' /><br />
                Destination : <input name='destination' value={form.destination} onChange={handleChange} placeholder='Enter destination'/><br />
                Fare :   <input name='fare' value={form.fare} onChange={handleChange} placeholder='Enter fare'/><br />
                Duration : <input name='duration' value={form.duration} onChange={handleChange} placeholder='Enter duration'/> &nbsp;<br /><br />
                <button id="formButton" type='submit'>{editRecord ? 'Update' : 'Add'} Record </button>
            </form>
</div>
            </div>
    );
}

export default FlightTable;