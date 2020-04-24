import React, { useContext } from 'react';
import RoomList from '../components/RoomList';
import RoomFilter from '../components/RoomFilter';
import Loading from '../components/Loading';
import { RoomContext } from '../context';

function RoomsContainer() {
    const roomsContext = useContext(RoomContext);
    // console.log(roomsContext);
    const { rooms, sortedRooms, loading } = roomsContext;

    const template = <><RoomFilter rooms={rooms} /><RoomList rooms={sortedRooms} /></>

    return (
        <>  
            {
                loading ? <Loading /> : template
            }
        </>
    )
}

export default RoomsContainer
