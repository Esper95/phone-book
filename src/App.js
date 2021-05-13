import React, {Component} from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
class App extends Component{
    id =2
    state = {
        information : [
            {
                id:0,
                name : '최정상',
                phone : '010-4031-3115'
            },
            {
                id:1,
                name : '비정상',
                phone: '010-0000-1111'
            }
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        })
    }
    render() {
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList data={this.state.information}/>
            </div>
        );
    }
}

export default App;

