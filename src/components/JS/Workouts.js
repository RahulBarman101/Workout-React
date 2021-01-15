import React, {useState} from 'react';
import '../Css/Workouts.css'
import Card from './Card';

function Workouts() {
    const [workouts, setWorkouts] = useState([
      {
        id: 1,
        name: "Jumping Jacks",
        img:
          "https://media.istockphoto.com/photos/happy-man-and-woman-jumping-outdoors-picture-id697893538?k=6&m=697893538&s=612x612&w=0&h=f5ZPUfgzYRViTsUZsO_Rb6H8DP2rUDrYexpfi8ouDKs=",
      },
      {
        id: 2,
        name: "Pushups",
        img:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1c2h1cHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "High Knees",
        img:
          "https://media.istockphoto.com/photos/handsome-black-sportsman-walks-highly-lifting-knees-picture-id1200935405?k=6&m=1200935405&s=612x612&w=0&h=qm5noOtY6NdJGJZEshsB7sUi7aaKX4hvLCsuJxju0MU=",
      },
      {
        id: 4,
        name: "Mountain Climber",
        img:
          "https://media.istockphoto.com/photos/strong-athletic-fit-man-in-tshirt-and-shorts-is-doing-mountain-a-picture-id1172739920?k=6&m=1172739920&s=612x612&w=0&h=bKwDanD7EkoBpTL2rsNUEdXXPtyMuHP4_cAiFUVHSdo=",
      },
      {
        id: 5,
        name: "Abdominal Crunches",
        img:
          "https://media.istockphoto.com/videos/working-on-those-abdominal-muscles-video-id1192936307?s=640x640",
      },
      {
        id: 6,
        name: "Burpees",
        img:
          "https://images.pond5.com/man-doing-burpees-exercise-fitness-footage-081321925_iconl.jpeg",
      },
      {
        id: 7,
        name: "Butt Kicks",
        img: "https://evofitness.at/wp-content/uploads/2017/05/15H.jpg",
      },
    ]);
    return (
    <div className="work" id='work'>
        <h1 className='tt'>Exercises Preview</h1>    
        <div className="exercises">
          {workouts.map((item) => {
            return <Card key={item.id} name={item.name} img={item.img} />;
          })}
        </div>
      </div>
    );
}

export default Workouts
