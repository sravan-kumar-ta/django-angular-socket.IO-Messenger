import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  senderId: any;
  receiverId: any;
  prevMessages: any;
  message: string = '';
  newMessage: any = {
    sender: null,
    receiver: null,
    message: ""
  }
  socketMessages = [{
    msg: "",
    senderid: 0,
    receiverid: 0
  }];

  constructor(
    private route: ActivatedRoute,
    private socketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.socketService.getPrevMessages().subscribe((data: any) => {
      this.prevMessages = data;
      console.log('old messages', this.prevMessages)
    });

    this.route.paramMap.subscribe(params => {
      this.senderId = params.get('senderId');
      this.receiverId = params.get('receiverId');
    });
    
    this.socketService.emit('join', {userid: this.senderId});
    
    this.socketService.getMessage().subscribe((data: any) => {
      this.socketMessages.push(data);
    });
  }

  sendMessage(): void {
    this.newMessage = {
      sender: this.senderId,
      receiver: this.receiverId,
      message: this.message
    }

    if (this.message != "") {
      this.socketMessages.push({msg: this.message, senderid: this.senderId, receiverid: this.receiverId});

      this.socketService.storeMessagedb(this.newMessage).subscribe(() => console.log('message send'));

      this.socketService.emit("new-message", {receiverid: this.receiverId, msg: this.message, senderid: this.senderId})
      this.message = '';
    }
  }

}
