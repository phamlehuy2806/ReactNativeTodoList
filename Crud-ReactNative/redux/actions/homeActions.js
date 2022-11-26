export const HOME_ACTIONS = "HOME_ACTIONS";

export const homeAction = (home) => {
    return {
        type: HOME_ACTIONS,
        payload:{
            homeTodo: home.addtodo
        }
    }
}