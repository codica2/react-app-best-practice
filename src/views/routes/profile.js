import PersonalDetails from "@components/Profile/PersonalDetails";
import Skills from "@components/Profile/Skills";
import Trading from "@components/Profile/Trading";
import Billings from "@components/Profile/Billings";

export const specialistRoutes = [
  {
    name: "personal-details",
    path: "/profile/personal-details",
    label: "Personal Details",
    component: PersonalDetails
  },
  {
    name: "skills",
    path: "/profile/skills&experience",
    label: "My skills & experience",
    component: Skills
  },
  {
    name: "trading",
    path: "/profile/trading",
    label: "Trading information",
    component: Trading
  },
  {
    name: "billing",
    path: "/profile/billings",
    label: "My Billing",
    component: Billings
  }
];

export const clientRoutes = [
  {
    name: "profile",
    path: "/profile/info",
    label: "Personal Details",
    component: PersonalDetails
  },
  {
    name: "company",
    path: "/profile/company",
    label: "My skills & experience",
    component: Skills
  },
  {
    name: "billing",
    path: "/profile/billings",
    label: "My Billings",
    component: Billings
  }
];
