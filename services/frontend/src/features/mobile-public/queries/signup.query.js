export default `
query signup (
    $email: String!
    $passw: String!
) {
    signup (
        email: $email
        signup: $signup
    ) {
        id
    }
}`
