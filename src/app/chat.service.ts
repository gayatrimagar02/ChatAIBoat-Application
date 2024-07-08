import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public auther:string, public content:string){}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "hi":"Hello",
    "who are you":"My name is chat AI",
    "what is angular":"Angular is the best fremwork ever!",
    "default":"I Can't understand, Can you please repeat!",
  }
  getBoatAnswer(msg:any){
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const boatMessage = new Message('bot', this.getBoatMessage(msg));
    setTimeout(()=>{
      this.conversation.next([boatMessage]);
    },1500);
  }

  getBoatMessage(question:string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default']
  }

}
