document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.features_content a');
    const tabContents = document.querySelectorAll('.tab');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabId = this.getAttribute('data-tab');


            // Remove active class from all tab contents & links
            tabContents.forEach(content => content.classList.remove('active'));
            links.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked tab's content & link
            document.getElementById(`feature-tab-${tabId}`).classList.add('active');
            this.classList.add('active');
        });
    });

    // Set the first tab % link as active by default
    document.getElementById('feature-tab-1').classList.add('active');
    document.getElementById('link-1').classList.add('active');

});

/*--------------- session 21/7 tutorial ----------------*/

// let person = {
//     username:'ali',
//     skills: [
//         {
//             name: 'php',
//             projects: [
//                 {
//                     name:'hospital',
//                     time:4,
//                     team:['saad','mazen']
//                 },
//             ]
//         }
//     ],
//     address:'cairo'
// };

// let msg = 'hello';
// let last = msg;

// msg = 'hader';
// console.log(msg);
// console.log(last);

// let person={
//     name: 'John',
//     address:'cairo',
// }
// let person2 = person;
// person.name = 'hadeer';
// console.log(person2);

// let user = new Object();
// user.name = 'john';
// user.address = 'cairo';

// console.log(user);

// let products = new Array();
// products[0]= 'tv';
// products[1]= 'mobiles';

// console.log(products);

// let salary = prompt('Enter your salary');
// console.log('my salary is ' + salary);

// let x = 4;
// console.log(x<2);

// if(true){
//     console.log('1st action');
//     console.log('2nd action');
// }

// let x = 10;
// let y = 10;

// if(x===y){
//     console.log('valid');
// }
// if(!(x>200)){
//     console.log('valid');
// }else{
//     console.log('invalid');
// }


// let grade = prompt('Enter your grade please between 0 to 100?');

// if(grade >= 90){
//     console.log('Excellent');
// }
// else if(grade >= 80){
//     console.log('very good');
// }
// else if(grade < 80  && grade >= 50){
//     console.log('good');
// }
// else{
//     console.log('failed');
// }

// let grade = prompt('Enter your grade please between 0 to 100?');

// let result = (grade >= 90) ? 'Excellent' :
//              (grade >= 80) ? 'Very good' :
//              (grade >= 50) ? 'Good' :
//              'Failed';

// console.log(result);

// let x =40;
// switch(x){
//     case 10:console.log('answer is 10');break;
//     case 20:console.log('answer is 20');break;
//     case 30:console.log('answer is 30');break;
//     case 40:console.log('answer is 40');break;
//     default:console.log('invalid');
// }

// let grade = prompt('Enter your grade please between 0 to 100?');
// switch(true){
//     case (grade >= 90): console.log('excellent grade');
//     case (grade >= 80): console.log('very good grade');
//     case (grade >= 50): console.log('good grade');
//     default: console.log('failed');
// }

// let users = ['ali','mazen','sara','saad','A','B','C','D'];
// for (let i = 0;i<users.length;i++) {
//     if(i>=4){
//         console.log(users[i]);    
//     }
// }
// //return value
// for (let user of users) {
//     console.log(user);
// }
// //return index 
// for (let index_of_user in users) {
//     console.log(index_of_user);
// }

// let users = ['ali','mazen','sara','saad','A','B','C','D'];
// let cnt =0;
// while (cnt < users.length) {
//     console.log(users[cnt]);
//     cnt++;
// }
// console.log('continue script code');

// let cnt =0;
// do {
//     console.log('test');
// } while (cnt < 10)

// let num_of_products = prompt('enter num of products');
// let arr=[];
// for (let i = 0; i < num_of_products;i++){
//     arr[i]=prompt('enter one of them');
// }
// console.log(arr);

// let num_of_products = prompt('enter num of products');
// let cnt =0;
// let x;
// for (let i = 0; i < num_of_products;i++){
//     x=prompt('enter price of '+(i+1));
//     cnt+=Number(x);
// }
// console.log(cnt);