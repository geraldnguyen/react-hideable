# react-hideable
A simple hideable container

Demo: https://geraldnguyen.github.io/react-hideable/

```javascript
closeContainer() {
    this.setState({...this.state, hideContainer: true});
}

disappear() {
    this.setState({...this.state, disappear: true});
}

appear() {
    this.setState({...this.state, disappear: false});
}
```

```javascript
const hideMe = (
    <div>
        <h1>I am visible</h1>
        <button onClick={this.closeContainer}>Hide me</button>
    </div>
)

const disappearMe = (
    <div>
        <h1>I can disappear and appear again</h1>
        <button onClick={this.disappear}>Disappear!</button>
    </div>
);

const appearMe = (
    <button onClick={this.appear}>Appear!</button>
);
```

```javascript
<div>
    <Hideable hidden={this.state.hideContainer}>
        {hideMe}
    </Hideable>
    <p>Rest of the content</p>
    <br />
    <br />
    <br />
    <Hideable hidden={this.state.disappear} hiddenPH={appearMe}>
        {disappearMe}
    </Hideable>
</div>
```


Special thanks to this guide: https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220
