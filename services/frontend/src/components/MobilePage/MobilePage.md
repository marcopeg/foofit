```js
initialState = { theme: 'white', width: '100%', height: '650px' }
wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontFamily: 'monospace',
}
inputStyle = {
    textAlign: 'right',
    width: 40,
    border: '1px solid #666',
    borderRadius: 4,
    padding: '2px 5px'
}
;<div>
    <div style={wrapperStyle}>
        <div>
            <input
                value={state.width}
                onChange={(e) => setState({ width: e.target.value })}
                style={inputStyle}
            />
            {' x '}
            <input
                value={state.height}
                onChange={(e) => setState({ height: e.target.value })}
                style={inputStyle}
            />
        </div>
        <div>
            theme: 
            <select
                value={state.theme}
                onChange={(e) => setState({ theme: e.target.value })}
                style={{ ...inputStyle, width: 80 }}
                dir="rtl"
            >
                <option value={'white'}>white</option>
                <option value={'dark'}>dark</option>
                <option value={'c1'}>c1</option>
            </select>
        </div>
    </div>
    <div style={{ width: state.width, height: state.height, border: '5px solid #ddd' }}>
        <MobilePage theme={state.theme}>
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
</div>
```
