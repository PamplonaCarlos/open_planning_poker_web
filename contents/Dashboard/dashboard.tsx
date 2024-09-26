import React from "react";
import "./dashboard.css"; // Importa o CSS específico para o Dashboard

interface DashboardProps {
    userName: string;
    rooms: { id: string; name: string }[]; // Assuming each room has an id and name
    onNavigate: (path: string) => void;
  }
  
  export default function Dashboard({ userName, rooms, onNavigate }: DashboardProps) {
    return (
      <main className="dashboardContainer">
        <div className="dashboardTitle">Your Recent Games</div>
  
        <div className="roomList">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room.id} className="roomItem">
                <span>{room.name}</span>
                <button onClick={() => onNavigate(`/room/${room.id}`)}>Join Room</button>
              </div>
            ))
          ) : (
            <p>No rooms available</p>
          )}
        </div>
  
        <footer className="dashboardFooter">
          <div className="footerContent">
            <div className="userName">{userName}</div>
            <div className="footerText">poker planning workspace</div>
            <button className="footerButton" onClick={() => onNavigate('/')}>Home</button>
            <button className="footerButton" onClick={() => onNavigate('/groups')}>Groups</button>
            <button className="footerButton" onClick={() => onNavigate('/organizations')}>Organizations</button>
            <button className="footerButton" onClick={() => onNavigate('/my-games')}>My Games</button>

          </div>
        </footer>
      </main>
    );
  }