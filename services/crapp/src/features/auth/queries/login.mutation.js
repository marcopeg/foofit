export default `
mutation login (
    $email: String!
    $passw: String!
) {
    login (
        email: $email
        passw: $passw
    ) {
        id
    }
}`
