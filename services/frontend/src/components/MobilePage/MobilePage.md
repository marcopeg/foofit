```js
const MobilePageComponentWrapper = require('./lib/styleguidist.wrapper1').default
const mr = { marginRight: 10 }
const mb = { marginBottom: 10 }
;<MobilePageComponentWrapper>
    {(theme, width, height ) => (
        <div style={{ width, height }}>
            <MobilePage theme={theme}>
                <MobilePage.Header>
                    header
                </MobilePage.Header>
                <MobilePage.Body withPadding>
                    <p>this is a page body</p>
                    {Array.apply(null, {length: 300}).map(Number.call, Number).map(i => (
                        <div key={`MobilePageExBody${i}`}>{i}</div>
                    ))}
                </MobilePage.Body>
                <MobilePage.Footer>
                    footer
                </MobilePage.Footer>
            </MobilePage>
        </div>
    )}
</MobilePageComponentWrapper>
```
