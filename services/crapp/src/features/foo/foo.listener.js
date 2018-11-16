export default [
    {
        type: '@@INIT',
        handler: (action, { history }) => (dispatch) => {
            console.log('init foo listener')
        },
    },
    {
        type: '@@THEN',
        handler: (action, { history }) => {
            console.log('handle @@then')
            return (dispatch) => {
                console.log('then foo listener')
            }
        },
    },
]
