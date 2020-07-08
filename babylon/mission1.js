const START_POS = new BABYLON.Vector3(-10.0, 8.0, -10.0);
const SCALE_HERO = new BABYLON.Vector3(1.0, 1.0, 1.0);
const TARGET_POS = new BABYLON.Vector3(0.0, 10, -50.0);
const FAR_CAM_POS = new BABYLON.Vector3(0.0, 45.0, 200.0);
const OBJ_POS_1 = new BABYLON.Vector3(10.0, 10.0, -10.0);
const OXYGEN_POS = new BABYLON.Vector3(-10.0, 7.2, -12.0);
const SPEED = 0.15//0.75; //m/s
const GRAVITY = -0.162//-1.62; // m/s^2
const DELTA = -SPEED * Math.cos(BABYLON.Tools.ToRadians(45.0)) / GRAVITY * 2
const TXT_TASK = "MISSION 1: Your partner needs you. Take an oxygen tank and save his life!";
const TXT_FINISH = "Congrats, you saved your partner!!!";
const TASK_SOUND = "task1.wav"
const GOAL_SOUND = "success1.wav"
const BACK_SOUND = "back1.wav"
const TXT_GOAL = "MISSION 1: Completed!";
const SKY_PATH = "../images/galaxy.jpg";
const MAP_PATH = "moon_new.babylon";
const MAP_TEXT = "moon_text.jpg"
const BOY_PATH = "boy_new_clean.babylon";
const OBJ_PATH_1 = "nav_moon.babylon";
const OBJ_PATH_2 = "boy_new_target.babylon";
const MOON = true;
const MINI_MAP_PATH = "../images/height_moon.png";