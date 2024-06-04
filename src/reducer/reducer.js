function factsReducer (previousState = [], action) {

    switch (action.type){
        case 'ADD':
            return [...previousState, action.fact]
        default:
            return previousState

    }
}
export default factsReducer