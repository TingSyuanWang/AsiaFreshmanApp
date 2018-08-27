import React from 'react';
import { StackNavigator } from 'react-navigation';

import Homepage from '../pages/Homepage';

import AboutAsia from '../pages/MainItem/AboutAsia';
import AsiaSong from '../pages/AboutAsia/AsiaSong';
import Principal from '../pages/AboutAsia/Principal';

import LearningDevelopment from '../pages/MainItem/LearningDevelopment';
import Course from '../pages/LearningDevelopment/Course';
import Category from '../pages/LearningDevelopment/Course/Category';
import Selection from '../pages/LearningDevelopment/Course/Selection';
import Timetable from '../pages/LearningDevelopment/Course/Timetable';
import GeneralCourse from '../pages/LearningDevelopment/Course/GeneralCourse';
import RequiredCourses from '../pages/LearningDevelopment/Course/RequiredCourses';
import Takeoff from '../pages/LearningDevelopment/Takeoff';
import ServiceLearning from '../pages/LearningDevelopment/ServiceLearning';
import SoftwareResources from '../pages/LearningDevelopment/SoftwareResources';
import LibraryResources from '../pages/LearningDevelopment/LibraryResources';
import CareerDevelopment from '../pages/LearningDevelopment/CareerDevelopment';

import FriendlyCampus from '../pages/MainItem/FriendlyCampus';
import Military from '../pages/FriendlyCampus/Military';
import CampusSecurity from '../pages/FriendlyCampus/CampusSecurity';
import GenderEquality from '../pages/FriendlyCampus/GenderEquality';
import CampusLaw from '../pages/FriendlyCampus/CampusLaw';
import StudentsAppeals from '../pages/FriendlyCampus/StudentsAppeals';

import PhysicalHealth from '../pages/MainItem/PhysicalHealth';
import Checkup from '../pages/PhysicalHealth/Checkup';
import ConsultService from '../pages/PhysicalHealth/ConsultService';

import CampusLife from '../pages/MainItem/CampusLife';
import Dormitory from '../pages/CampusLife/Dormitory';
import GroupIntroduction from '../pages/CampusLife/GroupIntroduction';
import GeneralInformation from '../pages/CampusLife/GeneralInformation';

import HappySchool from '../pages/MainItem/HappySchool';
import BailoutCare from '../pages/HappySchool/BailoutCare';
import SchoolTuitionReduction from '../pages/HappySchool/SchoolTuitionReduction';
import SchoolLoan from '../pages/HappySchool/SchoolLoan';
import TakeoffPlan from '../pages/HappySchool/TakeoffPlan';

export const Freshman = StackNavigator({
    Homepage: { screen: Homepage },
    AboutAsia: { screen: AboutAsia },
    AsiaSong: { screen: AsiaSong },
    Principal: { screen: Principal },
    LearningDevelopment: {screen: LearningDevelopment},
    Course: { screen: Course },
        Category: { screen: Category },
        Selection: { screen: Selection },
        Timetable: { screen: Timetable },
        GeneralCourse: { screen: GeneralCourse },
        RequiredCourses: { screen: RequiredCourses },
    Takeoff: { screen: Takeoff },
    ServiceLearning: { screen: ServiceLearning },
    SoftwareResources: { screen: SoftwareResources },
    LibraryResources: { screen: LibraryResources },
    CareerDevelopment: { screen: CareerDevelopment },
    FriendlyCampus: { screen: FriendlyCampus },
    Military: { screen: Military },
    CampusSecurity: { screen: CampusSecurity},
    GenderEquality: { screen: GenderEquality},
    CampusLaw: { screen: CampusLaw},
    StudentsAppeals: { screen: StudentsAppeals},
    PhysicalHealth: { screen: PhysicalHealth},
    Checkup: { screen: Checkup},
    ConsultService: { screen: ConsultService},
    CampusLife: { screen: CampusLife },
    Dormitory: { screen: Dormitory },
    GroupIntroduction: { screen: GroupIntroduction },
    GeneralInformation: { screen: GeneralInformation },
    HappySchool: { screen: HappySchool },
    BailoutCare: { screen: BailoutCare },
    SchoolTuitionReduction: { screen: SchoolTuitionReduction },
    SchoolLoan: { screen: SchoolLoan },
    TakeoffPlan: { screen: TakeoffPlan }
});