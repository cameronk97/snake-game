<h1 align="center">Snake</h1>

[View the live project here.](https://cameronk97.github.io/snake-game/)

This is a website for a classic game of snake. It is designed to be responsive and accessible on a range of devices, making it easy to navigate, access and play from anywhere for people of all ages.

<h2 align="center"><img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678830490/Snake/responsive-mockup_hdhgmd.png"></h2>

## Index – Table of Contents
* [User Experience (UX)](#user-experience-ux) 
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site and play the game.
        3. As a First Time Visitor, I want to be easily able to understand how to play the game.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to be able to keep track of my score and high score.
        2. As a Returning Visitor, I want to be able to play the game without the page scrolling when I use my keyboard arrow keys.
        3. As a Returning Visitor, I want a pleasant visual experience.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to be able to play the game on different devices.
        2. As a Frequent User, I want to be able to quickly start a new game.
        3. As a Frequent User, I want to be able to clearly recognise the website in my browser tabs.

-   ### Design
    -   #### Colour Scheme
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678833743/Snake/colour-palette_i1sqta.png">
        The colour scheme was chosen to create a retro arcade game aesthetic. To fit this theme, a dark background colour with contrasting, vibrant colours were used.
    -   #### Typography
        -   The 'Press Start 2P' font is used for the logo, start game button and restart button. This font was chosen to tie in with the retro arcade game theme.
        - The 'Gruppo' font is used throughout the rest of the website with Sans-Serif as the fallback font because Sans-Serif fonts are more accessible for people with reading difficulties.
    -   #### Imagery
        -   The start screen image is designed to be striking and catch the user's attention. It also has a bright and playful, retro aesthetic.

-   ### Wireframes
    <details><summary>Homepage Wireframe</summary>
    <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678836728/Snake/homepage-wireframe_lnfq0y.png">
    </details>
    <details><summary>Gameplay Wireframe</summary>
    <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678836793/Snake/gameplay-wireframe_pcxcjc.png">
    </details>
    <details><summary>Game Over Wireframe</summary>
    <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678836807/Snake/gameover-wireframe_xo2nhy.png">
    </details>
    <details><summary>Mobile Wireframe</summary>
    <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678836828/Snake/mobile-wireframe_zow450.png">
    </details>

## Features

- ### Existing Features
    -   #### Header
        * The header consists of a logo with the game title, the header is responsive and works on all screen sizes:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678855225/Snake/header_gbjord.png">
    -   #### Game Information
        * The game information section is tailored to display slightly different instructions for different devices.
        * In both cases the game controls, the aim of the game and the rules are outlined.
        * For Laptop & Desktop:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678887238/Snake/game-information_pzk2vx.png">
        * For Mobile Devices:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678888009/Snake/mobile-game-info_uv3adn.png">
    -   ####  Game Score & Highscore
        * The game scores section keeps track of the user's current game score and gets the user's high score from local storage.
        * The scores are displayed clearly above the game area:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678886598/Snake/game-scores-section_iwnk2a.png">
    -   #### Start Screen
        * The start screen consists of a bright, colourful image created by the developer in MS Paint.
        * The start screen is responsive and works on all screen sizes.
        * The image used is intended to catch the user's attention and spark their imagination.
        * The colour scheme of the website is featured in the image.
        * The art style was chosen to fit with the classic, retro game theme:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678888696/Snake/start-screen_rlsjjj.png">
        * The start screen also contains a 'Play Game' button, which when clicked will trigger the game screen to display so that the user can play the game:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678890010/Snake/play-game-button_bantql.png">
        * The 'Play Game' button also gives visual feedback to the user when hovered over that the button is clickable, by changing colours and cursor.
        * This makes the website more dynamic:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678890161/Snake/play-game-button-hover_urbmhl.png">
    -   #### Gameplay Area
        * The gameplay area consists of a grid with a grey background colour to optimize visibility against both the dark website background and bright game elements.
        * Another element of the gameplay area is the turquoise-coloured snake, which grows after every collision with the food. The direction of the snake can be controlled by the user through using the keyboard arrow keys or the arrow button controls that display on-screen for mobile users.
        * The gameplay area also displays a randomly-placed, red-coloured food which disappears when the snake collides with it, then reappears randomly-placed on the grid again.
        * It is important that the game can be played all devices so the gameplay area was designed to be responsive and work well on all screen sizes.
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678890869/Snake/gameplay_cpccvb.png">
    -   #### Game Over Screen
        * The game over screen is displayed when the player loses the game.
        * The game over screen image was created by the developer in MS Paint.
        * The game over screen image was designed to fit the theme and colour scheme of the website.
        * The game over screen is responsive and works on all screen sizes.
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678899789/Snake/game-over_hfhgp1.png">
        * The game over screen also contains a 'Restart' button, which when clicked will trigger the game to reset and the start screen to display:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678899907/Snake/restart-button_c2yhh8.png">
        * The 'Restart' button also gives visual feedback to the user when hovered over that the button is clickable, by changing colours and cursor.
        * This is consistent with the styling of the 'Play Game' button on the start screen, and helps to make the website more dynamic:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678900101/Snake/restart-button-hover_jomwyc.png">
    -   #### Arrow Control Buttons for Mobile Devices
        * The arrow control buttons are displayed for mobile screen sizes:
        <br><strong>On Mobile:</strong><br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678902501/Snake/mobile-control-buttons_uhbqlz.png">
        <br><strong>On Tablet:</strong><br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678902532/Snake/tablet-controls_qodk3e.png">
        * These mobile control buttons change the direction of the snake in the game.
        * The mobile control buttons provide visual feedback to mobile users by displaying a ripple effect when tapped.
        * These buttons enable the game to be easily played on all devices:
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678900775/Snake/mobile-controls_xmm4yb.png">
    -   #### Footer
        * The footer is consistent with the colour scheme of the website.
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678904634/Snake/footer_v9vfqj.png">

    -   #### Favicon
        * A favicon was added to make the website easier for users to recognise and access in their browser tabs and history.
        <br>
        <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678904841/Snake/favicon_tu93xn.png">

- ### Features for Future Implementation
    * I would like to implement more complex JavaScript code to reset the game and return to the start screen when the 'Restart' button is clicked.
    * Some music or game sounds could be added to the website with a button so that users can decide whether they want sound or not.
    * Introducing a leaderboard where players can submit their names and scores could make the game more competitive.
    * A celebratory screen could be added to display when a user sets a new high score.
    * Various difficulty levels could be introduced.

## Technologies Used

-   ### Languages Used
    * [HTML](https://en.wikipedia.org/wiki/HTML5) - To create the basic structure of the site.
    * [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - To style the website.
    * [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - For the logic of the game and website.

-   ### Frameworks, Libraries & Programs Used
    1. [Lighthouse:](https://developers.google.com/web/tools/lighthouse)
    <br> Lighthouse was used for testing code health, accessibility, speed and search engine optimisation.
    1. [Google Fonts:](https://fonts.google.com/)
    <br> Google fonts was used to import the 'Press Start 2P' and 'Gruppo' fonts into the style.css file.
    1. [Font Awesome:](https://fontawesome.com/)
    <br> Font Awesome was used for the arrow icons on the mobile control buttons.
    1. [GitPod:](https://gitpod.io/workspaces)
    <br> Gitpod was used to develop project and organise version control.
    1. [Git:](https://git-scm.com/)
    <br> Git was used for version control by utilizing the Gitpod terminal to commit to Git and 
    Push to GitHub.
    1. [GitHub:](https://github.com/)
    <br> GitHub is used to store the projects code after being pushed from Git.
    1. [MS Paint:](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H)
    <br> MS Paint was used to create the start screen and game over screen images.
    1. [Favicon Generator:](https://realfavicongenerator.net/)
    <br> This was used to generate the favicon for the website.
    1. [Balsamiq:](https://balsamiq.com/)
    <br> Balsamiq was used to create the [wireframes](#wireframes) during the design process.
    1. [Chrome DevTools:](https://developers.google.com/web/tools/chrome-devtools/)
    <br> Chrome DevTools was used for testing code on various device sizes during development and 
     debugging.
    1. [Coolors:](https://coolors.co/)
    <br> Coolors was used to generate the colour scheme.

## Testing

### Site Responsiveness

- [Responsive Design Checker](https://responsivedesignchecker.com/) was used to test the site's responsiveness:
   <details><summary>Mobile:</summary>
   <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678950611/Snake/responsive-mobile_zgepvb.png"></details>
   <details><summary>Tablet:</summary>
   <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678950485/Snake/responsive-tablet_mzgl6c.png"></details>
   <details><summary>Desktop:</summary>
   <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678950469/Snake/responsive-desktop_doa2uj.png"></details>


### Validation
   #### HTML:
   * The [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to test the HTML pages for syntax errors.
   * No errors were found in the index.html code, but 3 warnings are shown for the game information, game scores and game area sections not having headings.
   * I don't believe that headings would add anything to these sections but I think that using section tags is better semantically than using divs in these instances:
   <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678952742/Snake/index-html-validation_jgwxxf.png">
   * The 404.html page passes the validator without any errors or warnings:
   <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678953293/Snake/error-validation_a7cfwu.png">
   #### CSS:
   * The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to test style.css for errors.
   * No errors were found.
   <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678953667/Snake/Screenshot_1412_zyeqvl.png">
   #### Javascript:
   * [JSHint](https://jshint.com/) was used to test the script.js file.
   * No errors were found.

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site.

        1. Upon entering the site, users are automatically greeted with a large, bold logo with the name of the game.
        2. Underneath this, the game infomation section describes the aim of the game.
        3. The colourful start game screen featuring the 'Play Game' button and snake illustration make it immediately clear that the purpose of this site is to play a game of snake.

    2. As a First Time Visitor, I want to be able to easily navigate throughout the site and play the game.

        1. The site is simple to navigate, consisting of a single page.
        2. The start screen catches the user's attention and imagination, drawing their eyes to the 'Play Game' button.
        3. The 'Play Game' button gives the user visual feedback when hovered over with the cursor,encouraging the user to click.

    3. As a First Time Visitor, I want to be easily able to understand how to play the game.
        1. The game information section outlines how to play the game. This section is immediately visible to the user, located right below the header. This section is clean, concise and simple to maximize readability for all users.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to be able to keep track of my score and high score.

        1. These are clearly shown in the game scores section, just below the game information section and directly above the game area.
        2. The game scores section updates automatically and is always easy for users to see while playing the game.

    2. As a Returning Visitor, I want to be able to play the game without the page scrolling when 
       I use my keyboard arrow keys.

        1. The default arrow key actions are disabled to help user's focus and make playing the game more pleasant overall.

    3. As a Returning Visitor, I want a pleasant visual experience.
        1. The colour scheme used is playful and is intended to evoke a sense of fun and nostalgia for users.

-   #### Frequent User Goals

    1. As a Frequent User, I want to be able to play the game on different devices.

        1. The website and game are responsive on all screen sizes so that users can play on any device.

    2. As a Frequent User, I want to be able to quickly start a new game.

        1. The game over screen displays a 'Restart' button which quickly returns the user to the start game screen.
        2. The user can then start a new game easily.

    3. As a Frequent User, I want to be able to clearly recognise the website in my browser tabs.
        1. The website has a favicon to help users recognise the website with ease.

### Manual Testing

The website was sent to multiple people for testing and feedback.  
I played through the same countless times, seeking to uncover bugs and optimize user experience.  

| Feature              | Expected outcome                               | Does it work?  |
| -------------        |:-------------:                                                                                    | -----:|
| Title logo | Appears in the header at the top of the page and links to the homepage   | Yes |
| Score counters | Displays current score and high score above the game area.                                              |   Yes |
| Play Game button | Hides the start screen and displays the game screen featuring the snake and food.                             |  Yes |
| Mobile Controls |  Display for mobile and tablet devices and change the direction of the snake.          |  Yes   |
| Restart button |  resets the game and returns users to the start screen   |  Yes    |
| Return to game button  | displays on the 404 page and brings users back to the homepage.                                                             |   Yes  |
| Game Area |  displays the game         |  Yes |
| Snake |   appears in the game area, can be controlled by arrow keys and grows when food is consumed     |  Yes  |
| Food |  Appears randomly-placed on the grid and reappears after being consumed.       |  Yes  |
| Keyboard controls |   Change the direction of the snake in the game             |   Yes  |  

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge, Firefox and Safari 
    browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop and multiple mobile 
    devices.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   A great amount of testing was done to ensure that there were no bugs affecting the gameplay.
-   Friends and family members were asked to play the game and provide feedback to point out any 
    bugs and/or user experience issues.
-   Lighthouse was used to test the site on Google Chrome:
    <img src="https://res.cloudinary.com/dksu5snru/image/upload/v1678958997/Snake/lighthouse_pvfctk.png">

### Bugs
#### <em>Fixed:</em>
- Initially, I considered using a canvas element for the game area, but this proved tricky to resize for smaller screen sizes without breaking the game. Instead, I decided to use a CSS grid layout for the game area, which solved the resizing issue and made the game more responsive.
- I was having an issue with the page scrolling when the keyboard arrow keys were used to play the game, which was frustrating for players. I solved this issue by adding an event listener to the script.js file so that on the keydown of any of the keyboard arrow keys the default actions belonging to these events will not occur.
- I noticed that if the arrow keys or controls were pressed while the start screen was displaying, the game would play in the background without being displayed and once a game over condition was met (i.e. the snake hit one of the walls) the game over screen would display without the user ever actually playing the game. I solved this issue by declaring a variable named displayGame which is set to false while the start screen or game over screens are being displayed, and set to true only when the game area is being displayed. I then added an if condition to the game controls, so that they can only be used if the game area is displaying to the user.

#### <em>Still Existing:</em>
- No known bugs at this time.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/cameronk97/snake-game)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://cameronk97.github.io/snake-game/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/cameronk97/snake-game)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/cameronk97/snake-game)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   This video tutorial was used to write the code for the snake game: [CodingNepal](https://youtu.be/K8Rh5x3c9Pw)

- Code from this site was used to import the favicon: [w3schools](https://www.w3schools.com/html/html_favicon.asp#:~:text=To%20add%20a%20favicon%20to,is%20%22favicon.ico%22.)

-   Code from this site was used to create a ripple effect for the mobile control buttons and give appropriate visual feedback to users: [CodePen](https://codepen.io/finnhvman/post/pure-css-ripple-with-minimal-effort)

- Code from this site was used to centre the 'Play Game' and 'Restart' buttons on the start and game over screens: [w3schools](https://www.w3schools.com/howto/howto_css_center_button.asp)

- Code from this site was used to disable the default keyboard arrow key functions: [Stack Overflow](https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser)

### Content

-   The Snake game was inspired by [this](https://youtu.be/K8Rh5x3c9Pw) video tutorial. I tried to deviate as much as possible from the code in the tutorial and add additional features.
-   The text content featured on the site was written by the developer.

### Media

- The icons used for the mobile arrow control buttons are from [Font Awesome](https://fontawesome.com/)
- The fonts used were imported from [Google Fonts](https://fonts.google.com/)
- The image was used for the favicon was downloaded from [Flaticon](https://www.flaticon.com/free-icon/snake_868705?term=snake&page=2&position=46&origin=tag&related_id=868705)
- This image, partly used in the creation of the start screen image was downloaded from [Freepik](https://www.freepik.com/free-vector/collection-mixed-pixelated-fruits_2632369.htm#query=pixel%20art%20icon%20FRUIT&position=1&from_view=search&track=ais)
- This royalty-free vector image, partly used in the creation of the start screen was downloaded from [Dreamstime](https://www.dreamstime.com/bright-birthday-party-invitation-pixel-art-vector-illustration-game-happy-celebration-flat-style-snake-following-apple-fun-image173095772)
- The game over image was created by the developer in MS Paint.

### Acknowledgements

<em>I would like to take the opportunity to thank:</em>
-   My mentor Richard Wells for continuous helpful feedback and guidance.
-   My partner Jamie for all of the support and encouragement and for helping out a lot with 
    testing the game.
-   My friends for helping with testing the game on different devices and providing useful 
    feedback and suggestions.
-   My Cohort Facilitator Irene for her support and helpful advice on Slack throughout the 
    development of this project.