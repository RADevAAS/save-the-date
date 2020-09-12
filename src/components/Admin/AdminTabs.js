import EventView from "./EventView/EventView"
import GuestsList from "./GuestList/GuestsList"
import Budget from "./Budget/Budget"
import House from "./House/House"
import Preference from "./Preferences/Preference"
import ContactUs from "../ContactUs/ContactUs"

export default [
    {
        text: "EventView",
        component: EventView,
    },
    {
        text: "GuestsList",
        component: GuestsList,
    },
    {
        text: "Budget",
        component: Budget,
    },
    {
        text: "House",
        component: House,
    },
    {
        text: "Preference",
        component: Preference,
    },
    {
        text: "ContactUs",
        component: ContactUs,
    },
]
