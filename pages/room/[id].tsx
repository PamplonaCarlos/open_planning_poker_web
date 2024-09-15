import React, { useRef, useEffect, useState } from "react";
import PokerRoom from "../../contents/PokerRoom/poker-room";
import ChooseNameForm from "../../components/ChooseNameForm/choose-name-form";
import BoardGame from "../../components/BoardGame/board-game";
import { useRouter } from 'next/router';
import Card from "../../components/Card/card";
import { io, Socket } from 'socket.io-client';
import Modal from "../../components/Modal/modal";

export default function Room() {
    const router = useRouter();
    const { id } = router.query;
    const [room, setRoom] = useState(false);
    const ivotedRef = useRef<boolean>(false);
    const numberRef = useRef<number>(0);
    const usersRef = useRef<{ id: string | undefined; username: string, voted: boolean, number: number}[]>([]);
    const joinNameRef = useRef<string>("");
    const [joinName, setJoinName] = useState<string>("");
    const [users, setUsers] = useState<{ id: string | undefined; username: string, voted: boolean, number: number}[]>([]);
    const [showVotes, setShowVotes] = useState<boolean>(false);
    const [canVote, setCanVote] = useState<boolean>(false);
    const [socket, setSocket] = useState<Socket | null>(null);
    const [votes, setVotes] = useState<{category: string, quantity:number}[]>([
        {category:'0', quantity: 0},
        {category:'1', quantity: 0},
        {category:'2', quantity: 0},
        {category:'3', quantity: 0},
        {category:'5', quantity: 0},
        {category:'8', quantity: 0},
        {category:'13', quantity: 0},
        {category:'999', quantity: 0},
    ]);
    const [average, setAverage] = useState<number>(0);


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJoinName(e.target.value);
    }

    useEffect(() => {
        setSocket(io(`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`, {
            transports: ['websocket'],
            auth: {
                token: "auth"
              },
        }));
    }, []);

    useEffect(() => {
  
        const handleBeforeUnload = () => {
            if (socket) {
                socket.close(); 
            }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [socket]);

    useEffect(() => {
        if (socket) {
            socket.on("connect", () => {
                socket.on('user-connected', (userId, userName) => {
                    usersRef.current = [...usersRef.current, {id: userId, username:userName, voted: false, number: 0}]
                    setUsers(usersRef.current);
                    socket.emit('sync', userId, joinNameRef.current, ivotedRef.current);
                });
                socket.on('sync', (userId, userName, userVoted) => {
                    usersRef.current = [...usersRef.current, {id: userId, username:userName, voted: userVoted, number: 0}]
                    setUsers(usersRef.current);

                    if (usersRef.current.every(user => user.voted)) {
                        setCanVote(true);
                    }
                });

                socket.on('register-vote', userId => {
                    usersRef.current =  usersRef.current.map(user => 
                        user.id === userId 
                          ? { ...user, voted: true }
                          : user
                      )
                    setUsers(usersRef.current);

                    if (usersRef.current.every(user => user.voted)) {
                        setCanVote(true);
                    }
                });
                socket.on('user-disconnected', userId => {
                    usersRef.current = usersRef.current.filter(user => user.id !== userId);
                    setUsers(usersRef.current);
                    setRoom(true);
                });

                socket.on('show-votes', () => {
                    socket.emit('show-vote', socket.id, numberRef.current);
                });
                
                socket.on('show-vote', (userId, vote) => {
                    usersRef.current =  usersRef.current.map(user => 
                        user.id === userId 
                          ? { ...user, number: vote }
                          : user
                    )
                    setUsers(usersRef.current);
                    setShowVotes(true);
                });
                socket.on('new-vote', () => {
                    setShowVotes(false);
                    usersRef.current.forEach(user => {
                        user.number = 0;
                        user.voted = false
                    });
                    setUsers(usersRef.current);
                })
            });
        }
    }, [socket, users]);
    

    const handleJoinRoom = (e: React.FormEvent) => {
        e.preventDefault();
        joinNameRef.current = joinName;
        usersRef.current = [...usersRef.current, {id: socket?.id, username: joinNameRef.current, voted: ivotedRef.current,  number: 0}]
        setUsers(usersRef.current);
        if (socket) {
            socket.emit('join-room', id, joinNameRef.current);
            setRoom(true);
        }
    }

    const handleVote = async (n: number) => {
        numberRef.current = n;
        ivotedRef.current = true;
        if (!showVotes) {
            usersRef.current = usersRef.current.map(user => 
                user.username === joinNameRef.current
                  ? { ...user, voted: ivotedRef.current, number:numberRef.current }
                  : user
            )
            setUsers(usersRef.current);
            if (usersRef.current.every(user => user.voted)) {
                setCanVote(true);
            }
            if (socket) socket.emit('vote', socket.id)
        }
    }

    const handleShowVotes = () => {
        if (users.every(user => user.voted)) {
            if (socket) {
                socket.emit('show-votes');
                socket.emit('show-vote', socket.id, numberRef.current);
            }
            setTimeout(() => {
                setShowVotes(true);
            }, 600); 
        }
    }

    const handleNewVote =  () => {
        setShowVotes(false);
        usersRef.current.forEach(user => {
            user.number = 0;
            user.voted = false
        });
        if (socket) {
            socket.emit('new-vote');
        }
        setVotes([
            {category:'0', quantity: 0},
            {category:'1', quantity: 0},
            {category:'2', quantity: 0},
            {category:'3', quantity: 0},
            {category:'5', quantity: 0},
            {category:'8', quantity: 0},
            {category:'13', quantity: 0},
            {category:'999', quantity: 0},
        ]);
        setCanVote(false);
    }

    const handleOpenModal = () => {

        var media = 0;
        var votantes = 0;
        usersRef.current.forEach(user => {
            if (user.number != 999 && user.number != -2) {
                media+=user.number
                votantes+=1
            }
        });
        
        media = media / votantes;

        usersRef.current.forEach(user => {
            if (user.number == 999) {
                media=user.number
            }
        });
        setAverage(media);

        setVotes(prevVotes => {
            const updatedVotes = [...prevVotes]; 
            
            usersRef.current.forEach(user => {
              if (user.number !== -2) {
                const categoryIndex = updatedVotes.findIndex(vote =>
                  vote.category === user.number.toString() || (vote.category === "∞" && user.number === -1)
                );
      
                if (categoryIndex !== 999) {
                  updatedVotes[categoryIndex] = {
                    ...updatedVotes[categoryIndex],
                    quantity: updatedVotes[categoryIndex].quantity + 1
                  };
                }
              }
            });
      
            return updatedVotes;
          });
        // setVotes()
    };

    return (
     
      <PokerRoom >
        {
          <Modal votes={votes} average={average}/>
        }
        {
            room && usersRef.current.length <=12 ? 
                <>
                    {
                        users.map(item => (
                            <Card  key={item.id}
                                name={item.username} 
                                voted={item.voted} 
                                number={item.number} 
                                show={showVotes}
                                proportion={usersRef.current.length}/>
                        ))
                    }
                </>
                : 
                <ChooseNameForm handleJoinRoom={handleJoinRoom} handleInput={handleInput}/>
        }
        {
            room ? <BoardGame handleVote={handleVote} 
            handleShowVotes={handleShowVotes} 
            handleNewVote={handleNewVote} 
            handleOpenModal={handleOpenModal}
            canVote={canVote}/> : <></>
        }
        </PokerRoom>
    );
}