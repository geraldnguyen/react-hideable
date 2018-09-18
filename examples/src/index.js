import React, {PureComponent} from 'react';
import { render} from 'react-dom';
import Hideable from '../../src/hideable';

class App extends PureComponent {
    constructor(){
        super();

        this.state = {hideContainer: false}

        this.closeContainer = this.closeContainer.bind(this);
        this.appear = this.appear.bind(this);
        this.disappear = this.disappear.bind(this);
    }

    closeContainer() {
        this.setState({...this.state, hideContainer: true});
    }

    disappear() {
        this.setState({...this.state, disappear: true});
    }

    appear() {
        this.setState({...this.state, disappear: false});
    }

    render(){
        const hideMe = (
            <div>
                <h1>I'm visible</h1>
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

        return (
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
        );
    }
}


render(<App />, document.getElementById("root"));