import SAR from '../images/SAR.png';
import FTG from '../images/FTG.png';
import SAR_V2 from '../images/SAR_V2.png';
import FTG_ALGO from '../images/FTG_AlGO.png';

import SAP_1 from '../images/nlp-1.png'
import SAP_2 from '../images/nlp-2.png';
import SAP_3 from '../images/nlp-3.png';
import SAP_4 from '../images/nlp-4.png';
import ROB_1 from '../images/rob-1.png';
import ROB_2 from '../images/rob-2.gif';
import ROB_3 from '../images/rob-3.gif';


export const PORTFOLIO = [
    {
        name: "SEARCH AND RESCUE", 
        title: "ROBOTICS: SEARCH AND RESCUE",
        src: SAR,
        linkToPPT: 'https://myuva-my.sharepoint.com/:p:/g/personal/sju5dq_virginia_edu/EVwnowosTM1Bh-X4dQv8wH4Ba0NoErVNG9HPcuawEFXV-w?e=OeXiVp&nav=eyJzSWQiOjExNDEsImNJZCI6MjA0MzUyMDA4NX0',
        linkToPDF: 'smth',
        className: 'SAR',
        media: [
            {
                type: 'image',
                src: SAR_V2, 
                width: 6,
            }, 
            {
                type: 'video',
                src: "https://drive.google.com/file/d/1tm-QuS8cvZ7NJH1ewNAJKN6g7h2FfW8j/preview", 
                width: 6,
            }, 
            {
                type: 'image',
                src: FTG, 
                width:6,
            },

            {
                type: 'image',
                src: FTG_ALGO, 
                width: 6,
            }, 
        ],
        points: [
            "Developed a search and rescue robotics application addressing the Traveling Salesman Problem (TSP) with obstacle avoidance using innovative \"follow the gap\" methodology.",
            "Executed simulated rescue operations at various locations, prioritizing based on urgency and implementing a unique approach to enhance the proposed method for obstacle avoidance from the paper.",
            "Utilized ROS as the underlying operating system, coding in Python to enable robot movement and decision-making solely through lidar data points."
        ],
        width: 6
    }, 

    {
        name: "Sentiment Analysis", 
        title: "Sentiment Analysis Equivalence in Political Campaign Ads",
        src: SAP_2,
        linkToPPT: 'https://myuva-my.sharepoint.com/:p:/g/personal/sju5dq_virginia_edu/EVwnowosTM1Bh-X4dQv8wH4Ba0NoErVNG9HPcuawEFXV-w?e=OeXiVp&nav=eyJzSWQiOjExNDEsImNJZCI6MjA0MzUyMDA4NX0',
        linkToPDF: 'smth',
        className: 'SAP',
        media: [
            {
                type: 'image',
                src: SAP_1, 
                width: 6,
            }, 
            {
                type: 'image',
                src: SAP_2, 
                width: 6,
            }, 
            {
                type: 'image',
                src: SAP_3, 
                width:6,
            },

            {
                type: 'image',
                src: SAP_4, 
                width: 6,
            }, 
        ],
        points: [
            "Developed and implemented advanced NLP techniques, including BERT for sentiment analysis and T5-small for translation, to assess sentiment variations in ads across languages.",
            "Applied Metamorphic Testing to ensure consistency in sentiment scores between English and Spanish versions of political ads.",
            "Utilized statistical methods, including two-sided T-tests, to analyze and validate the significance of sentiment shifts.",
            "Found minimal baseline sentiment shifts between English and Spanish ads, demonstrating consistency in sentiment across languages.",
            "Examined over 320 Spanish-English pairs from 25 elections in 5 states, providing a comprehensive and diverse dataset for analysis.",
            "Identified statistically significant sentiment shifts in English to Spanish translations, indicating potential language-specific nuances in political advertising.",
            "Discovered differences in ad sentiment between political parties, with Democrats exhibiting more positive advertising in Spanish, while Republicans had a higher proportion of negative ads."
        ],
        width: 6
    }, 

    {
        name: "Spherical Geodesics", 
        title: "Spherical Robotics Navigation",
        src: ROB_1,
        linkToPPT: 'https://docs.google.com/presentation/d/1tKK8bkeBiy39LsmjGBQtXTEpz37du5wO19JVQbKd4Es/edit?usp=sharing',
        linkToPDF: 'smth',
        className: 'ROB',
        media: [
            {
                type: 'image',
                src: ROB_2, 
                width: 6,
            }, 
            {
                type: 'image',
                src: ROB_3, 
                width: 6,
            }, 
            {
                type: 'image',
                src: ROB_1, 
                width:12,
            },

        
        ],
        points: [
            "Led a team in exploring the application of differential geometry to enhance navigation solutions for spherical robotics, delving into concepts such as Exponential and Logarithmic Mapping.",
            "Developed a novel approach using Stereographic Projection to simplify the navigation problem from a curved surface to a more manageable 2D plane, providing insights into alternative path-planning strategies.",
            "Extended the navigation model to address non-holonomic challenges, successfully integrating PID control, steering mechanisms, goal handling, odometer tracking, and a comprehensive navigation system.",
            "Achieved results showcasing Stereographic Projection's effectiveness in producing non-optimal paths but with simpler implementation, while Exponential and Logarithmic Mappings offered accuracy despite introducing some overhead."
        ],
        width: 12
    }, 
];