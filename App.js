
class App  extends React.Component {
    state = {
        randomOne: "",
        newAdageText: "",  
        adages: [
            "out of sight out of mind.",
            "A penny saved is a penny earned.",
            "An ounce of prevention is worth a pound of cure.",
            "Eat to live, and not live to eat.",
            "Early to bed and early to rise, makes a man healthy, wealthy, and wise.",
            "Fish and visitors stink after three days.",
            "Little strokes fell great oaks.",
            "To err is human, to repent divine; to persist devilish.",
            "Well done is better than well said.",
        ]
    }

    handleGenerateButton = () => {
        //first let's get a random number form 0 to how many adages we got in state.adages table
        const random = Math.floor(Math.random() * this.state.adages.length);
        this.setState({
            randomOne: this.state.adages[random],
        })
    }

    handleAddOneButton = () => {
        // first let's validate text field, due to handleNewAdageText method in state we do have a text form text box, let's see if it's longer than 5 characters
        if (this.state.newAdageText.length <= 5) {
            alert("Sorry. To add new adage it has to be at least 6 characters long. Try one more time");
            this.setState({
                randomOne: "",
            })
        } else {
            //with map method we create new adages table, add to it new adage item and replace whole table in state obejct and clear the text field
            const newAdages = this.state.adages.map((adage) => adage);
            newAdages.push(this.state.newAdageText);
            alert("Added new adage. Currently in DB "+newAdages.length+" adages");
            this.setState({
                randomOne: "",
                newAdageText: "",
                adages: newAdages,
            });
        }
    }

    handleNewAdageText = event => {
        this.setState({
            newAdageText: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>"RAG" - Random Adages Generator</h1>
                <p>
                    Exercise done while learning React.js Here to know: JSX, Components, States, Forms - BASICS :)  <br />
                    This is fully Ract app, no backed. We start with 9 adages and can add new ones, which are stored while app is alive. Once refreshed it restes. 
                </p>
                <button onClick={this.handleGenerateButton}>Generate Random One</button>
                <br />
                <input type="text" onChange={this.handleNewAdageText} value={this.state.newAdageText} />
                <button onClick={this.handleAddOneButton}>Add new one</button>
                <br />
                <h2>{this.state.randomOne}</h2>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
 