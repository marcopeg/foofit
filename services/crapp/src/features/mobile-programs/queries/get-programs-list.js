export default `
query getProgramsList (
    $lastUpdate: String
) {
    session {
        getProgramsList (
            lastUpdate: $lastUpdate
        ) {
            id
            title
            desc
            lastUpdate
            trainings {
                id
                title
                duration
                progression {
                    id
                    value
                }
            }
            exercises {
                id
                type
                title
            }
        }
    }
}`
