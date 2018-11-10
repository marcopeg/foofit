export default `
mutation signup (
    $email: String!
    $passw: String!
) {
    signup (
        email: $email
        passw: $passw
    ) {
        id
    }
}`
