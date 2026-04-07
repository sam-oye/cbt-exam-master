export interface Question {
  id: number;
  section: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const rawQuestions = [
  { section: "Mechanics", question: "A stone is thrown vertically upward with a speed of 30 m/s. What is the maximum height reached? (g = 10 m/s²)", options: ["A. 30 m", "B. 45 m", "C. 60 m", "D. 90 m"], correct_answer: "B. 45 m" },
  { section: "Mechanics", question: "A body of mass 2 kg is moving with a velocity of 5 m/s. A constant force of 4 N acts on it in the direction opposite to motion. How long will it take to come to rest?", options: ["A. 0.5 s", "B. 1.0 s", "C. 2.5 s", "D. 5.0 s"], correct_answer: "C. 2.5 s" },
  { section: "Mechanics", question: "A car accelerates uniformly from rest to a speed of 20 m/s in 10 seconds. What is the distance covered?", options: ["A. 50 m", "B. 100 m", "C. 150 m", "D. 200 m"], correct_answer: "B. 100 m" },
  { section: "Mechanics", question: "A ball of mass 0.5 kg is hit with a bat and its velocity changes from 10 m/s to 30 m/s in 0.2 s. What is the average force exerted?", options: ["A. 20 N", "B. 25 N", "C. 50 N", "D. 100 N"], correct_answer: "C. 50 N" },
  { section: "Mechanics", question: "A 5 kg block is pulled along a horizontal surface by a force of 20 N. If the coefficient of kinetic friction is 0.2, what is the acceleration? (g = 10 m/s²)", options: ["A. 1 m/s²", "B. 2 m/s²", "C. 3 m/s²", "D. 4 m/s²"], correct_answer: "B. 2 m/s²" },
  { section: "Mechanics", question: "A projectile is fired at an angle of 30° to the horizontal with a velocity of 40 m/s. What is the time of flight? (g = 10 m/s²)", options: ["A. 2 s", "B. 3 s", "C. 4 s", "D. 5 s"], correct_answer: "C. 4 s" },
  { section: "Mechanics", question: "A body of mass 10 kg is suspended by a rope. If the rope breaks when the tension exceeds 120 N, what is the maximum upward acceleration the rope can withstand? (g = 10 m/s²)", options: ["A. 1 m/s²", "B. 2 m/s²", "C. 3 m/s²", "D. 4 m/s²"], correct_answer: "B. 2 m/s²" },
  { section: "Mechanics", question: "The coefficient of static friction between a block and a horizontal surface is 0.5. What is the minimum horizontal force required to move a 10 kg block? (g = 10 m/s²)", options: ["A. 20 N", "B. 30 N", "C. 40 N", "D. 50 N"], correct_answer: "D. 50 N" },
  { section: "Mechanics", question: "A satellite orbits the Earth at a height equal to the Earth's radius. What is its orbital speed? (Earth's radius R = 6400 km, g = 10 m/s²)", options: ["A. 4.0 km/s", "B. 5.6 km/s", "C. 7.9 km/s", "D. 11.2 km/s"], correct_answer: "B. 5.6 km/s" },
  { section: "Mechanics", question: "A body of mass 2 kg is attached to a string of length 1 m and whirled in a horizontal circle at 5 revolutions per second. What is the centripetal force?", options: ["A. 100π² N", "B. 200π² N", "C. 300π² N", "D. 400π² N"], correct_answer: "B. 200π² N" },
  { section: "Heat and Energy", question: "A 200 g copper block at 100°C is placed into 300 g of water at 20°C. The final temperature is 25°C. What is the specific heat capacity of copper? (Specific heat of water = 4200 J/kg°C)", options: ["A. 300 J/kg°C", "B. 350 J/kg°C", "C. 400 J/kg°C", "D. 450 J/kg°C"], correct_answer: "C. 400 J/kg°C" },
  { section: "Heat and Energy", question: "A gas expands from 2 m³ to 4 m³ at constant pressure of 1.0 × 10⁵ Pa. How much work is done by the gas?", options: ["A. 1.0 × 10⁵ J", "B. 2.0 × 10⁵ J", "C. 3.0 × 10⁵ J", "D. 4.0 × 10⁵ J"], correct_answer: "B. 2.0 × 10⁵ J" },
  { section: "Heat and Energy", question: "An iron rod of length 2 m at 0°C is heated to 100°C. If the coefficient of linear expansion is 1.2 × 10⁻⁵ /K, what is the new length?", options: ["A. 2.0024 m", "B. 2.024 m", "C. 2.24 m", "D. 2.4 m"], correct_answer: "A. 2.0024 m" },
  { section: "Heat and Energy", question: "How much heat is required to convert 500 g of ice at 0°C to water at 20°C? (Latent heat of fusion = 3.34 × 10⁵ J/kg, specific heat of water = 4200 J/kg°C)", options: ["A. 1.67 × 10⁵ J", "B. 2.09 × 10⁵ J", "C. 2.51 × 10⁵ J", "D. 3.76 × 10⁵ J"], correct_answer: "B. 2.09 × 10⁵ J" },
  { section: "Heat and Energy", question: "The temperature of a gas is increased from 27°C to 327°C at constant volume. The ratio of final pressure to initial pressure is", options: ["A. 1:1", "B. 2:1", "C. 3:1", "D. 4:1"], correct_answer: "B. 2:1" },
  { section: "Waves and Sound", question: "A wave has a frequency of 500 Hz and a speed of 340 m/s. What is the phase difference between two points 0.17 m apart?", options: ["A. π/2 rad", "B. π rad", "C. 3π/2 rad", "D. 2π rad"], correct_answer: "B. π rad" },
  { section: "Waves and Sound", question: "A pipe closed at one end has a length of 0.85 m. If the speed of sound is 340 m/s, what is the fundamental frequency?", options: ["A. 100 Hz", "B. 200 Hz", "C. 400 Hz", "D. 800 Hz"], correct_answer: "A. 100 Hz" },
  { section: "Waves and Sound", question: "A sound wave of intensity 10⁻⁶ W/m² has an intensity level (in dB) of (I₀ = 10⁻¹² W/m²)", options: ["A. 20 dB", "B. 40 dB", "C. 60 dB", "D. 80 dB"], correct_answer: "C. 60 dB" },
  { section: "Waves and Sound", question: "Two sound sources produce frequencies 256 Hz and 258 Hz. How many beats are heard per second?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], correct_answer: "B. 2" },
  { section: "Light and Optics", question: "A concave mirror has a focal length of 15 cm. Where should an object be placed to obtain a real image twice the size of the object?", options: ["A. 7.5 cm", "B. 15 cm", "C. 22.5 cm", "D. 30 cm"], correct_answer: "C. 22.5 cm" },
  { section: "Light and Optics", question: "The critical angle for a glass-air interface is 42°. What is the refractive index of glass?", options: ["A. 1.33", "B. 1.49", "C. 1.50", "D. 1.67"], correct_answer: "B. 1.49" },
  { section: "Light and Optics", question: "A convex lens of focal length 20 cm is used to form an image of an object placed 15 cm from the lens. The image is", options: ["A. Real and inverted", "B. Virtual and erect", "C. Real and erect", "D. Virtual and inverted"], correct_answer: "B. Virtual and erect" },
  { section: "Light and Optics", question: "A beam of light passes from air into water (n = 1.33). If the angle of incidence is 45°, what is the angle of refraction?", options: ["A. 28.1°", "B. 32.1°", "C. 45.0°", "D. 60.0°"], correct_answer: "B. 32.1°" },
  { section: "Light and Optics", question: "The focal length of a converging lens is 10 cm. Its power in diopters is", options: ["A. 0.1 D", "B. 1.0 D", "C. 10 D", "D. 100 D"], correct_answer: "C. 10 D" },
  { section: "Electricity and Magnetism", question: "A 10 Ω resistor and a 20 Ω resistor are connected in parallel across a 12 V battery. What is the total current drawn?", options: ["A. 0.4 A", "B. 0.6 A", "C. 1.2 A", "D. 1.8 A"], correct_answer: "D. 1.8 A" },
  { section: "Electricity and Magnetism", question: "A wire of resistance 5 Ω is stretched to double its original length. What is its new resistance?", options: ["A. 2.5 Ω", "B. 5 Ω", "C. 10 Ω", "D. 20 Ω"], correct_answer: "D. 20 Ω" },
  { section: "Electricity and Magnetism", question: "A 100 W bulb is connected to a 250 V supply. What is the current drawn?", options: ["A. 0.2 A", "B. 0.4 A", "C. 2.5 A", "D. 25 A"], correct_answer: "B. 0.4 A" },
  { section: "Electricity and Magnetism", question: "Three capacitors of 2 μF, 3 μF, and 6 μF are connected in series. The equivalent capacitance is", options: ["A. 1 μF", "B. 2 μF", "C. 3 μF", "D. 6 μF"], correct_answer: "A. 1 μF" },
  { section: "Electricity and Magnetism", question: "A transformer has 200 primary turns and 800 secondary turns. If the primary voltage is 120 V, what is the secondary voltage?", options: ["A. 30 V", "B. 120 V", "C. 240 V", "D. 480 V"], correct_answer: "D. 480 V" },
  { section: "Electricity and Magnetism", question: "A galvanometer of resistance 50 Ω gives full-scale deflection for 5 mA. How can it be converted to a voltmeter reading 0–10 V?", options: ["A. Series resistor 1950 Ω", "B. Series resistor 2000 Ω", "C. Shunt resistor 0.25 Ω", "D. Shunt resistor 0.5 Ω"], correct_answer: "A. Series resistor 1950 Ω" },
  { section: "Modern Physics", question: "The photoelectric work function of a metal is 2.5 eV. What is the threshold wavelength? (h = 6.63 × 10⁻³⁴ Js, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J)", options: ["A. 497 nm", "B. 400 nm", "C. 350 nm", "D. 250 nm"], correct_answer: "A. 497 nm" },
  { section: "Modern Physics", question: "The half-life of a radioactive substance is 4 days. What fraction of the original sample remains after 16 days?", options: ["A. 1/2", "B. 1/4", "C. 1/8", "D. 1/16"], correct_answer: "D. 1/16" },
  { section: "Modern Physics", question: "In a nuclear reaction, the mass defect is 0.1 u. The energy released is (1 u = 931.5 MeV/c²)", options: ["A. 9.315 MeV", "B. 93.15 MeV", "C. 931.5 MeV", "D. 9315 MeV"], correct_answer: "B. 93.15 MeV" },
  { section: "Modern Physics", question: "A photon has an energy of 3.0 eV. What is its frequency? (h = 6.63 × 10⁻³⁴ Js)", options: ["A. 4.5 × 10¹⁴ Hz", "B. 7.2 × 10¹⁴ Hz", "C. 9.0 × 10¹⁴ Hz", "D. 1.2 × 10¹⁵ Hz"], correct_answer: "B. 7.2 × 10¹⁴ Hz" },
  { section: "Modern Physics", question: "Which of the following particles has the highest penetrating power?", options: ["A. Alpha particles", "B. Beta particles", "C. Gamma rays", "D. Neutrons"], correct_answer: "C. Gamma rays" },
  { section: "General and Other", question: "The phenomenon of total internal reflection occurs when light travels from", options: ["A. Air to water", "B. Water to glass", "C. Glass to air", "D. Air to glass"], correct_answer: "C. Glass to air" },
  { section: "General and Other", question: "The unit of magnetic flux is", options: ["A. Tesla", "B. Weber", "C. Henry", "D. Gauss"], correct_answer: "B. Weber" },
  { section: "General and Other", question: "A step-down transformer has a turns ratio of 10:1. If the primary voltage is 240 V, the secondary voltage is", options: ["A. 24 V", "B. 48 V", "C. 2400 V", "D. 240 V"], correct_answer: "A. 24 V" },
  { section: "General and Other", question: "The product of the pressure and volume of a fixed mass of an ideal gas is proportional to its", options: ["A. Celsius temperature", "B. Absolute temperature", "C. Number of molecules", "D. Density"], correct_answer: "B. Absolute temperature" },
  { section: "General and Other", question: "Which of the following statements about the mass of a body is true?", options: ["A. It varies with location", "B. It is the same as weight", "C. It is a measure of inertia", "D. It depends on gravitational field"], correct_answer: "C. It is a measure of inertia" },
];

export const questionsData: Question[] = rawQuestions.map((q, i) => ({
  id: i + 1,
  section: q.section,
  questionText: q.question,
  options: q.options,
  correctAnswer: q.correct_answer,
}));
