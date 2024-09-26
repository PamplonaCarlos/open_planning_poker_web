import React, { useEffect, useState } from 'react';
import Dashboard from '../contents/Dashboard/dashboard';
import { useRouter } from 'next/router';
import { io, Socket } from 'socket.io-client';

export default function DashboardPage() {
  const router = useRouter();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [rooms, setRooms] = useState<{ id: string; name: string }[]>([]);
  const [userName, setUserName] = useState<string>('User Name'); // Replace with actual user name

  useEffect(() => {
    const socketInstance = io(`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`, {
      transports: ['websocket'],
      auth: { token: 'auth' },
    });
    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      console.log('Socket connected');

      // Fetch available rooms
      socketInstance.emit('get-rooms');
      socketInstance.on('rooms', (availableRooms: { id: string; name: string }[]) => {
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
