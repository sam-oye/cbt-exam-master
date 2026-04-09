export interface Question {
  id: number;
  section: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const rawQuestions =[
  {
    "section": "Mechanics",
    "question": "A particle is projected horizontally from the top of a tower of height 80 m with a speed of 30 m/s. What is the speed with which it hits the ground? (g = 10 m/s²)",
    "options": ["A. 30 m/s", "B. 40 m/s", "C. 50 m/s", "D. 60 m/s"],
    "correct_answer": "C. 50 m/s"
  },
  {
    "section": "Mechanics",
    "question": "A body of mass 2 kg moving with a velocity of 6 m/s collides head-on with a stationary body of mass 4 kg. If the collision is perfectly inelastic, what is the common velocity after collision?",
    "options": ["A. 1 m/s", "B. 2 m/s", "C. 3 m/s", "D. 4 m/s"],
    "correct_answer": "B. 2 m/s"
  },
  {
    "section": "Mechanics",
    "question": "A stone is thrown vertically upward from the edge of a cliff 50 m high with a speed of 20 m/s. What is the total time it takes to reach the bottom of the cliff? (g = 10 m/s²)",
    "options": ["A. 2 s", "B. 4 s", "C. 5 s", "D. 6 s"],
    "correct_answer": "C. 5 s"
  },
  {
    "section": "Mechanics",
    "question": "A particle moves along a straight line such that its displacement s = t³ - 6t² + 9t + 2 (in meters). At what time does the particle momentarily come to rest?",
    "options": ["A. 1 s and 3 s", "B. 2 s and 4 s", "C. 1 s only", "D. 3 s only"],
    "correct_answer": "A. 1 s and 3 s"
  },
  {
    "section": "Mechanics",
    "question": "A force of 10 N is applied at an angle of 60° to the horizontal to pull a 5 kg box across a rough horizontal floor. If the box moves at constant speed, what is the coefficient of kinetic friction? (g = 10 m/s²)",
    "options": ["A. 0.1", "B. 0.2", "C. 0.3", "D. 0.4"],
    "correct_answer": "A. 0.1"
  },
  {
    "section": "Mechanics",
    "question": "A satellite orbits the Earth at a distance of 3R from the Earth's center, where R is the Earth's radius. What is its orbital period in terms of the period T of a satellite close to Earth's surface? (Assume circular orbits)",
    "options": ["A. T/3", "B. T√3", "C. 3T", "D. 3√3 T"],
    "correct_answer": "D. 3√3 T"
  },
  {
    "section": "Mechanics",
    "question": "A 2 kg block is placed on a rough inclined plane of angle 30° to the horizontal. The coefficient of static friction is 0.5. What is the minimum force parallel to the plane required to prevent the block from sliding down? (g = 10 m/s²)",
    "options": ["A. 0 N", "B. 5 N", "C. 10 N", "D. 15 N"],
    "correct_answer": "A. 0 N"
  },
  {
    "section": "Mechanics",
    "question": "A projectile is fired with a velocity of 50 m/s at an angle of 53° above the horizontal. What is the maximum height attained? (g = 10 m/s², sin53° = 0.8, cos53° = 0.6)",
    "options": ["A. 20 m", "B. 40 m", "C. 60 m", "D. 80 m"],
    "correct_answer": "D. 80 m"
  },
  {
    "section": "Mechanics",
    "question": "A uniform rod of length 4 m and weight 100 N is pivoted at one end. A force of 40 N is applied vertically downward at the other end. What is the magnitude of the reaction at the pivot?",
    "options": ["A. 40 N", "B. 60 N", "C. 100 N", "D. 140 N"],
    "correct_answer": "D. 140 N"
  },
  {
    "section": "Mechanics",
    "question": "A car of mass 1000 kg accelerates from rest to 20 m/s in 5 seconds on a horizontal road. If the frictional force is 500 N, what is the power developed by the engine at the end of 5 seconds?",
    "options": ["A. 40 kW", "B. 50 kW", "C. 60 kW", "D. 80 kW"],
    "correct_answer": "C. 60 kW"
  },
  {
    "section": "Mechanics",
    "question": "A ball of mass 0.2 kg is dropped from a height of 5 m onto a hard floor and rebounds to a height of 3.2 m. What is the impulse received by the floor? (g = 10 m/s²)",
    "options": ["A. 0.8 Ns", "B. 1.2 Ns", "C. 1.6 Ns", "D. 2.0 Ns"],
    "correct_answer": "C. 1.6 Ns"
  },
  {
    "section": "Mechanics",
    "question": "A body of mass 5 kg is attached to a string of length 2 m and whirled in a vertical circle. What is the minimum speed at the top of the circle for the string to remain taut? (g = 10 m/s²)",
    "options": ["A. √10 m/s", "B. √20 m/s", "C. √30 m/s", "D. √40 m/s"],
    "correct_answer": "B. √20 m/s"
  },
  {
    "section": "Mechanics",
    "question": "A block of mass 3 kg is placed on a horizontal surface. A horizontal force of 15 N is applied to it. The coefficient of kinetic friction is 0.2. What is the acceleration? (g = 10 m/s²)",
    "options": ["A. 1 m/s²", "B. 2 m/s²", "C. 3 m/s²", "D. 4 m/s²"],
    "correct_answer": "C. 3 m/s²"
  },
  {
    "section": "Mechanics",
    "question": "A simple pendulum has a period of 2 s on Earth. What is its period on a planet where the acceleration due to gravity is 4 times that on Earth?",
    "options": ["A. 0.5 s", "B. 1 s", "C. 2 s", "D. 4 s"],
    "correct_answer": "B. 1 s"
  },
  {
    "section": "Mechanics",
    "question": "A body of mass m is projected at an angle θ to the horizontal with speed u. The rate of change of momentum at the highest point is",
    "options": ["A. mu cosθ", "B. mg", "C. 0", "D. mu sinθ"],
    "correct_answer": "B. mg"
  },
  {
    "section": "Mechanics",
    "question": "Two forces of magnitudes 6 N and 8 N act on a particle. The resultant force has a magnitude of 10 N. What is the angle between the forces?",
    "options": ["A. 0°", "B. 60°", "C. 90°", "D. 120°"],
    "correct_answer": "C. 90°"
  },
  {
    "section": "Mechanics",
    "question": "A 5 kg block is on a rough horizontal surface (μ = 0.4). A horizontal force of 30 N is applied. What is the frictional force acting? (g = 10 m/s²)",
    "options": ["A. 20 N", "B. 30 N", "C. 40 N", "D. 50 N"],
    "correct_answer": "A. 20 N"
  },
  {
    "section": "Mechanics",
    "question": "A particle moves in a circle of radius 0.5 m with a constant angular speed of 4 rad/s. What is the magnitude of its acceleration?",
    "options": ["A. 2 m/s²", "B. 4 m/s²", "C. 8 m/s²", "D. 16 m/s²"],
    "correct_answer": "C. 8 m/s²"
  },
  {
    "section": "Mechanics",
    "question": "A stone is thrown horizontally from a cliff 125 m high with a speed of 30 m/s. How far from the base of the cliff does it strike the ground? (g = 10 m/s²)",
    "options": ["A. 75 m", "B. 100 m", "C. 125 m", "D. 150 m"],
    "correct_answer": "D. 150 m"
  },
  {
    "section": "Mechanics",
    "question": "A 10 kg block is placed on a frictionless incline of angle 30°. What is the acceleration of the block down the incline? (g = 10 m/s²)",
    "options": ["A. 2.5 m/s²", "B. 5 m/s²", "C. 7.5 m/s²", "D. 10 m/s²"],
    "correct_answer": "B. 5 m/s²"
  },
  {
    "section": "Mechanics",
    "question": "A ball of mass 0.1 kg is thrown vertically upward with a speed of 15 m/s. What is the kinetic energy at the highest point? (g = 10 m/s²)",
    "options": ["A. 0 J", "B. 1.125 J", "C. 11.25 J", "D. 22.5 J"],
    "correct_answer": "A. 0 J"
  },
  {
    "section": "Mechanics",
    "question": "A particle of mass 2 kg moves with velocity v = (3i + 4j) m/s. What is its kinetic energy?",
    "options": ["A. 5 J", "B. 10 J", "C. 15 J", "D. 25 J"],
    "correct_answer": "D. 25 J"
  },
  {
    "section": "Mechanics",
    "question": "A body of mass 5 kg is acted upon by a force F = (3t² + 2t) N. What is the impulse from t = 0 to t = 2 seconds?",
    "options": ["A. 8 Ns", "B. 12 Ns", "C. 16 Ns", "D. 20 Ns"],
    "correct_answer": "B. 12 Ns"
  },
  {
    "section": "Mechanics",
    "question": "A 2 kg mass moving at 3 m/s collides elastically with a stationary 4 kg mass. What is the velocity of the 2 kg mass after collision?",
    "options": ["A. -1 m/s", "B. 0 m/s", "C. 1 m/s", "D. 2 m/s"],
    "correct_answer": "A. -1 m/s"
  },
  {
    "section": "Mechanics",
    "question": "A ball is dropped from a height of 45 m. At the same time, another ball is thrown upward from the ground with a speed of 30 m/s. At what height above the ground do they meet? (g = 10 m/s²)",
    "options": ["A. 10 m", "B. 15 m", "C. 20 m", "D. 25 m"],
    "correct_answer": "C. 20 m"
  },
  {
    "section": "Mechanics",
    "question": "A man of mass 80 kg stands on a weighing scale in an elevator. The scale reads 960 N. What is the acceleration of the elevator? (g = 10 m/s²)",
    "options": ["A. 2 m/s² upward", "B. 2 m/s² downward", "C. 12 m/s² upward", "D. 12 m/s² downward"],
    "correct_answer": "A. 2 m/s² upward"
  },
  {
    "section": "Mechanics",
    "question": "A car of mass 800 kg is moving at 20 m/s. The driver applies brakes and the car stops in 4 seconds. What is the average braking force?",
    "options": ["A. 2000 N", "B. 4000 N", "C. 6000 N", "D. 8000 N"],
    "correct_answer": "B. 4000 N"
  },
  {
    "section": "Mechanics",
    "question": "A stone is projected at an angle of 60° to the horizontal with a speed of 40 m/s. What is the time to reach the highest point? (g = 10 m/s², sin60° = √3/2 ≈ 0.866)",
    "options": ["A. 2.0 s", "B. 2.5 s", "C. 3.46 s", "D. 4.0 s"],
    "correct_answer": "C. 3.46 s"
  },
  {
    "section": "Mechanics",
    "question": "A body of mass 1 kg is moving in a straight line with velocity v = 2t² + 3t (m/s). What is the net force acting on the body at t = 2 s?",
    "options": ["A. 7 N", "B. 11 N", "C. 14 N", "D. 22 N"],
    "correct_answer": "B. 11 N"
  },
  {
    "section": "Mechanics",
    "question": "A satellite of mass m orbits the Earth at a distance 2R from the Earth's center. If the gravitational force is F, what would be the force at a distance R?",
    "options": ["A. F/4", "B. F/2", "C. 2F", "D. 4F"],
    "correct_answer": "D. 4F"
  },
  {
    "section": "Mechanics",
    "question": "A 500 g ball moving at 4 m/s strikes a wall perpendicularly and rebounds with the same speed. What is the change in momentum?",
    "options": ["A. 0 kg m/s", "B. 2 kg m/s", "C. 4 kg m/s", "D. 8 kg m/s"],
    "correct_answer": "C. 4 kg m/s"
  },
  {
    "section": "Mechanics",
    "question": "A body of mass 2 kg is at rest on a smooth horizontal surface. A force of 6 N acts for 3 seconds. What is the final kinetic energy?",
    "options": ["A. 27 J", "B. 54 J", "C. 81 J", "D. 162 J"],
    "correct_answer": "C. 81 J"
  },
  {
    "section": "Mechanics",
    "question": "A particle moves in a circle of radius 2 m with constant tangential acceleration of 3 m/s². If it starts from rest, what is its centripetal acceleration after 2 seconds?",
    "options": ["A. 6 m/s²", "B. 12 m/s²", "C. 18 m/s²", "D. 24 m/s²"],
    "correct_answer": "C. 18 m/s²"
  },
  {
    "section": "Mechanics",
    "question": "A 2 kg block is placed on a rough incline of angle 37° (sin37° = 0.6, cos37° = 0.8). The coefficient of static friction is 0.5. Will the block slide? (g = 10 m/s²)",
    "options": ["A. Yes, because mg sinθ > friction", "B. No, because mg sinθ < friction", "C. Yes, because mg sinθ = friction", "D. No, because mg cosθ > friction"],
    "correct_answer": "A. Yes, because mg sinθ > friction"
  },
  {
    "section": "Mechanics",
    "question": "A force F = (2i + 3j) N acts on a particle and displaces it from (1,2) m to (3,5) m. What is the work done?",
    "options": ["A. 10 J", "B. 13 J", "C. 15 J", "D. 17 J"],
    "correct_answer": "D. 17 J"
  },
  {
    "section": "Mechanics",
    "question": "A simple pendulum of length 1 m has a bob of mass 0.1 kg. It is displaced to an angle of 60° and released. What is the tension in the string at the lowest point? (g = 10 m/s²)",
    "options": ["A. 1 N", "B. 2 N", "C. 3 N", "D. 4 N"],
    "correct_answer": "B. 2 N"
  },
  {
    "section": "Mechanics",
    "question": "A rocket of mass 1000 kg ejects fuel at a rate of 20 kg/s with exhaust velocity 500 m/s relative to the rocket. What is the initial thrust?",
    "options": ["A. 5000 N", "B. 10000 N", "C. 20000 N", "D. 50000 N"],
    "correct_answer": "B. 10000 N"
  },
  {
    "section": "Mechanics",
    "question": "A ball is thrown upward with speed u. The time taken to reach half the maximum height is",
    "options": ["A. u/g (1 - 1/√2)", "B. u/g (1 + 1/√2)", "C. u/(√2 g)", "D. u/g"],
    "correct_answer": "A. u/g (1 - 1/√2)"
  },
  {
    "section": "Mechanics",
    "question": "A uniform ladder of length 5 m and weight 200 N rests against a smooth vertical wall. The foot of the ladder is 3 m from the wall. What is the reaction from the wall?",
    "options": ["A. 75 N", "B. 100 N", "C. 150 N", "D. 200 N"],
    "correct_answer": "A. 75 N"
  },
  {
    "section": "Mechanics",
    "question": "A body of mass m moving with speed v collides obliquely with a stationary identical body. After collision, they move at 60° to each other. What is the speed of each?",
    "options": ["A. v/2", "B. v/√2", "C. v/√3", "D. v"],
    "correct_answer": "A. v/2"
  }
];

export const questionsData: Question[] = rawQuestions.map((q, i) => ({
  id: i + 1,
  section: q.section,
  questionText: q.question,
  options: q.options,
  correctAnswer: q.correct_answer,
}));
