import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  ConnectedSocket,
  OnGatewayDisconnect,
  OnGatewayConnection
} from '@nestjs/websockets';
import { Observable, from, map } from 'rxjs';
import { Server, Socket } from "socket.io";

@WebSocketGateway(81)
export class EventsGateway implements OnModuleInit, OnModuleDestroy, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: any,
  ): WsResponse<unknown> {
    const event = 'events';
    return { event, data };
  }

  @SubscribeMessage('events')
  onEvent(@MessageBody() data: unknown): Observable<WsResponse<number>> {
    const event = 'events';
    const response = [1, 2, 3];

    return from(response).pipe(map((data) => ({ event, data })));
  }

  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any) {
    console.log(body);
    this.server.emit('onMessage', {
      msg: 'New Message',
      content: body,
    })
  }

  onModuleInit(){
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('connected');
    });
  }

  onModuleDestroy(){
    this.server.on('disconnect', (socket) => {
      this.server.emit('disconnected', 'A client has disconnected id: ', socket.id);
    });
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log("handleConnection: ", client.id);
    this.server.emit('connected', 'A new client has connected');
  }

  handleDisconnect(client: Socket) {
    console.log("handleDisconnect");
    this.server.emit('disconnected', 'A client has disconnected');
  }
}
