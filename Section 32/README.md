
# Section 32 - Authentication & Security

**About:** As I am creating websites/web apps for users to use then these users are going to start generating data. They might like certain posts or interact with other users, there might be messages created or recipes created. There is always going to be some user data created. In order to associate those pieces of data with individual users, I need to create an account for each user so that they would sign up to my website using a username and password and I could essentially create kind of like an ID card for them to uniquely identify them on my database and to save all of the data that they generate onto that account. So, the next time they come back onto the website, they'll be able to use their username and password and login to my website and be able to access all of those possibly private pieces of information. This way, I don't end up with everybody being able to see each others' private messages. The other reason I need authentication to my website is to restrict access to certain areas of the website depending on the status of the user. For example, if I had a website like Spotify or Netflix and I charged a subscription fee for accessing certain parts of my website then once the user pays, I have to update their account in my database to say that they have paid and they will be allowed to access the premium content. Those are some of the reasons why I need authentication to my website but, authentication can be done in a number of ways. A) Creating a website where users can sign up and login seems simple enough but, the difficult part of authentication comes from how secure I am going to make my website. In this section, I tackled the problem of authentication by going through the different levels of security. So, I went from the very basic - creating an account, adding the user to my database, saving their username and password to enable them to login, all the way up to covering things like OAuth and social logins including creating things as sessions and cookies and hashing and encrypting passwords.

**Project:** There is a app called [Whisper](https://apps.apple.com/us/app/whisper-share-express-meet/id506141837) that you might have come across and it is a really simple concept. Basically, it allows people to submit their secrets anonymously. So, whatever they post, it is not associated with an email or a username and it means that people can express themselves freely. It is quite a fun website and this is what I tried and replicated in this project. The structure of my website is simple, it has a home page which has two buttons that allows the user to either go towards registration or towards login. Once the user has registered or logged in, and they have been authenticated then they are able to access the secrets page.

## Lesson Learned
- Levels of Authentication:
    - Level 1: Storing the Username and password in Database as plain text
    - Level 2: Encryption and Adding Environmental Variables
    - Level 3: Hashing
    - Level 4: Hashing & Salting
    - Level 5: Cookies & Sessions 
    - Level 6: Google OAuth 2.0 Authentication
- Register Users with Username and Password
- Database Encryption
    - mongoose-encryption
- Using Environmental Variable to Keep Secrets Safe
    - dotenv
- Hashing Passwords
    - md5
- Hacking
- Hashing & Salting Passwords
    - bcrypt
- Cookies and Sessions
    - Passport.js
    - passport-local
    - passport-local-mongoose
    - express sessions
- OAuth: Open Autherization
- Implement Sign In with Google
- Letting Users Post
## Screenshots

![1](https://user-images.githubusercontent.com/50435319/210315648-887e5584-f1e5-44dc-8f50-034e9130d525.PNG)
![2](https://user-images.githubusercontent.com/50435319/210315651-838504ae-d4ab-459a-bd03-a62f3453f957.PNG)
![3](https://user-images.githubusercontent.com/50435319/210315654-2afd8ee8-7111-4ee5-9805-0c280b17bede.PNG)
![4](https://user-images.githubusercontent.com/50435319/210315658-8a623453-d0ba-4296-8580-d67643712a11.PNG)
![5](https://user-images.githubusercontent.com/50435319/210315663-8df37a92-2fca-478a-b481-07c0a81b4817.PNG)
![6](https://user-images.githubusercontent.com/50435319/210315667-70bf09b6-a87b-4f81-9274-5ce19880b6ab.PNG)

## Authors

- [@bhoamikhona](https://github.com/bhoamikhona)

