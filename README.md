# Birthday Card Web App - Professional README

![Project Preview](https://i.imgur.com/JQZ1x8l.gif)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview

This is an elegant, interactive birthday card web application built with modern web technologies. The card features a beautiful 3D flip animation when opened, multiple pages with heartfelt messages, and an interactive cake with candles that can be lit with a click. The project is designed to be fully responsive and works across all device sizes.

## Features

✨ **Interactive 3D Card**:
- Realistic card flip animation when opened
- Multiple interior pages with smooth transitions

🎂 **Interactive Cake**:
- Clickable cake that lights all candles
- Realistic candle flickering animation
- Celebration trigger when all candles are lit

🎉 **Celebration Effects**:
- Confetti particle system
- Full-screen celebration overlay
- Animated emoji storm

📱 **Responsive Design**:
- Adapts to all screen sizes
- Mobile-friendly touch interactions
- Optimized performance

## Technologies Used

**Frontend**:
- HTML5, CSS3, JavaScript (ES6+)
- [Bootstrap 5](https://getbootstrap.com/) - Responsive layout framework
- [Animate.css](https://animate.style/) - CSS animations
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) - Celebration effects

**Development Tools**:
- Visual Studio Code
- Git for version control
- Chrome DevTools for debugging

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/birthday-card.git
   cd birthday-card
   ```

2. **Install live server (optional)**:
   If you don't have a local server, you can install one with npm:
   ```bash
   npm install -g live-server
   ```

3. **Run the project**:
   ```bash
   live-server
   ```
   This will automatically open the project in your default browser.

## Usage

1. **Opening the Card**:
   - Click on the card cover to initiate the 3D flip animation

2. **Navigating Pages**:
   - Use the "Next" buttons to move between card pages
   - Three interior pages: message, wishes, and interactive cake

3. **Interactive Cake**:
   - Click anywhere on the cake to light all candles
   - Click again to blow out the candles
   - When candles are lit, the "Celebrate" button appears

4. **Celebration Mode**:
   - Click "Celebrate" to trigger confetti and celebration overlay
   - Click "Close" to return to the card

## Customization

You can easily personalize this card for different recipients:

1. **Change Text Content**:
   - Edit messages in `index.html` (look for the message-box and wish-item sections)

2. **Modify Visual Elements**:
   - Adjust colors in `styles.css` (search for color codes)
   - Change cake size or candle count in both HTML and CSS

3. **Add More Pages**:
   - Duplicate one of the card-page divs
   - Update the navigation logic in script.js

4. **Change Animations**:
   - Browse [Animate.css](https://animate.style/) for different animations
   - Replace animation classes in HTML and JavaScript

## Deployment

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Push your code to the main branch
3. Go to Settings > Pages
4. Select "main" branch and "/ (root)" folder
5. Click "Save" - your site will be live at `https://username.github.io/repository-name`

### Netlify Deployment

1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Netlify will automatically deploy your site

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## License

Distributed under the MIT License. See `LICENSE` for more information.

Acknowledgements

- [Animate.css](https://animate.style/) for wonderful animations
- [Bootstrap](https://getbootstrap.com/) for responsive layout
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) for celebration effects
- All contributors who helped improve this project

Project Maintainer: [Laiba Saleem](https://github.com/your-username)

Special Thanks: To all the birthday celebrants who inspired this project!

