
## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Build](#build)
- [Contributing](#contributing)

## Features
- **Educator Features:**
  - Create and publish quizzes under various categories.
  - Generate and download question papers using ready-made templates.
- **Student Features:**
  - Access and take quizzes through personalized dashboards.
  - Each quiz can be taken only once.

## Tech Stack
- **Frontend:** Angular 17, Angular Material
- **Backend:** Spring Boot
- **Database:** MySQL
- **Authentication:** JWT Auth

## Installation

### Prerequisites
- Node.js and npm
- Java Development Kit (JDK)
- MySQL

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/magnet107/EduQuizPortal.git
    cd EduQuizPortal/Backend
    ```
2. Set up the MySQL database:
    ```sql
    CREATE DATABASE <databaseName>;
    ```
3. Configure the application properties:
    - Edit `src/main/resources/application.properties` to match your MySQL database configuration.
4. Build and run the backend:
    ```bash
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd ../Frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the frontend:
    ```bash
    ng serve
    ```
    
 **Note:** You have to create admin(Educator) manually.
 1. You can either insert an admin user manually into the database.
 2.  You can write the code for admin creation. Below is the sample code, 
 ```bash
 @SpringBootApplication  
public class BackendApplication implements CommandLineRunner {  
  
    @Autowired  
  private userRepository userRepository;  
  
    @Autowired  
  private PasswordEncoder passwordEncoder;  
  
    public static void main(String[] args)  
    {  
       SpringApplication.run(BackendApplication.class, args);  
    }  
  
    @Override  
  public void run(String... args) throws Exception {  
  
       Role admin=new Role();  
       admin.setRoleName("ADMIN");  
  
       User user=new User();  
       user.setEmail("sample@gmail.com");  
       user.setPassword(passwordEncoder.encode("password"));  
       user.setPhone("1234567890");  
       user.setFirstName("abc");  
       user.setLastName("xyz");  
       user.setUsername("admin");  
  
       userRole userRole=new userRole();  
       userRole.setRole(admin);  
       userRole.setUser(user);  
       Set<userRole> roles=new HashSet<>();  
       roles.add(userRole);  
       user.setUserRoles(roles);  
       userRepository.save(user);  
  
    }  
}
```
## Usage
1. Open your browser and navigate to `http://localhost:4200/signup` to access the signup page.
2. Educators can log in to create and manage quizzes.
3. Students can log in to access and take available quizzes.


## Build

### Backend
1. Build the Spring Boot application:
    ```bash
    ./mvnw clean install
    ```

### Frontend
1. Build the Angular application:
    ```bash
    ng build
    ```

## Contributing
Contributions are welcome :)
<br>
Please open an issue or submit a pull request for any improvements or bug fixes.
