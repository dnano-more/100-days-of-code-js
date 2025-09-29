// Destructuring 

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh sir",

}

// course.courseInstructor  
/*
* Basic destructuring
const { courseInstructor } = course
console.log(courseInstructor);    // O/p: 'Hitesh sir'

* Renaming during destructuring - apne hisab se naam de sakte hain keys ko jaise ki ⬇
const { courseInstructor: Teacher } = course
console.log(Teacher);  // O/p: 'Hitesh sir'
*/

// Default values in destructuring - Agar object me property missing ho, to default assign kar sakte ho:
const { price = "Free" } = course;
console.log(price);  // agar price na ho to "Free"


// Spread/Rest operator with destructuring
const { courseInstructor, ...rest } = course;  // courseInstructor ke aage ki sari properties ...rest me stoare ho jayengi 
console.log(courseInstructor);  // O/p: Hitesh sir

console.log(rest);  // O/p: { courseName: 'JS in Hindi', price: '999' }


// Nested destructuring - Agar object ke andar aur object hai, to direct destructuring possible hai:
const user = {
    name: "Nano",
    address: {
        city: "Latur",
        pin: 413512
    }
};

const { address: { city, pin } } = user;
console.log(city, pin);


// Array destructuring
const users = ["Nano", "Abhi", "Gaju"];
const [first, second] = users;
console.log(first, second); // 'Nano' 'Abhi'


// Destructuring in react example.
const navbar = ({ company }) => {

}

navbar(company = "farmate")


// JSON API (Its just javascript object notation)
/*
* Example of json object:
   {
    "name" : "Hitesh",
    "coursename" : "JS in Hindi",
    "price" : "free"
    }  

*/

// JSON.parse() and JSON.stringify()
const jsonStr = '{"name":"Nano","age":23}';
const obj = JSON.parse(jsonStr);  // JSON → Object
console.log(obj.name);

const str = JSON.stringify(obj);  // Object → JSON
console.log(str);


/* 
* https://api.github.com/users/hiteshchoudhary
{
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 113,
  "public_gists": 5,
  "followers": 50066,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-09-24T09:18:52Z"
}

It can be come in aaray fromat also. 
[
    {},
    {},
    {}
]

*/