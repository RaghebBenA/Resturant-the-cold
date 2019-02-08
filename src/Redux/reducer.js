import { DISHES } from "../Share/dishes";
import { COMMENTS } from "../Share/comments";
import { LEADERS } from "../Share/Leaders";
import { PROMOTIONS } from "../Share/pormotion";


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

export const Reducer = (state = initialState, action) => {
    return state;
}