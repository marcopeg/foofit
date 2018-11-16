
export const createState = async (initialState = {}, history) => {
    return {
        ...initialState,
        history,
    }
}
