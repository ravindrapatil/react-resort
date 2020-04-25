import React, { useState, useEffect, createRef } from 'react';
// import items from './data';
import Client from './Contentful';

// Client.getEntries({
//     content_type: 'beachResortRoom'
// })
//     .then((response) => console.log(response.items))
//     .catch(console.error);

export const RoomContext = React.createContext();

export const RoomProvider = (props) => {
    const initialState = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }
    const [state, setState] = useState(initialState);

    const featureSectionRef = createRef();

    const getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'beachResortRoom',
                // order: 'sys.createdAt'
                order: 'fields.price'
                // reverse order 
                // order: '-fields.price'
            });
            let rooms = formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            setState({
                ...state,
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                maxPrice,
                maxSize
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        })
        return tempItems;
    }

    const getRoom = slug => {
        const tempRooms = [...state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    const handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        setState({ ...state, [name]: value });
    }

    const handlePriceChange = (event, newValue) => {
        setState({ ...state, price: newValue });
    }

    useEffect(() => {
        filtreRoom();
    }, [state.type, state.capacity, state.price, state.minSize, state.maxSize, state.breakfast, state.pets])

    const filtreRoom = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);

        // Filter by type 
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
            setState({ ...state, sortedRooms: tempRooms });
        }

        // Filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
            setState({ ...state, sortedRooms: tempRooms });
        }

        // Filter by Price 
        if (price) {
            tempRooms = tempRooms.filter(room => room.price <= price);
            setState({ ...state, sortedRooms: tempRooms });
        }

        // Filter by Size 
        if (minSize || maxSize) {
            tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
            setState({ ...state, sortedRooms: tempRooms });
        }

        // Filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
            setState({ ...state, sortedRooms: tempRooms });
        }

        // Filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
            setState({ ...state, sortedRooms: tempRooms });
        }
    }

    const handleGoToSection = (event) => {
        if(featureSectionRef.current) {
            featureSectionRef.current.scrollIntoView({
                behavior: "smooth", 
                block: "nearest"
            })
        }
    }

    return (
        <RoomContext.Provider value={{ ...state, getRoom: getRoom, 
            handleChange: handleChange,
            featureSectionRef: featureSectionRef, 
            handlePriceChange: handlePriceChange,
            handleGoToSection: handleGoToSection }}>
            {props.children}
        </RoomContext.Provider>
    )
}

export const { RoomConsumer } = RoomContext;
