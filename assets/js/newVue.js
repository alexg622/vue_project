var header = new Vue({
    el: '#header',
    data: {
        yourName: "Kathryn Patterson",
        description: "Marketing Specialist",
        link1: "Home",
        link2: "Portfolio",
        link3: "Resume",
        link4: "Contact",
        link5: "About",
        link6: "Blog",
        link7: "Services",
        link8: "Capstone",
        avatar: "images/me.jpg"
    }
})

var portfolio = new Vue ({
    el: '#portfolio',
    data: {
        portfolioTitle: "My Work",
        image1: "images/Blog Banner (1).png",
        imgText1: "Graphic Design Example 1",
        image2: "images/kp-photography-header (1).jpg",
        imgText2: "Graphic Design Example 2",
        image3: "images/kp-portfolio-cover.png",
        imgText3: "Graphic Design Example 3",
        image4: "images/LOGOKP2 (1).png",
        imgText4: "Graphic Design Example 4",
        image5: "images/marketer.png",
        imgText5: "Graphic Design Example 5",
        image6: "images/2.png",
        imgText6: "Graphic Design Example 6"
    }
})

var top = new Vue ({
    el: '#top',
    data: {
        intro: "Hi, I'm Kathryn!",
        blurb: "Welcome to my portfolio!",
        learnMore: "Learn More!",
        banner: "images/newBanner.jpg"
    }
})

var about = new Vue ({
    el: '#about',
    data: {
        featImg: "images/kp-portfolio-cover.png",
        facts: "I am a Marketing Communications professional based in the Greater Atlanta Area. I’m also actively pursuing a Master’s Degree in Journalism and Mass Communication, with an emphasis in Emerging Media Studies at the UGA College of Grady. I chose to pursue a graduate degree in Journalism with an Emerging Media concentration, because my dream is to expand my knowledge on the newest emerging tech. The courses I have taken in my journey thus far include: web development, graphic design, and new age media such as videography and photography."
    }
})

var contact = new Vue ({
    el: '#contact',
    data: {
        description: "Need to contact me? No problem! Feel free to send me a message and I will get back to you as soon as possible!"
    }
})

var list = new Vue ({
    el: '#list',
    data: {
        favorites: ['Marketing', 'Photography', 'Design']
    }
})

var conditional = new Vue ({
    el: '#conditional',
    data: {
        teacherName: "",
        courseName: ""
    }
})

var getColor = new Vue ({
    el: '#function',
    data: {
        bgColor: '',
        divWidth: '',
        colors: [
            {
                color: 'red',
                width: '100px'
            },
            {
                color: 'green',
                width: '300px'
            },
            {
                color: 'blue',
                width: '400px'
            }
        ]
    },
    methods: {
        changeColor(color) {
            this.bgColor = color.color
            this.divWidth = color.width
        }
    }
})
