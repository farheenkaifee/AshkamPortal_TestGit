import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_POST,
  UPDATE_STATUS,
  TODOLIST
} from "../constants/actionTypes";

import * as API from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// _________________________________________

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await API.create(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// _________________________________________________________________

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await API.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// _______________________________________________________________________________________

export const deletePost = (id) => async (dispatch) => {
  try {
    await API.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await API.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = (id, activeStatus) => async (dispatch) => {
  try {
    const { data } = await API.updateStatus(id, activeStatus);

    dispatch({ type: UPDATE_STATUS, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const todoList = (id,state) => async(dispatch) => {
  console.log("Hello I am working..!!");
  // console.log(id);
  // console.log(state);

  try {
    const { data } = await API.todoList(id,state);
    //console.log(data);
    dispatch({type : TODOLIST ,payload : data});
    console.log("Hello");
  } catch (error) {
    console.log(error);
  }
};
