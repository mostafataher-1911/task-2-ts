//  task1
//  class bankaccount{
//     private balance:number=0;

      
//     deposit(amount:number):void{
        
//         this.balance +=amount;

//     }
//     getBalance(): number {
//         return this.balance;
//       }
// }

// const myacc = new bankaccount();
// myacc.deposit(500);
// console.log( myacc.getBalance())
// |||||||||||||||||||||||||||||||||||||||||
// task2
// function reverse <T>(arr:T[]):T[]{
//     return arr.slice().reverse();

// }
// const num = [1, 2, 3, 4, 5];
// const reversnum = reverse(num);
// console.log( reversnum);
// ||||||||||||||||||||||||||||||||||||||||
// task3
// interface HasID {
//     id: number;
//   }
  
//   class User implements HasID {
//     protected name: string;
//     public age: number;
//     id: number;
  
//     constructor(id: number, name: string, age: number) {
//       this.id = id;
//       this.name = name;
//       this.age = age;
//     }
  
    
//     getDetails(): string {
//       return `Name: ${this.name}, Age: ${this.age}`;
//     }
//   }
  
//   class Admin extends User {
//     public role: string;
  
//     constructor(id: number, name: string, age: number, role: string) {
//       super(id, name, age);
//       this.role = role;
//     }
  
//     override getDetails(): string {
//       return `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`;
//     }
//   }
  

//   const user1 = new User(1, "MOSTAFA", 22);
//   console.log(user1.getDetails());
  
//   const admin1 = new Admin(2, "TAHER", 50, "Manager");
//   console.log(admin1.getDetails());
//   task4
// تعريف واجهة Post التي تمثل البيانات
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  
  class PostService {
   fetchPosts(url:string): void{
   fetch(url)
   .then(response => response.json()) 
      .then((posts : Post[]) => {
    posts.forEach(post=>{

        console.log(`Post ID: ${post.id}`);
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
        console.log("-------------");
      });
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
    });
}
}
  const postService = new PostService();
  postService.fetchPosts("https://jsonplaceholder.typicode.com/posts");
  