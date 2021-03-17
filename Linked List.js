class Node { 
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}  

var current;
class LinkedList{ 
    constructor(){
        this.head=null;
        this.size=0;
    } 
    //Insert at begin  
    insertFirst(data){
        this.head=new Node(data,this.head); 
        this.size++;
    }  

    //insert Last 
    insertLast(data){
        var temp=new Node(data);
    
        if(!this.head)
            this.head=temp;
        else{
            current=this.head;
            while(current.next)
                current=current.next;
            
            current.next=temp;
            this.size++;    
        }    
        
    } 

    printList(){
         current=this.head;
        while(current){
            console.log(current.data); 
            current=current.next;
        }

    } 

    delete(index){ 
        current=this.head;
        if(index>0&&index>this.size)
            return;
        
        var count=0;
        var previous;
        
        if(index===0) 
             this.head=current.next;
        else{
            while(count<index){
                count++;
                previous=current;
                current=current.next;
            } 
            previous.next=current.next;
           
        }
        this.size--;

    } 

    getSize(){
        console.log(this.size);
    }

} 

const ll1=new LinkedList(); 
ll1.insertFirst(100);  
ll1.insertLast(200);
ll1.insertLast(300);

ll1.delete(2);
ll1.printList();  
ll1.getSize(); 

// console.log(ll1);