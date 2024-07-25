

// export const quotes = [
//     "Farming the future with technology.",
//     "Seeds of innovation grow the future of agriculture.",
//     "Tech in the soil, growth in the future.",
//     "Smart farming, brighter harvests.",
//     "Plants and pixels: cultivating the future.",
//     "From plows to pixels: the evolution of agriculture.",
//     "Sow the bytes, reap the innovation.",
//     "In the fields of progress, technology is the crop.",
//     "Agriculture meets innovation in every seed.",
//     "Harvesting data, growing success.",
//     "Smart tech, brighter agri-future.",
//     "Cultivating tomorrow with today's technology.",
//     "Sow the tech, reap the harvest.",
//     "In the fields of agriculture, technology is the new plow.",
//     "Seeds of innovation, fields of prosperity.",
//     "Agriculture meets algorithms for a fruitful future.",
//     "Planting progress, harvesting success.",
//     "Farming the future with bytes and bales.",
//     "From plows to pixels, cultivating a tech-savvy harvest.",
//     "Smart farming, growing solutions.",
//     "In the world of agriculture, technology is the new sunrise."
// ]

// export function getRandomQuote() {
//     let n = quotes.length-1;
//     let randomIndex = Math.floor(Math.random() * (n + 1));
//     return quotes[randomIndex];
// }



// export function adjustWidth(isSidebarOpen){
    
//     const screenWidth = window.innerWidth;
//     if(screenWidth>991){
//         if(isSidebarOpen===true){
            
//             document.getElementsByClassName('main-panel')[0].style.width = 'calc(100% - 70px - 0.55rem)';
//             document.getElementsByClassName('main-panel')[0].style.marginLeft = 'calc(70px + 0.55rem)';
//             document.body.classList.add('sidebar-icon-only');
//             return false;
//         }else{
//             document.getElementsByClassName('main-panel')[0].style.width = 'calc(100% - 260px)';
//             document.getElementsByClassName('main-panel')[0].style.marginLeft = 'calc(227px + 2rem)';
//             document.body.classList.remove('sidebar-icon-only');
//             return true;
//         }
//     }else{
      
//         document.getElementsByClassName('main-panel')[0].style.width = '100%';
//         if(isSidebarOpen===true){
//             return false;
//         }else{
//             return true;
//         }
//     }
    
// }

export const FranchiseList = [
    {
        id : 1,
        name : "Vimal Kumar Verma",
        districts : [
            {
                name : 'Barabanki',
                map : '',
                image : 'https://c2.staticflickr.com/2/1165/5134913990_06ecdf0f02_b.jpg'
            }
        ]
    },
    {
        id : 2,
        name : "Brijesh Kumar",
        districts : [
            {
                name : 'Barabanki',
                map : '',
                image : 'https://c2.staticflickr.com/2/1165/5134913990_06ecdf0f02_b.jpg'
            }
        ]
    },
    {
        id : 3,
        name : "Gajraj Verma",
        districts : [
            {
                name : 'Barabanki',
                map : '',
                image : 'https://c2.staticflickr.com/2/1165/5134913990_06ecdf0f02_b.jpg'
            }
        ]
    },
    {
        id : 4,
        name : "Suraj Kumar",
        districts : [
            {
                name : 'Barabanki',
                map : '',
                image : 'https://c2.staticflickr.com/2/1165/5134913990_06ecdf0f02_b.jpg'
            }
        ]
    },
    {
        id : 5,
        name : "Triveni Enterprises",
        districts : [
            {
                name : 'Barmer',
                map : '',
                image : 'https://thumbs.dreamstime.com/b/kiradu-temples-group-ruined-hindu-located-barmer-district-rajasthan-india-223512470.jpg',
            },
            {
                name : 'Jaisalmer',
                map : '',
                image : 'http://fantabulousholidays.com/wp-content/uploads/2020/04/jaisalmer-fort-e1586781522550.jpg'
            }
        ]
    },
    {
        id : 6,
        name : "Krish Iratna Agro Solutions",
        districts : [
            {
                name : 'Pali',
                map : '',
                image : 'https://www.trvme.com/img/destinations/pali-img2.jpg'
            }
        ]
    },
    {
        id : 7,
        name : "BharatRohan Innovation Foundation",
        districts : [
            {
                name : 'Nagpur',
                map : '',
                image : 'https://i.pinimg.com/originals/e7/75/85/e77585852c459d80b4883f409a1361a5.jpg'
            }
        ]
    },
    {
        id : 8,
        name : "Tushar Sanjay Pawar",
        districts : [
            {
                name : 'Jodhpur',
                map : '',
                image : 'https://static.toiimg.com/photo/msid-86481170,width-96,height-65.cms'
            }
        ]
    },
    {
        id : 9,
        name : "Neelima Pawar",
        districts : [
            {
                name : 'Beawar',
                map : '',
                image : 'http://fantabulousholidays.com/wp-content/uploads/2020/04/jaisalmer-fort-e1586781522550.jpg'
            }
        ]
    },
]