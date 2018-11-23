import React from 'react'
import MobilePage, { Button, Space, Divider, Title, Text, mixins } from 'features/mobile/MobilePage'

const styles = {
    wrapper: {
        ...mixins.flexCentered,
        flex: 1,
        flexDirection: 'column',
        marginBottom: '50%',
    },
    copy: {
        textAlign: 'center',
    },
}

const Home = () => (
    <MobilePage>
        <MobilePage.Header>Header</MobilePage.Header>
        <MobilePage.Body withPadding flex>
            <div style={styles.wrapper}>
                <div style={styles.copy}>
                    <Title>FooFit</Title>
                    <Text>
                        welcome to the greatest<br />
                        shared training community
                    </Text>
                </div>
                <Space />
                <Divider />
                <Space />
                <Button
                    block
                    linkTo={'/signup'}
                    children={'JOIN THE COMMUNITY'}
                />
                <Space />
                <Button
                    block
                    type="secondary"
                    linkTo={'/login'}
                    children={'login'}
                />
            </div>
        </MobilePage.Body>
        <MobilePage.Footer>footer</MobilePage.Footer>
    </MobilePage>
)

export default Home
