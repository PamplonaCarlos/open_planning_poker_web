import React, { useEffect, useState } from 'react';
import Dashboard from '../contents/Dashboard/dashboard';
import { useRouter } from 'next/router';
import { io, Socket } from 'socket.io-client';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

export const getUUID: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const uuid = cookies.uuid;
  console.log(uuid)
  return {
    props: {
      uuid,
    },
  }; 
};

export default function DashboardPage() {
  const router = useRouter();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [rooms, setRooms] = useState<{ id: string; name: string }[]>([]);
  const [userName, setUserName] = useState<string>("User name's");

  useEffect(() => {
    const socketInstance = io(`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/v1/rooms/${getUUID}`, {
      transports: ['websocket'],
      auth: { token: 'auth' },
    });
    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      console.log('Socket connected');

      // Fetch available rooms
      socketInstance.emit('get-rooms');
      console.log('get-rooms event emitted');
      socketInstance.on('rooms', (availableRooms: { id: string; name: string }[]) => {
        console.log('Rooms received:', availableRooms);
        setRooms(availableRooms);
      });
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);
                          
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Dashboard userName={userName} rooms={rooms} onNavigate={handleNavigation} />
  );
}
