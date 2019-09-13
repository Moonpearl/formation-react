import { combineReducers } from "redux";
import articles from './articles';
import logged from './logged';

export default combineReducers({ articles, logged });
